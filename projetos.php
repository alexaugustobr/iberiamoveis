<?php

function readFilesFromFolder($folder)
{
	return array_diff(scandir($folder), array('..', '.'));
}

function imageFromFolder($folder, $tags, $slideToIndex)
{
	$imagens = readFilesFromFolder($folder);
	foreach ($imagens as &$imagem) {
		echo "<div class='mbr-gallery-item mbr-gallery-item--p2' data-video-url='false'";
		echo "	data-tags='$tags'>";
		echo "	<div href='#lb-gallery2-0' data-slide-to='$slideToIndex' data-toggle='modal'>";
		echo "			<img async src='${folder}/${imagem}' alt='' title=''><span";
		echo "			class='icon-focus'></span></div>";
		echo " </div>";
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
		echo "			<img async src='${folder}/${imagem}' alt='' title=''>";
		echo " </div>";
		$index++;
	}
}

?>

<!DOCTYPE html>
<html>

<head>
	<!-- Site made with Mobirise Website Builder v4.10.4, https://mobirise.com -->
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="generator" content="Mobirise v4.10.4, mobirise.com">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<link rel="shortcut icon" href="assets/images/logo4.png" type="image/x-icon">
	<meta name="description" content="">

	<title>Home</title>
	<link rel="stylesheet" href="assets/web/assets/mobirise-icons/mobirise-icons.css">
	<link rel="stylesheet" href="assets/tether/tether.min.css">
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">
	<link rel="stylesheet" href="assets/theme/css/style.css">
	<link rel="stylesheet" href="assets/gallery/style.css">
	<link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">



</head>

<body>
	<section class="mbr-gallery mbr-slider-carousel cid-ruuHhHl8AI" id="gallery2-0">



		<div class="container">
			<div>
				<!-- Filter -->
				<div class="mbr-gallery-filter container gallery-filter-active">
					<ul buttons="0">
						<li class="mbr-gallery-filter-all">
							<a class="btn btn-md btn-primary-outline active display-7" href="">Todos</a></li>
					</ul>
				</div><!-- Gallery -->
				<div class="mbr-gallery-row">
					<div class="mbr-gallery-layout-default">
						<div>
							<div>
								<?php
								$slideToIndex = 0;
								$slideToIndex = imageFromFolder('./projetos/3d', 'Projetos 3d', $slideToIndex);
								$slideToIndex = imageFromFolder('./projetos/banheiros', 'Banheiros', $slideToIndex);
								$slideToIndex = imageFromFolder('./projetos/cozinhas', 'Cozinhas', $slideToIndex);
								$slideToIndex = imageFromFolder('./projetos/dormitorios', 'Dormitórios', $slideToIndex);
								$slideToIndex = imageFromFolder('./projetos/salas', 'Salas', $slideToIndex);
								$slideToIndex = imageFromFolder('./projetos/comercial', 'Comercial', $slideToIndex);
								?>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</div><!-- Lightbox -->
				<div data-app-prevent-settings="" class="mbr-slider modal fade carousel slide" tabindex="-1" data-keyboard="true" data-interval="false" id="lb-gallery2-0">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-body">
								<div class="carousel-inner">
									<?php
									imageModalFromFolder('./projetos/3d', true);
									imageModalFromFolder('./projetos/banheiros', false);
									imageModalFromFolder('./projetos/cozinhas', false);
									imageModalFromFolder('./projetos/dormitorios', false);
									imageModalFromFolder('./projetos/salas', false);
									imageModalFromFolder('./projetos/comercial', false);
									?>
								</div><a class="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#lb-gallery2-0"><span class="mbri-left mbr-iconfont" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control carousel-control-next" role="button" data-slide="next" href="#lb-gallery2-0"><span class="mbri-right mbr-iconfont" aria-hidden="true"></span><span class="sr-only">Next</span></a><a class="close" href="#" role="button" data-dismiss="modal"><span class="sr-only">Close</span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</section>



	<script src="assets/web/assets/jquery/jquery.min.js"></script>
	<script src="assets/popper/popper.min.js"></script>
	<script src="assets/tether/tether.min.js"></script>
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/smoothscroll/smooth-scroll.js"></script>
	<script src="assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js"></script>
	<script src="assets/vimeoplayer/jquery.mb.vimeo_player.js"></script>
	<script src="assets/masonry/masonry.pkgd.min.js"></script>
	<script src="assets/imagesloaded/imagesloaded.pkgd.min.js"></script>
	<script src="assets/theme/js/script.js"></script>
	<script src="assets/gallery/player.min.js"></script>
	<script src="assets/gallery/script.js"></script>
	<script src="assets/slidervideo/script.js"></script>


</body>

</html>