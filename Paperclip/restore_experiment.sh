#!/usr/bin/env bash
set -euo pipefail

PAPERCLIP_USER="${PAPERCLIP_USER:-paperclip}"
PAPERCLIP_HOME="${PAPERCLIP_HOME:-/home/$PAPERCLIP_USER}"
INSTANCE="${INSTANCE:-default}"
INSTANCE_DIR="$PAPERCLIP_HOME/.paperclip/instances/$INSTANCE"
DB_DIR="$INSTANCE_DIR/db"
DUMP="${DUMP:-$(cd "$(dirname "$0")" && pwd)/paperclip-experimento-anonimizado.sql.gz}"
PG_PORT="${PG_PORT:-54329}"
STAMP="$(date +%Y%m%d-%H%M%S)"
SAFETY="$INSTANCE_DIR/data/backups/pre-public-restore-$STAMP"

if [[ $EUID -ne 0 ]]; then
  echo "Execute como root: sudo $0" >&2
  exit 1
fi
[[ -f "$DUMP" ]] || { echo "Dump ausente: $DUMP" >&2; exit 1; }
gzip -t "$DUMP"
[[ -d "$DB_DIR" ]] || { echo "Inicialize o Paperclip antes da restauração." >&2; exit 1; }

PGBIN="$(find /usr/local/lib/node_modules/paperclipai -type f -path '*/native/bin/pg_ctl' -printf '%h\n' | head -1)"
[[ -x "$PGBIN/pg_ctl" ]] || { echo "PostgreSQL embutido não encontrado." >&2; exit 1; }

install -d -o "$PAPERCLIP_USER" -g "$PAPERCLIP_USER" "$SAFETY"
systemctl stop paperclip.service 2>/dev/null || true
for _ in $(seq 1 30); do ss -lnt | grep -q ":$PG_PORT " || break; sleep 1; done

tar -C "$INSTANCE_DIR" -czf "$SAFETY/db-physical.tar.gz" db
cp -a "$DB_DIR/pg_hba.conf" "$SAFETY/pg_hba.conf.original"

python3 - "$DB_DIR/pg_hba.conf" <<'PY'
from pathlib import Path
import sys
p=Path(sys.argv[1]); s=p.read_text()
s=s.replace('local   all             all                                     password','local   all             all                                     trust')
s=s.replace('host    all             all             127.0.0.1/32            password','host    all             all             127.0.0.1/32            trust')
s=s.replace('host    all             all             ::1/128                 password','host    all             all             ::1/128                 trust')
p.write_text(s)
PY
chown "$PAPERCLIP_USER:$PAPERCLIP_USER" "$DB_DIR/pg_hba.conf"

sudo -u "$PAPERCLIP_USER" "$PGBIN/pg_ctl" -D "$DB_DIR" -l "$SAFETY/postgres.log" -o "-p $PG_PORT" start
for _ in $(seq 1 30); do
  sudo -u "$PAPERCLIP_USER" psql -h 127.0.0.1 -p "$PG_PORT" -U paperclip -d postgres -Atqc 'select 1' >/dev/null 2>&1 && break
  sleep 1
done

sudo -u "$PAPERCLIP_USER" psql -h 127.0.0.1 -p "$PG_PORT" -U paperclip -d postgres -v ON_ERROR_STOP=1 <<'SQL'
SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname='paperclip' AND pid <> pg_backend_pid();
DROP DATABASE IF EXISTS paperclip;
CREATE DATABASE paperclip OWNER paperclip;
SQL

gzip -dc "$DUMP" | sudo -u "$PAPERCLIP_USER" psql -h 127.0.0.1 -p "$PG_PORT" -U paperclip -d paperclip -v ON_ERROR_STOP=1
TABLES="$(sudo -u "$PAPERCLIP_USER" psql -h 127.0.0.1 -p "$PG_PORT" -U paperclip -d paperclip -Atqc "select count(*) from information_schema.tables where table_schema='public';")"

sudo -u "$PAPERCLIP_USER" "$PGBIN/pg_ctl" -D "$DB_DIR" stop -m fast
cp -a "$SAFETY/pg_hba.conf.original" "$DB_DIR/pg_hba.conf"
chown "$PAPERCLIP_USER:$PAPERCLIP_USER" "$DB_DIR/pg_hba.conf"
systemctl enable --now paperclip.service

echo "Restauração concluída: $TABLES tabelas públicas."
echo "Snapshot anterior: $SAFETY/db-physical.tar.gz"
