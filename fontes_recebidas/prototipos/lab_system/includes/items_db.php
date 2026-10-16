<?php
require_once 'db.php';

function statusItens() {
    return [
        'disponivel' => 'Disponível',
        'em_uso' => 'Em uso',
        'manutencao' => 'Manutenção',
        'descartado' => 'Descartado'
    ];
}

function buscarItens($conn) {
    $stmt = $conn->prepare("SELECT id, nome, quantidade, status, localizacao FROM itens ORDER BY nome");
    if (!$stmt) {
        return [];
    }
    $stmt->execute();
    $result = $stmt->get_result();
    $itens = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $itens;
}

function buscarItemPorId($conn, $id) {
    $stmt = $conn->prepare("SELECT id, nome, descricao, marca, modelo, numero_serie, quantidade, localizacao, status FROM itens WHERE id = ? LIMIT 1");
    if (!$stmt) {
        return null;
    }
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $item = $result->fetch_assoc();
    $stmt->close();
    return $item;
}

function criarItem($conn, $nome, $descricao, $marca, $modelo, $numero_serie, $quantidade, $localizacao, $status) {
    $stmt = $conn->prepare("INSERT INTO itens (nome, descricao, marca, modelo, numero_serie, quantidade, localizacao, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    if (!$stmt) {
        return false;
    }
    $stmt->bind_param("sssssiss", $nome, $descricao, $marca, $modelo, $numero_serie, $quantidade, $localizacao, $status);
    $ok = $stmt->execute();
    $stmt->close();
    return $ok;
}

function editarItem($conn, $id, $nome, $descricao, $marca, $modelo, $numero_serie, $quantidade, $localizacao, $status) {
    $stmt = $conn->prepare("UPDATE itens SET nome = ?, descricao = ?, marca = ?, modelo = ?, numero_serie = ?, quantidade = ?, localizacao = ?, status = ? WHERE id = ?");
    if (!$stmt) {
        return false;
    }
    $stmt->bind_param("sssssissi", $nome, $descricao, $marca, $modelo, $numero_serie, $quantidade, $localizacao, $status, $id);
    $ok = $stmt->execute();
    $stmt->close();
    return $ok;
}

function excluirItem($conn, $id) {
    $stmt = $conn->prepare("DELETE FROM itens WHERE id = ?");
    if (!$stmt) {
        return false;
    }
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $ok = $stmt->affected_rows > 0;
    $stmt->close();
    return $ok;
}
