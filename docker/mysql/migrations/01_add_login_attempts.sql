-- Migration: Add login_attempts table for rate limiting and audit logging
-- Apply via: mysql -u root -p lab_hardware < this file
-- Or: the application will auto-create this table on first rate_limit.php usage

CREATE TABLE IF NOT EXISTS login_attempts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45) NOT NULL,
    username VARCHAR(50) NOT NULL,
    attempted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    success TINYINT(1) NOT NULL DEFAULT 0,
    INDEX idx_ip_time (ip_address, attempted_at),
    INDEX idx_username (username),
    INDEX idx_success (success)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
