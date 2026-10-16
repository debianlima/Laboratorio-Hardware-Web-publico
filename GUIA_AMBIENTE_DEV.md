# Guia de Ambiente de Desenvolvimento — Laboratório de Hardware 2025

Este documento descreve como configurar o ambiente de desenvolvimento local utilizando **Docker** (recomendado) ou **XAMPP**.

---

## Opção 1: Docker (Recomendado)

### Pré-requisitos

- Docker Engine 20.10+
- Docker Compose v2+

### Configuração rápida

1. **Clone o repositório** (se ainda não fez):
   ```bash
   git clone https://github.com/debianlima/laboratorio_hardware_2025.git
   cd laboratorio_hardware_2025
   ```

2. **Copie o arquivo de variáveis de ambiente**:
   ```bash
   cp .env.example .env
   ```

3. **Suba os containers**:
   ```bash
   docker compose up -d --build
   ```

4. **Acesse o sistema**:
   - Aplicação: http://localhost:8080
   - Banco de dados: localhost:3307

5. **Credenciais padrão**:
   - Admin: `admin` / `admin123`
   - Banco: `lab_user` / `lab_password`

### Comandos úteis

| Ação | Comando |
|------|---------|
| Subir containers | `docker compose up -d --build` |
| Parar containers | `docker compose down` |
| Ver logs | `docker compose logs -f app` |
| Acessar shell do app | `docker compose exec app bash` |
| Acessar MySQL | `docker compose exec db mysql -u lab_user -p lab_hardware` |
| Recriar banco (perde dados) | `docker compose down -v && docker compose up -d --build` |

---

## Opção 2: XAMPP

### Pré-requisitos

- XAMPP com PHP 8.0+ e MariaDB/MySQL

### Configuração

1. **Copie os arquivos PHP** para `htdocs`:
   ```bash
   cp -r src/* /opt/lampp/htdocs/lab_system/
   ```

2. **Configure o banco de dados**:
   - Acesse phpMyAdmin: http://localhost/phpmyadmin
   - Crie o banco `lab_hardware`
   - Importe o script SQL: `docker/mysql/init.sql`

3. **Configure as credenciais**:
   - Edite `src/includes/db.php` (ou crie `src/.env`) com as credenciais do seu XAMPP.

4. **Acesse**: http://localhost/lab_system

### Credenciais padrão XAMPP

| Serviço | Usuário | Senha |
|---------|---------|-------|
| MySQL | root | (vazia) |
| Admin | admin | admin123 |

---

## Estrutura de Diretórios

```
laboratorio_hardware_2025/
├── docker/
│   ├── mysql/
│   │   └── init.sql          # Script de inicialização do banco
│   └── php/
│       └── php.ini           # Configurações PHP customizadas
├── src/                       # Código-fonte da aplicação (copiar aqui)
├── docker-compose.yml         # Orquestração dos containers
├── Dockerfile                 # Imagem PHP + Apache
├── .env.example               # Template de variáveis de ambiente
└── GUIA_AMBIENTE_DEV.md       # Este arquivo
```

---

## Solução de Problemas

### Porta 8080 já em uso

Edite `.env` e altere `APP_PORT` para outra porta, ex: `APP_PORT=8081`.

### Erro de conexão com banco

Verifique se o container `db` está saudável:
```bash
docker compose ps
```

### Permissões de arquivo

Se houver erro de permissão no PHP:
```bash
docker compose exec app chown -R www-data:www-data /var/www/html
```
