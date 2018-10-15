// JS for smithscott.net


// scrolling nav
var scroll_nav = {
	on: function(e){
    	document.querySelector('.scroll-nav [href="#'+e.id+'"]').classList.add('scroll-on');
	},
	off: function(e){
		document.querySelector('.scroll-nav [href="#'+e.id+'"]').classList.remove('scroll-on');
	}
}

// lazy load images
var lazyLoadImg = function(imgs){
	for (i = 0; i < imgs.length; ++i) {
		imgs[i].srcset = imgs[i].dataset.src;
	}
}

// load bg video
var loadVideo = function(){
	var video_bg = document.querySelector('.video-bg');

	if(window.innerWidth >= 1024 && video_bg.src == ''){
		video_bg.src = video_bg.dataset.src;
	}
}

// new style scrolling addEventListener

var mainNavLinks = document.querySelectorAll(".scroll-nav a");
var mainSections = document.querySelectorAll(".portfolio-item");

var lastId;
var cur = [];
var section;

var scrollCheck = function(event){
	var fromTop = window.scrollY;

	mainNavLinks.forEach(link => {
	    var section = document.querySelector(link.hash);
		var page_top_trigger = (fromTop + window.innerHeight / 3);

	    if(section.offsetTop <= page_top_trigger && section.offsetTop + section.offsetHeight > page_top_trigger) {
	    	link.classList.add("scroll-on");
			lazyLoadImg(document.querySelectorAll(link.hash + ' img'));
	    } else {
	    	link.classList.remove("scroll-on");
	    }
	});
}





// on window resize
window.onresize = function(e){
	loadVideo();
}

// on scroll
window.addEventListener("scroll", scrollCheck);

// on page load
window.onload = function(e){

	loadVideo();
	scrollCheck();

}
