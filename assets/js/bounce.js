var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function ($, window, undefined) {
	$.fn.marqueeify = function (options) {
		var settings = $.extend({
			horizontal: true,
			vertical: true,
			speed: 100,
			container: $(this).parent(),
			bumpEdge: function () {}
		}, options);
		
		return this.each(function () {
			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
				$el = $(this);

			getSizes = function () {
				containerWidth = settings.container.outerWidth();
				containerHeight = settings.container.outerHeight();
				elWidth = $el.outerWidth();
				elHeight = $el.outerHeight();
			};

			move = {
				right: function () {
					$el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.left();
					}});
				},
				left: function () {
					$el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.right();
					}});
				},
				down: function () {
					$el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.up();
					}});
				},
				up: function () {
					$el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.down();
					}});
				}
			};

			getSizes();

			if (settings.horizontal) {
				move.right();
			}
			if (settings.vertical) {
				move.down();
			}

      $(window).resize( function() {
        getSizes();
      });
		});
	};
})(jQuery, window);
//allah dvd shit
$(document).ready( function() {

	$('.marquee').marqueeify({
		speed: 300,
		bumpEdge: function () {
			var newColor = "hsl(" + Math.floor(Math.random()*360) + ", 100%, 50%)";
			$('.marquee .logo').css('fill', newColor);
		}
	});
});

}
/*
     FILE ARCHIVED ON 20:36:46 Jul 14, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:56:58 Apr 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 24.676
  exclusion.robots: 0.157
  exclusion.robots.policy: 0.143
  cdx.remote: 0.105
  esindex: 0.013
  LoadShardBlock: 117.673 (3)
  PetaboxLoader3.datanode: 111.932 (4)
  PetaboxLoader3.resolve: 106.667 (2)
  load_resource: 121.021
*/