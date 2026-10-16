<?php
function conectar() {
    $conn = new mysqli('localhost', 'root', 'admin', 'lab_system');
    return $conn;
}