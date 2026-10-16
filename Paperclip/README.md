# Reprodução do experimento com Paperclip

Esta pasta contém uma cópia **anonimizada** do banco utilizado no experimento descrito no artigo. O conteúdo preserva a estrutura, agentes, tarefas, comentários, eventos de execução e trilhas de auditoria necessárias para inspeção do experimento.

Dados de autenticação, chaves de API, segredos e e-mails reais foram removidos ou substituídos. O dump não deve ser usado como backup de produção.

## Conteúdo

- `paperclip-experimento-anonimizado.sql.gz`: dump PostgreSQL sanitizado;
- `install_paperclip.sh`: instala a versão reproduzível do Paperclip AI e cria o serviço systemd;
- `restore_experiment.sh`: cria snapshot local e restaura o dump;
- `RELATORIO_SANITIZACAO.json`: hashes e contagens da sanitização.

## Requisitos

- Oracle Linux, AlmaLinux, Fedora, Debian ou Ubuntu;
- acesso root;
- Node.js e npm;
- aproximadamente 1 GB de espaço livre.

## Instalação e restauração

```bash
chmod +x install_paperclip.sh restore_experiment.sh
sudo ./install_paperclip.sh
sudo -u paperclip HOME=/home/paperclip /usr/local/bin/paperclipai run --instance default
# Interrompa com Ctrl+C depois que a instância inicial for criada.
sudo ./restore_experiment.sh
```

A aplicação inicia por padrão em `http://127.0.0.1:3100`.

## Validação

```bash
systemctl status paperclip.service
curl -I http://127.0.0.1:3100/
gzip -t paperclip-experimento-anonimizado.sql.gz
sha256sum paperclip-experimento-anonimizado.sql.gz
```

O hash esperado está registrado em `RELATORIO_SANITIZACAO.json`.
