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


  <!-- Header -->
  <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <!-- <div class="intro-lead-in">Móveis Sob Medida</div> -->
        <div class="intro-heading text-uppercase">Projetos</div>
        <!-- <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Projetos</a> -->
      </div>
    </div>
  </header>


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