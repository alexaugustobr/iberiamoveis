<!DOCTYPE html>
<html>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/css/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}

body, html {
  height: 100%;
  line-height: 1.8;
}

/* Full height image header */
.bgimg-1 {
  background-position: center;
  background-size: cover;
  background-image: url("/img/header-bg.jpg");
  min-height: 100%;
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
    margin-left: 30px; 
    font-family: 'Kaushan Script',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,
    'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji',
    'Segoe UI Symbol','Noto Color Emoji';
    font-size: 2.4rem;
}
</style>
<body>

<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar w3-card bg-black" id="myNavbar">
    <a href="/#home" class="w3-bar-item w3-button w3-wide text-y company-logo">Ibéria</a>
    <!-- Right-sided navbar links -->
    <div class="w3-right w3-hide-small" style="margin-top: 20px;">
      <!-- <a href="#about" class="w3-bar-item w3-button text-w">ABOUT</a> -->
      <a href="/projetos" class="w3-bar-item w3-button text-w"><i class="fa fa-user"></i> Portfólio</a>
      <a href="/#diferencial" class="w3-bar-item w3-button text-w"><i class="fa fa-th"></i> Diferencial</a>
      <a href="/#contato" class="w3-bar-item w3-button text-w"><i class="fa fa-envelope"></i> Contato</a>
    </div>
    <!-- Hide right-floated links on small screens and replace them with a menu icon -->

    <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium text-w" style="margin-top: 10px;font-size: 20px;" onclick="w3_open()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</div>

<!-- Sidebar on small screens when clicking the menu icon -->
<nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Fechar ×</a>
  <a href="/projetos" onclick="w3_close()" class="w3-bar-item w3-button">Portfólio</a>
  <a href="/#diferencial" onclick="w3_close()" class="w3-bar-item w3-button">Diferencial</a>
  <a href="/#contato" onclick="w3_close()" class="w3-bar-item w3-button">Contato</a>
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
<div class="w3-container" style="padding:32px 16px" id="about">
  <h3 class="w3-center" style="font-size: 40px; font-weight: 700;">Diferencial</h3>
  <div class="w3-row-padding w3-center" style="margin-top:64px; max-width: 1140px; padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;">
    <div class="w3-third">
      <span class="fa-stack fa-2x w3-xxxlarge">
        <i class="fa fa-circle fa-stack-2x text-y"></i>
        <i class="fa fa-credit-card fa-stack-1x fa-inverse"></i>
      </span>
      <p class="w3-large">Parcelamos no cartão</p>
      <p>Parcele no cartão, também oferecemos desconto para pagamento à vista.</p>
    </div>
    <div class="w3-third">
        <span class="fa-stack fa-2x w3-xxxlarge">
            <i class="fa fa-circle fa-stack-2x text-y"></i>
            <i class="fa fa-bed fa-stack-1x fa-inverse"></i>
        </span>
      <p class="w3-large">Móveis com garantia</p>
      <p>Oferecemos garantia nos nossos móveis.</p>
    </div>
    <div class="w3-third">
      <span class="fa-stack fa-2x w3-xxxlarge">
        <i class="fa fa-circle fa-stack-2x text-y"></i>
        <i class="fa fa-cube fa-stack-1x fa-inverse"></i>
      </span>
      <p class="w3-large">Projeto 3D personalizado</p>
      <p>Desenvolvemos o seu projeto 3d sob medida.</p>
    </div>
  </div>
</div>

<!-- Team Section -->
<div class="w3-container w3-light-grey" style="padding:128px 16px" id="team">
  <h3 class="w3-center">THE TEAM</h3>
  <p class="w3-center w3-large">The ones who runs this company</p>
  <div class="w3-row-padding w3-grayscale" style="margin-top:64px">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card">
        <img src="/w3images/team2.jpg" alt="John" style="width:100%">
        <div class="w3-container">
          <h3>John Doe</h3>
          <p class="w3-opacity">CEO & Founder</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card">
        <img src="/w3images/team1.jpg" alt="Jane" style="width:100%">
        <div class="w3-container">
          <h3>Anja Doe</h3>
          <p class="w3-opacity">Art Director</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <div class="w3-card">
        <img src="/w3images/team3.jpg" alt="Mike" style="width:100%">
        <div class="w3-container">
          <h3>Mike Ross</h3>
          <p class="w3-opacity">Web Designer</p>
          <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          <p><button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Contact Section -->
<div class="w3-container" style="padding:128px 16px" id="contact">
  <h3 class="w3-center">CONTACT</h3>
  <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
  <div style="margin-top:48px">
    <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Chicago, US</p>
    <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
    <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
    <br>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"></p>
      <p><input class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject"></p>
      <p><input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"></p>
      <p>
        <button class="w3-button w3-black" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
    <!-- Image of location/map -->
    <img src="/w3images/map.jpg" class="w3-image w3-greyscale" style="width:100%;margin-top:48px">
  </div>
</div>

<!-- Footer -->
<footer class="w3-center bg-black w3-padding-64">
  <a href="#home" class="w3-button text-y"><i class="fa fa-arrow-up w3-margin-right"></i>Voltar ao topo</a>
  <div class="w3-xlarge w3-section text-y w3-xxxlarge">
    <a href="https://www.instagram.com/iberiamoveis"><i class="fa fa-instagram w3-hover-opacity"></i></a>
  </div>
  <p class="text-y">2009-2019</p>
</footer>
 
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
