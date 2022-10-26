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
							'<svg viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g transform="matrix(1,0,0,1,-24.2236,-131.237) matrix(0.674397,0,0,0.674397,8.19751,41.9188)"><path d="M24.224,138.936C24.221,138.843 24.253,138.749 24.32,138.675L30.905,131.361C31.044,131.207 31.281,131.195 31.435,131.333L31.992,131.835C32.146,131.974 32.158,132.211 32.02,132.365L26.103,138.936L32.02,145.507C32.158,145.661 32.146,145.898 31.992,146.037L31.435,146.539C31.281,146.677 31.044,146.665 30.905,146.511L24.32,139.197C24.253,139.123 24.221,139.029 24.224,138.936Z" transform="matrix(1.48281,0,0,1.48281,-12.1553,-62.1575)"/></g></svg>',
							'<svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M5.919,5.774c0.002,-0.069 -0.022,-0.14 -0.072,-0.196l-4.939,-5.485c-0.104,-0.115 -0.282,-0.125 -0.397,-0.021l-0.418,0.377c-0.115,0.103 -0.125,0.281 -0.021,0.397l4.438,4.928l-4.438,4.929c-0.104,0.115 -0.094,0.293 0.021,0.397l0.418,0.376c0.115,0.104 0.293,0.095 0.397,-0.021l4.939,-5.485c0.05,-0.056 0.074,-0.126 0.072,-0.196Z"/></svg>'
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

				// Event CeGallery_BeforeSliderInitialize ausfuehren
				xna.fireEvent('CeGallery_BeforeSliderInitialize', {node: node});

				// Controls | Navigation anzeigen
				let controls = node.querySelector('.slider--controls .slider--controls-inner');
				let navigation = node.querySelector('.slider--navigation .slider--navigation-inner');

				let slider = tns({
					container: node.querySelector('.slider--container'),
					center: false,
					loop: false,
					autoWidth: true,
					items: 1,
					gutter: 0,
					autoplay: false,
					controls: (controls !== null),
					controlsContainer: node.querySelector('.slider--controls .slider--controls-inner'),
					nav: (navigation !== null),
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
						if(controls !== null) {
							controls.removeAttribute('tabindex');
							controls.removeAttribute('aria-label');
						}

						// Slider Navigation wieder fixen
						if(navigation !== null) {
							navigation.querySelector('ul').removeAttribute('aria-label');

							navigation.querySelectorAll('li').forEach(function(item) {
								item.removeAttribute('aria-label');
							});
						}
					}
				});

				// Event CeGallery_AfterSliderInitialize ausfuehren
				xna.fireEvent('CeGallery_AfterSliderInitialize', {node: node, slider: slider});
			});
		}
	});
})();