# Guia de Teste Manual - Lab System

Este guia explica como configurar e testar o sistema no seu ambiente local.

## 1. Como Abrir o HeidiSQL

O HeidiSQL é um gerenciador de banco de dados que geralmente é instalado junto com o XAMPP ou separadamente.

1.  **Pelo Menu Iniciar**: Pressione a tecla `Windows`, digite **HeidiSQL** e clique no ícone do programa (um logo azul com um 'H').
2.  **Pelo XAMPP Control Panel**: Se você usa uma versão do XAMPP que o inclui, pode haver um botão "Admin" na linha do MySQL, mas geralmente o HeidiSQL é aberto como um aplicativo à parte no Windows.

## 2. Configurando o Banco de Dados

1.  Abra o **HeidiSQL**.
2.  Crie uma **Nova Sessão** (clique em "Novo" no canto inferior esquerdo).
    *   **Host**: `127.0.0.1` ou `localhost`
    *   **Usuário**: `root`
    *   **Senha**: (Deixe vazio se for a configuração padrão do XAMPP)
    *   **Porta**: `3306`
3.  Clique em **Abrir**.
4.  No menu superior, vá em **Arquivo > Executar arquivo SQL...**
5.  Selecione o arquivo `database.sql` que está na pasta do seu projeto.
6.  Pressione `F9` ou clique no botão de "Play" para executar os comandos e criar o banco `lab_system`.

## 3. Configurando o XAMPP

1.  Certifique-se de que a pasta `lab_system` está dentro de `C:\xampp\htdocs`.
2.  Abra o **XAMPP Control Panel**.
3.  Clique em **Start** para os módulos **Apache** e **MySQL**.

## 4. Testando no Navegador

1.  Acesse: `http://localhost/lab_system`
2.  **Login**:
    *   Usuário: `admin`
    *   Senha: `admin` (Conforme definido no `database.sql`)
3.  **Fluxo de Teste**:
    *   [ ] Entre no Dashboard.
    *   [ ] Vá em "Itens" e tente cadastrar um novo equipamento.
    *   [ ] Altere o status de um item (ex: de "Disponível" para "Em Manutenção").
    *   [ ] Tente excluir um item de teste.
    *   [ ] (Se for admin) Tente criar um novo usuário padrão.

## 5. Ajuste Importante (Conexão)

Se o erro "Erro ao conectar" aparecer, abra o arquivo `includes/db.php` e verifique a linha 3:

```php
// Se o seu MySQL não tem senha (padrão do XAMPP), mude para:
$conn = new mysqli('localhost', 'root', '', 'lab_system');
```
