CREATE DATABASE IF NOT EXISTS lab_system CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE lab_system;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('administrador', 'padrão') NOT NULL DEFAULT 'padrão'
);

INSERT INTO usuarios (username, senha, tipo) VALUES ('admin', '$2y$10$uSjd/UFE8qJ4wqVjllQraeHAeyZmICDr3TbcEJ.PoC2cFMtVuWhua', 'administrador')