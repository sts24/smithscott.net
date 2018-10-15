// JS for smithscott.net

var $d = document;
var p_items = [];
var p_elems = $d.querySelectorAll('.portfolio-item');


var anchor_links = {
	init: function(){
		
		$d.querySelectorAll('a[href^="#"]').forEach(function(links){
			links.addEventListener('click', function(e){
				if(e.target.hash !== ''){
					e.preventDefault();
					
					$d.querySelector(this.getAttribute('href')).scrollIntoView({
			            behavior: 'smooth'
			        });
				}
			});
			
		});
	}
}

anchor_links.init();






var scroll_nav = {
	on: function(e){
    		$d.querySelector('.scroll-nav [href="#'+e.id+'"]').classList.add('scroll-on');
	},
	off: function(e){
		$d.querySelector('.scroll-nav [href="#'+e.id+'"]').classList.remove('scroll-on');
	}
}


var lazyLoadImg = function(imgs){
	for (i = 0; i < imgs.length; ++i) {
		imgs[i].srcset = imgs[i].dataset.src;
	}
}


function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
	const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

//console.log(element,rect.height);
	return (vertInView && horInView);
}


var loadVideo = function(){
	var video_bg = $d.querySelector('.video-bg');

	if(window.innerWidth >= 1024 && video_bg.src == ''){
		video_bg.src = video_bg.dataset.src;
		//console.log('loaded');	
	}
}

window.onresize = function(e){
	loadVideo();
}

window.onload = function(e){

	
	loadVideo();

	// generate list of portfolio items
	for(i = 0; i < p_elems.length; ++i) {
		p_items.push({
			'id': p_elems[i].id,
			'loaded': false
		});

		//console.log(isInViewport($d.querySelector('#'+p_elems[i].id)));
	}

}





window.onscroll = function(e){

	// check scroll position against portfolio list
	for(pi in p_items){
		//scroll_nav.off(p_items[pi]);

		if(isInViewport($d.querySelector('#'+p_items[pi].id))){
			//scroll_nav.on(p_items[pi]);

			// setup lazy load images
			if(p_items[pi].loaded == false){
				var imgs = $d.querySelectorAll('#'+p_items[pi].id+' img');
				lazyLoadImg(imgs);
				p_items[pi].loaded = true;
			}
		}
	}

}
