<?php
$files = [
    'dashboard.php',
    'items_list.php',
    'items_create.php',
    'items_edit.php',
    'users_list.php',
    'users_create.php',
    'users_edit.php',
    'includes/items_db.php',
    'includes/users_db.php',
    'index.php'
];

$replacements = [
    'Ã¡' => 'á',
    'Ã©' => 'é',
    'Ã-' => 'í',
    'Ã³' => 'ó',
    'Ãº' => 'ú',
    'Ã£' => 'ã',
    'Ãµ' => 'õ',
    'Ã§' => 'ç',
    'Ã€' => 'À',
    'Ã' => 'Á',
    'Ã“' => 'Ó',
    'Âº' => 'º',
    'UsuÃ¡rios' => 'Usuários',
    'LaboratÃ³rio' => 'Laboratório',
    'LocalizaÃ§Ã£o' => 'Localização',
    'AÃ§Ãµes' => 'Ações',
    'DescriÃ§Ã£o' => 'Descrição',
    'NÃºmero de sÃ©rie' => 'Número de série',
    'Status invÃ¡lido' => 'Status inválido'
];

echo "<h3>Corrigindo encoding dos arquivos...</h3>";

foreach ($files as $file) {
    if (file_exists($file)) {
        $content = file_get_contents($file);
        $new_content = str_replace(array_keys($replacements), array_values($replacements), $content);
        
        if ($content !== $new_content) {
            file_put_contents($file, $new_content);
            echo "Corrigido: <b>$file</b><br>";
        } else {
            echo "Já estava correto ou nada encontrado: $file<br>";
        }
    } else {
        echo "<span style='color:red'>Não encontrado: $file</span><br>";
    }
}

echo "<br><b>Concluído!</b>";
?>
