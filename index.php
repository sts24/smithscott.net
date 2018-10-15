<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Scott Smith - Front End Web Designer in Ventura County</title>

	<link rel="icon" type="image/png" href="images/favicon.png">
	<link rel="apple-touch-icon" href="images/site-icon.png">
	<meta name="apple-mobile-web-app-title" content="Scott">


	<meta name="description" content="Front-End Web Design, UI, UX Portfolio from Scott Smith">

	<meta name="viewport" content="width=device-width, initial-scale=1">



	<!-- OG Tags -->
	<meta property="og:title" content="Scott Smith Web Design" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="http://smithscott.net" />
	<meta property="og:image" content="https://smithscott.net/images/ss-share.jpg" />
	<meta property="og:description" content="Web design portfolio from Scott Smith" />
	<meta property="og:site_name" content="Scott Smith Web Design" />


	<link href="https://fonts.googleapis.com/css?family=Crete+Round:400,400i|Josefin+Sans:400,700" rel="stylesheet">


	<link rel="stylesheet" type="text/css" href="css/ss_styles.css?v=1" />
	
	<!-- Matomo -->
<script type="text/javascript">
  var _paq = _paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//smithscott.net/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->

</head>
<body>


<section class="big-section" id="welcome">

	<div class="welcome-banner">

		<div class="welcome-content">

			<img src="images/bear-white.svg" class="masthead-mark" alt="California Bear" />

			<header>
				<h1>Scott Smith</h1>
				<h2>Front-End Web Designer</h2>
			</header>


			<p>I am a web designer born and raised in Southern California. With a specialty in front-end development, I have extensive experience with working in higher education. I also publishes Trail Coffee, a journal of hiking photography.</p>

			<ul class="site-nav">
				<li>
					<a href="mailto:hello@smithscott.net" class="icon-link">
						<span class="icon">
							<?php include('./images/icons/paper-plane.svg'); ?>
						</span>
						<span class="icon-label">Contact</span>
					</a>
				</li>
				<li>
					<a href="http://dribbble.com/scottsmith" class="icon-link">
						<span class="icon">
							<?php include('./images/icons/dribbble.svg'); ?>
						</span>
						<span class="icon-label">Dribbble</span>
					</a>
				</li>
				<li>
					<a href="https://codepen.io/sts24/" class="icon-link">
						<span class="icon">
							<?php include('./images/icons/codepen.svg'); ?>
						</span>
						<span class="icon-label">CodePen</span>
					</a>
				</li>
				<li>
					<a href="https://github.com/sts24" class="icon-link">
						<span class="icon">
							<?php include('./images/icons/github.svg'); ?>
						</span>
						<span class="icon-label">GitHub</span>
					</a>
				</li>
			</ul>

			<a href="#portfolio" class="button">View Portfolio</a>

		</div>

	</div>
	
	<video data-src="media/haleakala.mp4" muted autoplay loop playsinline poster="media/haleakala-poster.jpg" class="video-bg" />

</section>





<hr class="section-break " id="portfolio" />

<?php

	$data = json_decode(file_get_contents('content.json'), true);

	function preload_img($path){

		$path = $_SERVER['DOCUMENT_ROOT'].'/'.$path;
		$type = pathinfo($path, PATHINFO_EXTENSION);
		$data = file_get_contents($path);
		$base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);

		echo $base64;
	}

	foreach($data as $key=>$i){

		if($i['type'] == 'web'){


			$desktop_img = 'images/portfolio-items/desktop/'.$key.'.jpg 1x, images/portfolio-items/desktop/'.$key.'@2x.jpg 2x';
			$mobile_img = 'images/portfolio-items/mobile/'.$key.'.jpg 1x, images/portfolio-items/mobile/'.$key.'@2x.jpg 2x';

			$preload_desktop = 'images/portfolio-items/preload/'.$key.'-desktop.jpg';
			$preload_mobile = 'images/portfolio-items/preload/'.$key.'-mobile.jpg';

		}

		if($i['type'] == 'art'){
			$img = 'images/portfolio-items/art/'.$key.'.jpg 1x, images/portfolio-items/art/'.$key.'@2x.jpg 2x';
		}


	?>

		<section class="big-section portfolio-item" id="<?php echo $key?>">

			<div class="big-section-content">

				<header>
					<h3><?php echo $i['title']; ?></h3>
					<p><?php echo $i['desc']; ?></p>
				</header>

			</div>

				<div class="showcase-area">

					<?php if($i['type'] == 'web'){ ?>


					<div class="frame-desktop">
						<img src="<?php preload_img($preload_desktop); ?>" data-src="<?php echo $desktop_img; ?>" alt="<?php echo $i['title']; ?> on Desktop" />
					</div>

					<div class="frame-mobile">
						<img src="<?php preload_img($preload_mobile); ?>" data-src="<?php echo $mobile_img; ?>" alt="<?php echo $i['title']; ?> on Mobile" />
					</div>
					<?php } else if($i['type'] == 'art'){ ?>
						<div class="frame-art">
							<img data-src="<?php echo $img; ?>" alt="<?php echo $i['title']; ?>" />
						</div>
					<?php } ?>

				</div>



		</section>

		<hr class="section-break" />
	<?php } ?>


<footer class="big-section" id="footer">

	<a href="#welcome" class="button scroll">Back To Top</a>

</footer>

<?php /*
<nav class="scroll-nav">
	<ul>
	<?php
		foreach($data as $key=>$i){
			echo '<li><a href="#'.$key.'" class="scroll-label"><div class="dot"></div><span class="label">'.$i['title'].'</span></a></li>';
		}
	?>
	</ul>
</nav>

*/ ?>

	<script type="text/javascript" src="js/ss-11.js?v=1"></script>



</body>
</html>
