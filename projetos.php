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
?> 

<!DOCTYPE html>
<html>
<title>Ibéria Móveis Sob Medida</title>
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
      <a href="#" class="w3-bar-item w3-button w3-a text-y"><i class="fa fa-cube"></i> Portfólio</a>
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
  <a href="/#" onclick="w3_close()" class="w3-bar-item w3-button w3-a text-y">Portfólio</a>
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
<script
			  src="https://code.jquery.com/jquery-3.4.1.min.js"
			  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js"crossorigin="anonymous"></script>   
        
<!--zap div-->
<style>.floating-wpp{position:fixed;bottom:15px;left:15px;font-size:14px;transition:bottom .2s}.floating-wpp .floating-wpp-button{position:relative;border-radius:50%;box-shadow:1px 1px 4px rgba(60,60,60,.4);transition:box-shadow .2s;cursor:pointer;overflow:hidden}.floating-wpp .floating-wpp-button img,.floating-wpp .floating-wpp-button svg{position:absolute;width:100%;height:auto;object-fit:cover;top:50%;left:50%;transform:translate3d(-50%,-50%,0)}.floating-wpp:hover{bottom:17px}.floating-wpp:hover .floating-wpp-button{box-shadow:1px 2px 8px rgba(60,60,60,.4)}.floating-wpp .floating-wpp-popup{border-radius:6px;background-color:#E5DDD5;position:absolute;overflow:hidden;padding:0;box-shadow:1px 2px 8px rgba(60,60,60,.25);width:0;height:0;bottom:0;opacity:0;transition:bottom .1s ease-out,opacity .2s ease-out;transform-origin:bottom}.floating-wpp .floating-wpp-popup.active{padding:0 12px 12px;width:260px;height:auto;bottom:82px;opacity:1}.floating-wpp .floating-wpp-popup .floating-wpp-message{background-color:#fff;padding:8px;border-radius:0 5px 5px;box-shadow:1px 1px 1px rgba(0,0,0,.15);opacity:0;transition:opacity .2s}.floating-wpp .floating-wpp-popup.active .floating-wpp-message{opacity:1;transition-delay:.2s}.floating-wpp .floating-wpp-popup .floating-wpp-head{text-align:right;color:#fff;margin:0 -15px 10px;padding:6px 12px;display:flex;justify-content:space-between;cursor:pointer}.floating-wpp .floating-wpp-input-message{background-color:#fff;margin:10px -15px -15px;padding:0 15px;display:flex;align-items:center}.floating-wpp .floating-wpp-input-message textarea{border:1px solid #ccc;border-radius:4px;box-shadow:none;padding:8px;margin:10px 0;width:100%;max-width:100%;font-family:inherit;font-size:inherit;resize:none}.floating-wpp .floating-wpp-btn-send{margin-left:12px;font-size:0;cursor:pointer}
</style>
<div class="floating-wpp"> </div>
  <script type="text/javascript">
  !function (v) { v.fn.floatingWhatsApp = function (e) { var t, a, i = v.extend({ phone: "", message: "", size: "72px", backgroundColor: "#25D366", position: "left", popupMessage: "", showPopup: !1, showOnIE: !0, autoOpenTimeout: 0, headerColor: "#128C7E", headerTitle: "WhatsApp Chat", zIndex: 0, buttonImage: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800" width="800" height="800"><defs><clipPath id="_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><rect width="800" height="800"/></clipPath></defs><g clip-path="url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ)"><g><path d=" M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z " fill="rgb(37,211,102)"/></g><g><path d=" M 508.558 450.429 C 502.67 447.483 473.723 433.24 468.325 431.273 C 462.929 429.308 459.003 428.328 455.078 434.22 C 451.153 440.114 439.869 453.377 436.434 457.307 C 433 461.236 429.565 461.729 423.677 458.78 C 417.79 455.834 398.818 449.617 376.328 429.556 C 358.825 413.943 347.008 394.663 343.574 388.768 C 340.139 382.873 343.207 379.687 346.155 376.752 C 348.804 374.113 352.044 369.874 354.987 366.436 C 357.931 362.999 358.912 360.541 360.875 356.614 C 362.837 352.683 361.857 349.246 360.383 346.299 C 358.912 343.352 347.136 314.369 342.231 302.579 C 337.451 291.099 332.597 292.654 328.983 292.472 C 325.552 292.301 321.622 292.265 317.698 292.265 C 313.773 292.265 307.394 293.739 301.996 299.632 C 296.6 305.527 281.389 319.772 281.389 348.752 C 281.389 377.735 302.487 405.731 305.431 409.661 C 308.376 413.592 346.949 473.062 406.015 498.566 C 420.062 504.634 431.03 508.256 439.581 510.969 C 453.685 515.451 466.521 514.818 476.666 513.302 C 487.978 511.613 511.502 499.06 516.409 485.307 C 521.315 471.55 521.315 459.762 519.842 457.307 C 518.371 454.851 514.446 453.377 508.558 450.429 Z  M 401.126 597.117 L 401.047 597.117 C 365.902 597.104 331.431 587.661 301.36 569.817 L 294.208 565.572 L 220.08 585.017 L 239.866 512.743 L 235.21 505.332 C 215.604 474.149 205.248 438.108 205.264 401.1 C 205.307 293.113 293.17 205.257 401.204 205.257 C 453.518 205.275 502.693 225.674 539.673 262.696 C 576.651 299.716 597.004 348.925 596.983 401.258 C 596.939 509.254 509.078 597.117 401.126 597.117 Z  M 567.816 234.565 C 523.327 190.024 464.161 165.484 401.124 165.458 C 271.24 165.458 165.529 271.161 165.477 401.085 C 165.46 442.617 176.311 483.154 196.932 518.892 L 163.502 641 L 288.421 608.232 C 322.839 627.005 361.591 636.901 401.03 636.913 L 401.126 636.913 L 401.127 636.913 C 530.998 636.913 636.717 531.2 636.77 401.274 C 636.794 338.309 612.306 279.105 567.816 234.565" fill-rule="evenodd" fill="rgb(255,255,255)"/></g></g></svg>' }, e), o = (t = !1, a = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (t = !0), t); this.addClass("floating-wpp"); var n, s = v(document.createElement("div")), p = v(document.createElement("div")), l = v(document.createElement("div")), c = v(document.createElement("div")), d = v(document.createElement("div")), m = v(document.createElement("div")), r = v(document.createElement("div")); if (p.addClass("floating-wpp-button-image"), s.addClass("floating-wpp-button").append(v(i.buttonImage)).css({ width: i.size, height: i.size, "background-color": i.backgroundColor }), (!(0 <= (n = window.navigator.userAgent).indexOf("MSIE") || n.match(/Trident.*rv\:11\./)) || i.showOnIE) && s.append(p).appendTo(this), s.on("click", function () { o && i.showPopup ? u() : C() }), i.showPopup) { var g = v(document.createElement("textarea")), h = v(document.createElement("strong")), w = v('<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 20 18" width="20" height="18"><defs><clipPath id="_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G"><rect width="20" height="18"/></clipPath></defs><g clip-path="url(#_clipPath_fgX00hLzP9PnAfCkGQoSPsYB7aEGkj1G)"><path d=" M 0 0 L 0 7.813 L 16 9 L 0 10.188 L 0 18 L 20 9 L 0 0 Z " fill="rgb(46,46,46)"/></g></svg>'); function u() { l.hasClass("active") || (l.addClass("active"), g.focus()) } l.addClass("floating-wpp-popup"), c.addClass("floating-wpp-head"), d.addClass("floating-wpp-message"), r.addClass("floating-wpp-input-message"), m.addClass("floating-wpp-btn-send"), d.text(i.popupMessage), g.val(i.message), i.popupMessage || d.hide(), c.append("<span>" + i.headerTitle + "</span>", h).css("background-color", i.headerColor), m.append(w), r.append(g, m), h.addClass("close").html("&times;"), l.append(c, d, r).appendTo(this), d.click(function () { }), h.click(function () { }), c.click(function () { l.removeClass("active") }), g.keypress(function (e) { i.message = v(this).val(), 13 != e.keyCode || e.shiftKey || o || (e.preventDefault(), m.click()) }), m.click(function () { i.message = g.val(), C() }), this.mouseenter(function () { u() }), 0 < i.autoOpenTimeout && setTimeout(function () { u() }, i.autoOpenTimeout) } function C() { var e = "http://"; e += o ? "api" : "web", e += ".whatsapp.com/send?phone=" + i.phone + "&text=" + encodeURI(i.message), window.open(e) } i.zIndex && v(this).css("z-index", i.zIndex), "right" === i.position && (this.css({ left: "auto", right: "15px" }), l.css("right", "0")) } }(jQuery);
    $('.floating-wpp').floatingWhatsApp({

        // phone number
        phone: '5511988413302 ',

        // message to send
        message: 'Olá, quero solicitar um orçamento.',

        // icon size
        size: '72px',

        // background color
        backgroundColor: '#25D366',

        // or right
        position: 'right',

        // message in popup
        popupMessage: '',

        // show a chat popup on hover
        showPopup: true,

        // show on IE
        showOnIE: true,

        // in milliseconds
        autoOpenTimer: 3,

        // header color
        headerColor: '#128C7E',

        // header title
        headerTitle: '',

        // z-index property
        zIndex: 177770,

        // custom icon
        buttonImage: "<"+"?"+"xml version='1.0' encoding='UTF-8' standalone='no'"+"?"+"><svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='0 0 800 800' width='800' height='800'><defs><clipPath id='_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ'><rect width='800' height='800'/></clipPath></defs><g clip-path='url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ)'><g><path d=' M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z ' fill='rgb(37,211,102)'/></g><g><path d=' M 508.558 450.429 C 502.67 447.483 473.723 433.24 468.325 431.273 C 462.929 429.308 459.003 428.328 455.078 434.22 C 451.153 440.114 439.869 453.377 436.434 457.307 C 433 461.236 429.565 461.729 423.677 458.78 C 417.79 455.834 398.818 449.617 376.328 429.556 C 358.825 413.943 347.008 394.663 343.574 388.768 C 340.139 382.873 343.207 379.687 346.155 376.752 C 348.804 374.113 352.044 369.874 354.987 366.436 C 357.931 362.999 358.912 360.541 360.875 356.614 C 362.837 352.683 361.857 349.246 360.383 346.299 C 358.912 343.352 347.136 314.369 342.231 302.579 C 337.451 291.099 332.597 292.654 328.983 292.472 C 325.552 292.301 321.622 292.265 317.698 292.265 C 313.773 292.265 307.394 293.739 301.996 299.632 C 296.6 305.527 281.389 319.772 281.389 348.752 C 281.389 377.735 302.487 405.731 305.431 409.661 C 308.376 413.592 346.949 473.062 406.015 498.566 C 420.062 504.634 431.03 508.256 439.581 510.969 C 453.685 515.451 466.521 514.818 476.666 513.302 C 487.978 511.613 511.502 499.06 516.409 485.307 C 521.315 471.55 521.315 459.762 519.842 457.307 C 518.371 454.851 514.446 453.377 508.558 450.429 Z  M 401.126 597.117 L 401.047 597.117 C 365.902 597.104 331.431 587.661 301.36 569.817 L 294.208 565.572 L 220.08 585.017 L 239.866 512.743 L 235.21 505.332 C 215.604 474.149 205.248 438.108 205.264 401.1 C 205.307 293.113 293.17 205.257 401.204 205.257 C 453.518 205.275 502.693 225.674 539.673 262.696 C 576.651 299.716 597.004 348.925 596.983 401.258 C 596.939 509.254 509.078 597.117 401.126 597.117 Z  M 567.816 234.565 C 523.327 190.024 464.161 165.484 401.124 165.458 C 271.24 165.458 165.529 271.161 165.477 401.085 C 165.46 442.617 176.311 483.154 196.932 518.892 L 163.502 641 L 288.421 608.232 C 322.839 627.005 361.591 636.901 401.03 636.913 L 401.126 636.913 L 401.127 636.913 C 530.998 636.913 636.717 531.2 636.77 401.274 C 636.794 338.309 612.306 279.105 567.816 234.565' fill-rule='evenodd' fill='rgb(255,255,255)'/></g></g></svg>",

    });
</script>

<script>
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  //var captionText = document.getElementById("caption");
  //captionText.innerHTML = element.alt;
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
