// ---------------------------------------------------------------------------------------------------------------------
// Layout 01
(function () {
	'use strict';

	xna.on('documentLoaded', function() {

		// Lightbox (gilt fuer Layout Default und Slider)
		if(typeof(Tobii) === 'function') {
			document.querySelectorAll('.ce-gallery').forEach(function(node, index) {
				let uid = node.getAttribute('id');
				let isLightbox = parseInt(node.querySelector('.gallery').getAttribute('data-gallery-lightbox'));

				if(isLightbox === 1) {
					let lightbox = new Tobii({
						selector: '#' + uid + ' .gallery--image',
						captionAttribute: 'title',
						counter: false,
						zoom: false,
						navText: [
							'<svg viewBox="0 0 34 135" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#2d808d"><path d="M331.332,378.962C331.333,378.693 331.389,378.423 331.499,378.171C335.727,368.463 355.469,323.144 359.697,313.436C359.909,312.95 360.305,312.568 360.799,312.374C361.293,312.18 361.843,312.19 362.33,312.401C362.596,312.517 362.87,312.637 363.136,312.753C363.622,312.964 364.004,313.361 364.198,313.854C364.392,314.348 364.382,314.899 364.171,315.385C359.888,325.216 339.733,371.485 336.833,378.142C336.611,378.652 336.611,379.231 336.833,379.74C339.735,386.401 359.911,432.719 364.196,442.555C364.637,443.568 364.173,444.746 363.161,445.187C362.887,445.307 362.604,445.43 362.33,445.549C361.843,445.761 361.293,445.771 360.799,445.577C360.305,445.383 359.909,445.001 359.697,444.515C355.469,434.807 335.727,389.488 331.499,379.78C331.389,379.528 331.333,379.258 331.332,378.988L331.332,378.969L331.332,378.962Z" transform="matrix(1,0,0,1,-331.332,-311.603) matrix(1.22563,0,0,2.33454,-312.985,-1728.65) matrix(0.815904,0,0,0.42835,255.366,740.467)"/></svg>',
							'<svg viewBox="0 0 34 135" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#2d808d"><path d="M331.332,378.962C331.333,378.693 331.389,378.423 331.499,378.171C335.727,368.463 355.469,323.144 359.697,313.436C359.909,312.95 360.305,312.568 360.799,312.374C361.293,312.18 361.843,312.19 362.33,312.401C362.596,312.517 362.87,312.637 363.136,312.753C363.622,312.964 364.004,313.361 364.198,313.854C364.392,314.348 364.382,314.899 364.171,315.385C359.888,325.216 339.733,371.485 336.833,378.142C336.611,378.652 336.611,379.231 336.833,379.74C339.735,386.401 359.911,432.719 364.196,442.555C364.637,443.568 364.173,444.746 363.161,445.187C362.887,445.307 362.604,445.43 362.33,445.549C361.843,445.761 361.293,445.771 360.799,445.577C360.305,445.383 359.909,445.001 359.697,444.515C355.469,434.807 335.727,389.488 331.499,379.78C331.389,379.528 331.333,379.258 331.332,378.988L331.332,378.969L331.332,378.962Z" transform="matrix(1,0,0,1,-1536.33,-311.603) matrix(-1.22563,0,0,2.33454,2214.31,-1728.65) matrix(0.815904,0,0,0.42835,255.366,740.467)"/></svg>'
						],
						navLabel: [xna.l10n.gallery.prev, xna.l10n.gallery.next],
						closeText: '<svg viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#2d808d"><path d="M236.9,511.532L213.671,488.302C213.296,487.927 213.085,487.418 213.085,486.888C213.085,486.358 213.296,485.849 213.671,485.474C213.876,485.269 214.087,485.057 214.293,484.852C214.668,484.477 215.176,484.266 215.707,484.266C216.237,484.266 216.746,484.477 217.121,484.852L240.351,508.082L263.58,484.852C263.955,484.477 264.464,484.266 264.994,484.266C265.525,484.266 266.033,484.477 266.409,484.852C266.62,485.064 266.838,485.282 267.05,485.493C267.425,485.868 267.635,486.377 267.635,486.907C267.635,487.438 267.425,487.947 267.05,488.322L243.82,511.551L267.05,534.781C267.425,535.156 267.635,535.664 267.635,536.195C267.635,536.725 267.425,537.234 267.05,537.609C266.844,537.814 266.633,538.026 266.428,538.231C266.053,538.606 265.544,538.817 265.014,538.817C264.483,538.817 263.974,538.606 263.599,538.231L240.37,515.001L217.121,538.25C216.746,538.625 216.237,538.836 215.707,538.836C215.176,538.836 214.668,538.625 214.293,538.25C214.081,538.039 213.863,537.821 213.652,537.609C213.276,537.234 213.066,536.725 213.066,536.195C213.066,535.664 213.276,535.156 213.652,534.781L236.9,511.532Z" transform="matrix(1,0,0,1,-213.066,-484.266) matrix(1.22563,0,0,2.33454,-412.985,-1691.65) matrix(0.815904,0,0,0.42835,336.956,724.618)"/></svg>',
						closeLabel: xna.l10n.gallery.close,
						autoplayVideo: true
					});
				}
			});
		}

		// Slider
		if(typeof(tns) === 'function') {
			document.querySelectorAll('.ce-gallery--slider').forEach(function(node, index) {
				let slider = tns({
					container: node.querySelector('.slider--container'),
					center: false,
					loop: false,
					autoWidth: true,
					items: 3,
					gutter: 20,
					autoplay: false,
					controls: true,
					controlsContainer: node.querySelector('.slider--controls .slider--controls-inner'),
					nav: true,
					navContainer: node.querySelector('.slider--navigation .slider--navigation-inner ul'),
					onInit: function() {

						// CSS Lazyload durch setzen der Klasse slider--initialized
						node.querySelector('.slider').classList.add('slider--initialized');

						node.querySelectorAll('.tns-item').forEach(function(item, index) {

							// Focus auf geklonte Eintraege verhindern
							if(item.classList.contains('tns-slide-cloned') === true) {
								item.querySelectorAll('a, button').forEach(function(element) {
									element.setAttribute('tabindex', '-1');
								});
							} else {
								item.removeAttribute('aria-hidden');
							}

							// Beim Fokusieren eines Links / Buttons innerhalb eines Eintrags immer zu diesem Eintrag springen
							item.querySelectorAll('a, button').forEach(function(element) {
								element.addEventListener('focus', function() {
									slider.goTo(item.getAttribute('data-index'));
								});
							});
						});

						// Slider Controls wieder fixen
						let controls = node.querySelector('.slider--controls .slider--controls-inner');
						if(controls !== null) {
							controls.removeAttribute('tabindex');
							controls.removeAttribute('aria-label');
						}

						// Slider Navigation wieder fixen
						let navigation = node.querySelector('.slider--navigation .slider--navigation-inner ul');
						if(navigation !== null) {
							navigation.removeAttribute('aria-label');

							navigation.querySelectorAll('li').forEach(function(item) {
								item.removeAttribute('aria-label');
							});
						}
					}
				});
			});
		}
	});
})();