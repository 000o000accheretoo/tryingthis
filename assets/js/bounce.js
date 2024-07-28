(function ($, window, undefined) {
    $.fn.marqueeify = function (options) {
        var settings = $.extend({
            horizontal: true,
            vertical: true,
            speed: 100,
            container: $(window),  // Changed to use the entire window
            bumpEdge: function () {}
        }, options);
        
        return this.each(function () {
            var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
                $el = $(this);

            getSizes = function () {
                containerWidth = settings.container.width();  // Use width() for the window
                containerHeight = settings.container.height();  // Use height() for the window
                elWidth = $el.outerWidth();
                elHeight = $el.outerHeight();
            };

            move = {
                right: function () {
                    $el.animate({left: (containerWidth - elWidth)}, {
                        duration: ((containerWidth/settings.speed) * 1000), 
                        queue: false, 
                        easing: "linear", 
                        complete: function () {
                            settings.bumpEdge();
                            move.left();
                        }
                    });
                },
                left: function () {
                    $el.animate({left: 0}, {
                        duration: ((containerWidth/settings.speed) * 1000), 
                        queue: false, 
                        easing: "linear", 
                        complete: function () {
                            settings.bumpEdge();
                            move.right();
                        }
                    });
                },
                down: function () {
                    $el.animate({top: (containerHeight - elHeight)}, {
                        duration: ((containerHeight/settings.speed) * 1000), 
                        queue: false, 
                        easing: "linear", 
                        complete: function () {
                            settings.bumpEdge();
                            move.up();
                        }
                    });
                },
                up: function () {
                    $el.animate({top: 0}, {
                        duration: ((containerHeight/settings.speed) * 1000), 
                        queue: false, 
                        easing: "linear", 
                        complete: function () {
                            settings.bumpEdge();
                            move.down();
                        }
                    });
                }
            };

            getSizes();

            if (settings.horizontal) {
                move.right();
            }
            if (settings.vertical) {
                move.down();
            }

            $(window).resize(function() {
                getSizes();
            });
        });
    };
})(jQuery, window);

// Initialize marquee animation when the document is ready
$(document).ready(function() {
    $('.marquee').marqueeify({
        speed: 500,
        bumpEdge: function () {
            var newColor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 50%)";
            $('.marquee img').css('border-color', newColor);
        }
    });

    $('.marquee2').marqueeify({
        speed: 500,
        bumpEdge: function () {
            var newColor = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 70%)";
            $('.marquee img').css('border-color', newColor);
        }
    });
});
