<?php

/**
 * Front controller para Vercel.
 *
 * O runtime PHP da Vercel executa arquivos dentro de /api.
 * Esta ponte preserva as rotas antigas do projeto em /src, por exemplo:
 * /login.php, /index.php, /itens/listar.php, /emprestimos/listar.php.
 */
$srcRoot = realpath(__DIR__ . '/../src');
$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

if ($uri === '/') {
    $uri = '/login.php';
}

$uri = '/' . ltrim($uri, '/');
$target = realpath($srcRoot . $uri);

if ($srcRoot === false || $target === false || !str_starts_with($target, $srcRoot) || !is_file($target)) {
    http_response_code(404);
    echo 'Página não encontrada.';
    exit;
}

chdir(dirname($target));
require $target;
