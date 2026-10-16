CREATE DATABASE IF NOT EXISTS lab_system CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE lab_system;


DROP TABLE IF EXISTS itens;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('administrador', 'padrao') NOT NULL DEFAULT 'padrao'
);

INSERT INTO usuarios (username, senha, tipo)
VALUES ('admin', '$2y$10$lZd34ataGlDxHMpFKBXL8OLpEtMHqzwvTTrFqBnkYffBbChiASf/u', 'administrador')
ON DUPLICATE KEY UPDATE username = username;


CREATE TABLE IF NOT EXISTS laboratorios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    lugar VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    tipo ENUM('redes', 'hardware', 'robotica', 'informatica_normal') NOT NULL DEFAULT 'informatica_normal',
    tecnico_responsavel VARCHAR(100),
    informacao_adicional TEXT
);