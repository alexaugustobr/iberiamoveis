<?php
function readFilesFromFolder($folder)
{
    return array_diff(scandir($folder), array('..', '.'));
}
function imageFromFolder($folder, $tags, $slideToIndex)
{
    $imagens = readFilesFromFolder($folder);
    foreach ($imagens as &$imagem) {
        echo "<div class='w3-col l3 m6'>";
        echo "<img src='${folder}/${imagem}' style='width:100%' onclick='onClick(this)' class='w3-hover-opacity'>";
        echo "</div>";
        $slideToIndex++;
    }
    return $slideToIndex;
}
function imageModalFromFolder($folder, $firstList)
{
    $imagens = readFilesFromFolder($folder);
    $index = 1;
    foreach ($imagens as $imagem) {
        if ($index == 1 && $firstList) {
            echo "<div class='carousel-item active'>";
        } else {
            echo "<div class='carousel-item'>";
        }
        echo "<imgsrc='${folder}/${imagem}' alt='' title=''>";
        echo "</div>";
        $index++;
    }
} 
?> 

<!DOCTYPE html>
<html>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/w3.css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
<style>

h1,h2,h3,h4,h5,h6 {
  font-weight: 700;
  font-family: Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,
  'Helvetica Neue',Arial,sans-serif,
  'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
}

body, html {
  height: 100%;
  line-height: 1.8;
  font-family: 'Roboto Slab',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
}

/* Full height image header */
.bgimg-1 {
  background-color: #212529;
  background-position: center;
  background-size: cover;
  background-image: url("img/header-bg.jpg");
  min-height: 50%;
}

.w3-bar .w3-button {
  padding: 16px;
}

.bg-black {
    background-color: #212529;
}

.text-y {
    color: #fed136;
}
.text-w {
    color: white;
}
.company-logo {
    margin-left: 2em;
    padding: 0 !important;
    font-family: 'Kaushan Script',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,
    'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji',
    'Segoe UI Symbol','Noto Color Emoji';
    font-size: 2.0rem;
}

.w3-a:hover {
  color: #fed136!important;
  background-color: transparent !important;
}

.text-headings {
  font-weight: 700;
  font-size: 50px;
  font-family: Montserrat,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
}

.text-bold {
  font-weight: bold;
}

.google-map {
height: 25rem;
position: relative;
}
</style>
<body>

<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar bg-black" id="myNavbar">
    <a href="/#home" class="w3-bar-item w3-button w3-a w3-wide text-y company-logo">Ibéria</a>
    <!-- Right-sided navbar links -->
    <div class="w3-right w3-hide-small">
      <!-- <a href="#about" class="w3-bar-item w3-button text-w">ABOUT</a> -->
      <a href="/#portfolio" class="w3-bar-item w3-button w3-a text-w"><i class="fa fa-cube"></i> Portfólio</a>
      <a href="/#diferencial" class="w3-bar-item w3-button w3-a text-w"><i class="fa fa-th"></i> Diferencial</a>
      <a href="/#contato" class="w3-bar-item w3-button w3-a text-w"><i class="fa fa-envelope"></i> Contato</a>
    </div>
    <!-- Hide right-floated links on small screens and replace them with a menu icon -->

    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-a w3-right w3-hide-large w3-hide-medium text-w"  onclick="w3_open()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>

<!-- Sidebar on small screens when clicking the menu icon -->
<nav class="w3-sidebar w3-bar-block w3-black w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-a w3-large w3-padding-16">Fechar ×</a>
  <a href="/#portfolio" onclick="w3_close()" class="w3-bar-item w3-button w3-a">Portfólio</a>
  <a href="/#diferencial" onclick="w3_close()" class="w3-bar-item w3-button w3-a">Diferencial</a>
  <a href="/#contato" onclick="w3_close()" class="w3-bar-item w3-button w3-a">Contato</a>
</nav>

<!-- Work Section -->
<div class="w3-container" style="padding:128px 16px" id="work">
  <h3 class="w3-center">Portfólio</h3>
  <div class="w3-row-padding" style="margin-top:64px">
    <?php
      $slideToIndex = 0;
      $slideToIndex = imageFromFolder('./img/projetos/3d', 'Projetos 3d', $slideToIndex);
      $slideToIndex = imageFromFolder('./img/projetos/banheiros', 'Banheiros', $slideToIndex);
      $slideToIndex = imageFromFolder('./img/projetos/cozinhas', 'Cozinhas', $slideToIndex);
      $slideToIndex = imageFromFolder('./img/projetos/dormitorios', 'Dormitórios', $slideToIndex);
      $slideToIndex = imageFromFolder('./img/projetos/salas', 'Salas', $slideToIndex);
      $slideToIndex = imageFromFolder('./img/projetos/comercial', 'Comercial', $slideToIndex);
    ?>
  </div>
</div>

<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
  <span class="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large"></p>
  </div>
</div>

<!-- Contact Section -->

<div class="w3-row-padding w3-container  bg-black" style="padding:64px 32px;" id="contato">
  <div class="w3-col m6 text-w">
    <p class="mbr-text">
        <strong>Endereço</strong>
        <br>
        <br>R. Prof. José de Barros Pinto, 193B e 193C
        <br>Vila Frugoli, São Paulo - SP, 03674-040
        <br>
        <br><strong>Contato</strong>
        <br>
        <br>Email: <a href="mailto:iberiamoveis@gmail.com" class="text-y">iberiamoveis@gmail.com</a>
        <br>Telefone: (11) 3756-2605 
        <br>WhatsApp: (11) 98841-3302
        <br>
        <br><strong>Redes Sociais</strong>
        <br>
        <br>Instagram: <a href="https://www.instagram.com/iberiamoveis" class="text-y">@iberiamoveis</a>
        <br>
    </p>
  </div>
  <div class="w3-col m6">
    <div style="margin-top:32px; overflow:hidden;width: 100%;position: relative;">
      <iframe width="100%" height="440" style="border:0" src="https://www.google.com/maps/embed?key=AIzaSyDsmOVpjte6zvtKLK2fma50QUIDdrqImSk&pb=!1m14!1m8!1m3!1d7316.737170417157!2d-46.499788!3d-23.519242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6095a2366c21%3A0x1a785f586db516fe!2sR.%20Prof.%20Jos%C3%A9%20de%20Barros%20Pinto%2C%20193b%20-%20Vila%20Frugoli%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003674-040!5e0!3m2!1spt-BR!2sbr!4v1572806782250!5m2!1spt-BR!2sbr" allowfullscreen="" frameborder="0"></iframe>
    </div>
  </div>
</div>
 
<script>
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}
</script>

</body>
</html>
