-- Script de inicialização do banco de dados
-- Executado automaticamente na primeira inicialização do container MySQL

CREATE DATABASE IF NOT EXISTS lab_hardware CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE lab_hardware;

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('administrador', 'padrao') NOT NULL DEFAULT 'padrao',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de laboratórios
CREATE TABLE IF NOT EXISTS laboratorios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    lugar VARCHAR(100) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    tipo ENUM('redes', 'hardware', 'robotica', 'informatica_normal') NOT NULL DEFAULT 'informatica_normal',
    tecnico_responsavel VARCHAR(100),
    informacao_adicional TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de equipamentos
CREATE TABLE IF NOT EXISTS equipamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    quantidade INT NOT NULL DEFAULT 1,
    disponivel INT NOT NULL DEFAULT 1,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Equipamentos de teste
INSERT INTO equipamentos (id, nome, descricao, quantidade, disponivel) VALUES
    (1, 'Arduino Uno R3', 'Kit Arduino Uno R3 com cabos e sensor', 3, 1),
    (2, 'Multímetro Digital', 'Multímetro digital Minipa ET-1002', 5, 1),
    (3, 'Protoboard', 'Protoboard 830 pontos', 10, 1)
ON DUPLICATE KEY UPDATE nome = VALUES(nome);

-- Tabela de empréstimos
CREATE TABLE IF NOT EXISTS emprestimos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    equipamento_id INT NOT NULL,
    data_emprestimo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_devolucao TIMESTAMP NULL DEFAULT NULL,
    status ENUM('pendente', 'devolvido', 'atrasado') NOT NULL DEFAULT 'pendente',
    observacao TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (equipamento_id) REFERENCES equipamentos(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de agendamentos
CREATE TABLE IF NOT EXISTS agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    laboratorio_id INT NOT NULL,
    data_inicio DATETIME NOT NULL,
    data_fim DATETIME NOT NULL,
    finalidade VARCHAR(255),
    status ENUM('pendente', 'aprovado', 'cancelado', 'concluido') NOT NULL DEFAULT 'pendente',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (laboratorio_id) REFERENCES laboratorios(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- A cópia pública não inclui credencial administrativa padrão.
-- Crie o primeiro administrador pelo fluxo de configuração da aplicação.

-- Tabela de tipos de itens
CREATE TABLE IF NOT EXISTS tipos_itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de itens/equipamentos
CREATE TABLE IF NOT EXISTS itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo_patrimonio VARCHAR(50) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    tipo_id INT,
    status ENUM('disponivel', 'emprestado', 'manutencao') NOT NULL DEFAULT 'disponivel',
    descricao TEXT,
    localizacao VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tipo_id) REFERENCES tipos_itens(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tipos de itens padrão
INSERT INTO tipos_itens (nome, descricao) VALUES
    ('Kit Arduino', 'Kits de desenvolvimento com Arduino'),
    ('Componente Eletrônico', 'Resistores, capacitores, LEDs, etc.'),
    ('Ferramenta', 'Ferramentas de uso geral'),
    ('Placa de Desenvolvimento', 'ESP32, Raspberry Pi, etc.'),
    ('Instrumento de Medição', 'Multímetros, osciloscópios, etc.'),
    ('Cabo e Conector', 'Cabos USB, jumpers, conectores diversos'),
    ('Outro', 'Item não classificado')
ON DUPLICATE KEY UPDATE nome = nome;
