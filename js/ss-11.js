// JS for smithscott.net

var $d = document;
var p_items = [];
var p_elems = $d.querySelectorAll('.portfolio-item');


var scroll_nav = {
	on: function(e){
		console.log(e);
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






window.onload = function(e){

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
