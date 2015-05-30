/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	init();

	function init() {
		smoothScroll();
		fileUpload();
		parallax();
	}
	function smoothScroll() {
		$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	}

	function fileUpload() {
		var input = $("input:file");
		var selectedImg = $(".selected-img");
		var active = "is-active"
		input.change(function (){
      $(this).parent().addClass(active);
      var fileName = $(this).val().split("\\");
      if(fileName.length) {
      	selectedImg.text(fileName[fileName.length-1]);
      }
    });
	}

	function parallax() {
		var settings = {
			parallax: false,
			parallaxFactor: 20
		};
		skel.breakpoints({
			xlarge: '(max-width: 1800px)',
			large: '(max-width: 1280px)',
			medium: '(max-width: 980px)',
			small: '(max-width: 736px)',
			xsmall: '(max-width: 480px)'
		});

			var $window = $(window),
			$body = $('body'),
			$header = $('#header');
			$body.addClass('is-loading');
			$window.on('load', function() {
				$body.removeClass('is-loading');
			});
			if (skel.vars.mobile) {
				$body.addClass('is-touch');
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);
			}
			$('form').placeholder();
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});
			if (skel.vars.browser == 'ie' || skel.vars.mobile)
				settings.parallax = false;
			if (settings.parallax) {
				skel.on('change', function() {
					if (skel.breakpoint('medium').active) {
						$window.off('scroll.strata_parallax');
						$header.css('background-position', 'top left, center center');
					} else {
						$header.css('background-position', 'left 0px');
						$window.on('scroll.strata_parallax', function() {
							$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
						});
					}
				});
			}
		function lightbox() {
			$window.on('load', function() {
				$('#two').poptrox({
					caption: function($a) {
						// return $a.next('h3').text();
						return $a.next('h3').text();
					},
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (skel.breakpoint('small').active ? 0 : 50)
				});
			});
		}
	lightbox();
	};
})(jQuery);