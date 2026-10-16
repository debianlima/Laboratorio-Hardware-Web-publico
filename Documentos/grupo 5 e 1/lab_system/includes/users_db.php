<?php
require_once 'db.php';

function buscarUsuario($conn, $username) {
    $stmt = $conn->prepare("SELECT id, username, senha, tipo FROM usuarios WHERE username = ? LIMIT 1");
    if (!$stmt) {
        return null;
    }
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $usuario = $result->fetch_assoc();
    $stmt->close();
    return $usuario;
}

function buscarUsuarioPorId($conn, $id) {
    $stmt = $conn->prepare("SELECT id, username, senha, tipo FROM usuarios WHERE id = ? LIMIT 1");
    if (!$stmt) {
        return null;
    }
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $usuario = $result->fetch_assoc();
    $stmt->close();
    return $usuario;
}

function buscarUsuarios($conn) {
    $stmt = $conn->prepare("SELECT id, username, tipo FROM usuarios ORDER BY username");
    if (!$stmt) {
        return [];
    }
    $stmt->execute();
    $result = $stmt->get_result();
    $usuarios = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $usuarios;
}

function criarUsuario($conn, $username, $senha, $tipo) {
    $hash = password_hash($senha, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO usuarios (username, senha, tipo) VALUES (?, ?, ?)");
    if (!$stmt) {
        return false;
    }
    $stmt->bind_param("sss", $username, $hash, $tipo);
    $ok = $stmt->execute();
    $stmt->close();
    return $ok;
}

function editarUsuario($conn, $id, $username, $tipo, $senha = null) {
    if (!empty($senha)) {
        $hash = password_hash($senha, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("UPDATE usuarios SET username = ?, senha = ?, tipo = ? WHERE id = ?");
        if (!$stmt) {
            return false;
        }
        $stmt->bind_param("sssi", $username, $hash, $tipo, $id);
    } else {
        $stmt = $conn->prepare("UPDATE usuarios SET username = ?, tipo = ? WHERE id = ?");
        if (!$stmt) {
            return false;
        }
        $stmt->bind_param("ssi", $username, $tipo, $id);
    }
    $ok = $stmt->execute();
    $stmt->close();
    return $ok;
}

function excluirUsuario($conn, $id) {
    $stmt = $conn->prepare("DELETE FROM usuarios WHERE id = ?");
    if (!$stmt) {
        return false;
    }
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $ok = $stmt->affected_rows > 0;
    $stmt->close();
    return $ok;
}
