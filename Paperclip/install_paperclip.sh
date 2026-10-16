#!/usr/bin/env bash
set -euo pipefail

PAPERCLIP_VERSION="${PAPERCLIP_VERSION:-2026.722.0}"
PAPERCLIP_USER="${PAPERCLIP_USER:-paperclip}"
PAPERCLIP_HOME="${PAPERCLIP_HOME:-/home/$PAPERCLIP_USER}"
INSTANCE="${INSTANCE:-default}"
PORT="${PORT:-3100}"

if [[ $EUID -ne 0 ]]; then
  echo "Execute como root: sudo $0" >&2
  exit 1
fi

if command -v dnf >/dev/null 2>&1; then
  dnf -y install nodejs npm gzip postgresql
elif command -v apt-get >/dev/null 2>&1; then
  apt-get update
  DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs npm gzip postgresql-client
else
  echo "Gerenciador de pacotes não suportado." >&2
  exit 1
fi

id "$PAPERCLIP_USER" >/dev/null 2>&1 || useradd --create-home --shell /bin/bash "$PAPERCLIP_USER"
npm install -g "paperclipai@$PAPERCLIP_VERSION"
install -d -o "$PAPERCLIP_USER" -g "$PAPERCLIP_USER" "$PAPERCLIP_HOME/.paperclip/instances/$INSTANCE"

cat >/etc/systemd/system/paperclip.service <<UNIT
[Unit]
Description=Paperclip AI Orchestration Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=$PAPERCLIP_USER
Group=$PAPERCLIP_USER
WorkingDirectory=$PAPERCLIP_HOME
Environment=HOME=$PAPERCLIP_HOME
Environment=NODE_ENV=production
ExecStart=/usr/local/bin/paperclipai run --config $PAPERCLIP_HOME/.paperclip/instances/$INSTANCE/config.json --instance $INSTANCE --no-repair
Restart=on-failure
RestartSec=5
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
UNIT

systemctl daemon-reload

echo "Paperclip AI $PAPERCLIP_VERSION instalado."
echo "Inicialize a instância uma vez com:"
echo "  sudo -u $PAPERCLIP_USER HOME=$PAPERCLIP_HOME /usr/local/bin/paperclipai run --instance $INSTANCE"
echo "Depois execute: sudo ./restore_experiment.sh"
echo "A porta padrão do experimento é $PORT."
