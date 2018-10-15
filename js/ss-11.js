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

	return (vertInView && horInView);
}


var loadVideo = function(){
	var video_bg = $d.querySelector('.video-bg');

	if(window.innerWidth >= 1024 && video_bg.src == ''){
		video_bg.src = video_bg.dataset.src;
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




// new style scrolling addEventListener

let mainNavLinks = document.querySelectorAll(".scroll-nav a");
let mainSections = document.querySelectorAll(".portfolio-item");

let lastId;
let cur = [];
let section;

window.addEventListener("scroll", event => {
	let fromTop = window.scrollY;

	mainNavLinks.forEach(link => {
	    let section = document.querySelector(link.hash);
		let page_top_trigger = (fromTop + window.innerHeight / 3);

	    if(section.offsetTop <= page_top_trigger && section.offsetTop + section.offsetHeight > page_top_trigger) {
	    	link.classList.add("scroll-on");
	    } else {
	    	link.classList.remove("scroll-on");
	    }
	});
});
