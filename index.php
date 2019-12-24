<!DOCTYPE html>
<html>
<title>W3.CSS Template</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
<meta name="title" content="Ibéria Móveis Sob Medida">
<meta name="description" content="Ibéria Móveis Sob Medida, Marcenária Móveis Sob Medida atendemos em São Paulo">
<meta name="robots" content="noindex, follow">

<title>Ibéria Móveis Sob Medida</title>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-151938845-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-151938845-1');
</script>
<link rel="stylesheet" href="/css/w3.css">

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
<style>

/*
 * menu color : #212529
 * yellow logo : #fec503
 * yellow hover : #fed136
 * card : #fff
 * bg grey #f8f9fa !important
 */

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
  background-image: url("/img/header-bg.jpg");
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

<!-- Header with full-height image -->
<header class="bgimg-1 w3-display-container w3-grayscale-min w3-center" style="padding:128px 16px" id="home">
  <div class="w3-text-white" style="padding:48px">
    <span class="w3-jumbo w3-hide-small">Móveis Sob Medida</span><br>
    <span class="w3-xxlarge w3-hide-large w3-hide-medium">Móveis Sob Medida</span><br>
    <p><a href="/projetos" class="w3-button w3-white w3-padding-large w3-large w3-margin-top 
        w3-opacity w3-hover-opacity-off">Confira o nosso portfólio</a></p>
  </div> 
  <div class="w3-display-bottomleft text-y" style="padding:24px 48px;font-size: 3em;">
    <a href="https://www.instagram.com/iberiamoveis"><i class="fa fa-instagram w3-hover-opacity"></i></a>
  </div>
</header>
<!-- About Section -->
<div class="w3-container  w3-light-grey" style="padding:64px 16px" id="diferencial">
  <h3 class="w3-center text-headings">Diferencial</h3>
  <div class="w3-row-padding w3-center" style="margin-top:64px; max-width: 1140px; padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;">
    <div class="w3-third">
      <span class="fa-stack fa-2x w3-xxxlarge">
        <i class="fa fa-circle fa-stack-2x text-y"></i>
        <i class="fa fa-credit-card fa-stack-1x fa-inverse"></i>
      </span>
      <h4 class="w3-large text-bold w3-xlarge">Parcelamos no cartão</h4>
      <p>Parcele no cartão, também oferecemos desconto para pagamento à vista.</p>
    </div>
    <div class="w3-third">
        <span class="fa-stack fa-2x w3-xxxlarge">
            <i class="fa fa-circle fa-stack-2x text-y"></i>
            <i class="fa fa-bed fa-stack-1x fa-inverse"></i>
        </span>
      <h4 class="w3-large">Móveis com garantia</h4>
      <p>Oferecemos garantia nos nossos móveis.</p>
    </div>
    <div class="w3-third">
      <span class="fa-stack fa-2x w3-xxxlarge">
        <i class="fa fa-circle fa-stack-2x text-y"></i>
        <i class="fa fa-cube fa-stack-1x fa-inverse"></i>
      </span>
      <h4 class="w3-large">Projeto 3D personalizado</h4>
      <p>Desenvolvemos o seu projeto 3d sob medida.</p>
    </div>
  </div>
</div>

<!-- Team Section -->
<div class="w3-container" style="padding:64px 16px" id="portfolio">
  <h3 class="w3-center" style="font-size: 40px; font-weight: 700;">Portfólio</h3>
  <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
    <div class="w3-third w3-margin-bottom">
      <div class="w3-card">
        <img src="/img/cozinhas.jpg" style="width:100%">
        <div class="w3-container w3-center">
          <h3>Cozinhas</h3>
          <p><a href="/projetos" class="w3-button w3-light-grey w3-block"><i class="fa fa-cube"></i> Ver mais</a></p>
        </div>
      </div>
    </div>
    <div class="w3-third w3-margin-bottom">
      <div class="w3-card">
        <img src="/img/dormitorios.jpg" style="width:100%">
        <div class="w3-container w3-center">
          <h3>Dormitórios</h3>
          <p><a href="/projetos" class="w3-button w3-light-grey w3-block"><i class="fa fa-cube"></i> Ver mais</a></p>
        </div>
      </div>
    </div>
    <div class="w3-third w3-margin-bottom">
      <div class="w3-card">
        <img src="/img/salas.jpg" style="width:100%">
        <div class="w3-container w3-center">
          <h3>Salas</h3>
          <p><a href="/projetos" class="w3-button w3-light-grey w3-block"><i class="fa fa-cube"></i> Ver mais</a></p>
        </div>
      </div>
    </div>
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
