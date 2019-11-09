
<?php
$ultimosProjetos    = './projetos/ultimos';
$ultimosProjetosImagens = array_diff(scandir($ultimosProjetos), array('..', '.'));

foreach ($ultimosProjetosImagens as &$imagem) {
    echo "<img src='${ultimosProjetos}/${imagem}'></img>";
}
?>
