<?php
require_once 'db.php';

function buscarUsuario($conn, $username) {
    $result = $conn->query("SELECT * FROM usuarios WHERE username = '$username' LIMIT 1");
    return $result->fetch_assoc();
}

function buscarUsuarioPorId($conn, $id) {
    $result = $conn->query("SELECT * FROM usuarios WHERE id = $id LIMIT 1");
    return $result->fetch_assoc();
}

function buscarRelatorioPorTitulo($conn, $titulo) {
    $result = $conn->query("SELECT * FROM relatorios WHERE titulo = '$titulo' LIMIT 1");
    return $result->fetch_assoc();
}

function buscarUsuarios($conn) {
    $result = $conn->query("SELECT * FROM usuarios ORDER BY username");
    return $result->fetch_all(MYSQLI_ASSOC);
}

function buscarRelatorios($conn) {
    $result = $conn->query("SELECT * FROM relatorios ORDER BY data");
    return $result->fetch_all(MYSQLI_ASSOC);
}

function criarUsuario($conn, $username, $senha, $tipo) {
    $hash = password_hash($senha, PASSWORD_DEFAULT);
    $sql = "INSERT INTO usuarios (username, senha, tipo) VALUES ('$username', '$hash', '$tipo')";
    return $conn->query($sql);
}

function criarRelatorio($conn, $titulo, $categoria, $emissor, $data, $descricao = '') {
    $sql = "INSERT INTO relatorios (titulo, categoria, emissor, data, descricao) VALUES ('$titulo', '$categoria', '$emissor', '$data', '$descricao')";
    return $conn->query($sql);
}

function editarUsuario($conn, $id, $username, $tipo, $senha = null) {
    if (!empty($senha)) {
        $hash = password_hash($senha, PASSWORD_DEFAULT);
        $sql = "UPDATE usuarios SET username = '$username', senha = '$hash', tipo = '$tipo' WHERE id = $id";
    } else {
        $sql = "UPDATE usuarios SET username = '$username', tipo = '$tipo' WHERE id = $id";
    }
    return $conn->query($sql);
}

function editarRelatorio($conn, $titulo, $categoria, $emissor, $data = null, $descricao = '') {
    // Note: function assumes titulo identifies the record (no separate old title passed)
    $data_sql = $data ? "'" . $data . "'" : "NULL";
    $descricao_sql = $descricao !== null ? "'$descricao'" : "''";
    $sql = "UPDATE relatorios SET categoria = '$categoria', emissor = '$emissor', data = $data_sql, descricao = $descricao_sql WHERE titulo = '$titulo'";
    return $conn->query($sql);
}

function excluirUsuario($conn, $id) {
    $conn->query("DELETE FROM usuarios WHERE id = $id");
    return $conn->affected_rows > 0;
}

function excluirRelatorio($conn, $titulo) {
    $conn->query("DELETE FROM relatorios WHERE titulo = '$titulo'");
    return $conn->affected_rows > 0;
}
