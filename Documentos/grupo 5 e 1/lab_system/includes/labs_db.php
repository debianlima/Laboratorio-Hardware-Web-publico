<?php
// includes/labs_db.php
require_once 'db.php';

function tiposLaboratorios() {
    return [
        'redes' => 'Redes',
        'hardware' => 'Hardware',
        'robotica' => 'Robótica',
        'informatica_normal' => 'Informática Normal'
    ];
}

function getLugares() {
    return [
        'Hall antigo' => 'Hall antigo',
        'hall novo' => 'hall novo',
        'hall novo - 2 andar' => 'hall novo - 2 andar'
    ];
}

function buscarLaboratorios($conn) {
    $stmt = $conn->prepare("SELECT id, codigo, nome, tipo, lugar, tecnico_responsavel FROM laboratorios ORDER BY nome");
    if (!$stmt) {
        return [];
    }
    $stmt->execute();
    $result = $stmt->get_result();
    $labs = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $labs;
}

function buscarLaboratorioPorId($conn, $id) {
    $stmt = $conn->prepare("SELECT * FROM laboratorios WHERE id = ? LIMIT 1");
    if (!$stmt) {
        return null;
    }
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $lab = $result->fetch_assoc();
    $stmt->close();
    return $lab;
}

function criarLaboratorio($conn, $codigo, $lugar, $nome, $tipo, $tecnico, $info) {
    $stmt = $conn->prepare("INSERT INTO laboratorios (codigo, lugar, nome, tipo, tecnico_responsavel, informacao_adicional) VALUES (?, ?, ?, ?, ?, ?)");
    if (!$stmt) {
        return false;
    }
    $stmt->bind_param("ssssss", $codigo, $lugar, $nome, $tipo, $tecnico, $info);
    $ok = $stmt->execute();
    $stmt->close();
    return $ok;
}

function editarLaboratorio($conn, $id, $codigo, $lugar, $nome, $tipo, $tecnico, $info) {
    $stmt = $conn->prepare("UPDATE laboratorios SET codigo = ?, lugar = ?, nome = ?, tipo = ?, tecnico_responsavel = ?, informacao_adicional = ? WHERE id = ?");
    if (!$stmt) {
        return false;
    }
    $stmt->bind_param("ssssssi", $codigo, $lugar, $nome, $tipo, $tecnico, $info, $id);
    $ok = $stmt->execute();
    $stmt->close();
    return $ok;
}

function excluirLaboratorio($conn, $id) {
    $stmt = $conn->prepare("DELETE FROM laboratorios WHERE id = ?");
    if (!$stmt) {
        return false;
    }
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $ok = $stmt->affected_rows > 0;
    $stmt->close();
    return $ok;
}
