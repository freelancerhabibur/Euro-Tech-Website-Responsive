(function ($) {
    "use strict";

    var euroTech = {

        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },
         
        /* ============================================================ */
        /* Jquery Plugins Calling
        /* ============================================================ */
        onePageFunction: function(){
            $('header .nav-menu a[href*="#"]:not([href="#"])').on('click', function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                          scrollTop: target.offset().top - 150,
                        }, 100);
                        return false;
                    }
                }
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);                
            }
            cloneMobileMenu("header .nav-menu > ul", ".mobile-menu .menu");

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.toggler-menu, .close-menu', '.mobile-menu');  	
            $('.mobile-menu ul li.menu-has-children > a').on('click', function () {
                var link = $(this);
                var closestUl = link.closest("ul");
                var parallelActiveLinks = closestUl.find(".active")
                var closestLi = link.closest("li");
                var linkStatus = closestLi.hasClass("active");
                var count = 0;

                closestUl.find("ul").slideUp(function () {
                    if (++count == closestUl.find("ul").length)
                        parallelActiveLinks.removeClass("active");
                });

                if (!linkStatus) {
                    closestLi.children("ul").slideDown();
                    closestLi.addClass("active");
                }
            });
        },

        /* ============================================================ */
        /* Owl Carousel
        /* ============================================================ */
        owlCarousel: function () {
            var $heroBanner = $('.hero-slider');
            if ($heroBanner.length) {
                $heroBanner.owlCarousel({
                    loop: true,
                    items: 1,
                    dots: !1,
                    autoplay: 1,
                    autoplayTimeout: 5000,
                    autoplaySpeed: 700,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                });                
            };

            var $partners = $('.partner-carousel');
            if ($partners.length) {
                $partners.owlCarousel({
                    loop: true,
                    items: 1,
                    dots: !1,
                    autoplay: 1,
                    margin: 10,
                    autoplayTimeout: 5000,
                    autoplaySpeed: 500,
                    responsive: {
                        410: {
                            items: 2,
                        },
                        576: {
                            items: 3,
                            margin: 20,
                        },
                        992: {
                            items: 4,
                            margin: 30,
                        }
                    }
                });
            };                
            var $serviceCarousel = $('.service-carousel');
            if ($serviceCarousel.length) {
                $serviceCarousel.owlCarousel({
                    loop: true,
                    items: 1,
                    dots: !1,
                    autoplay: 1,
                    margin: 15,
                    autoplayTimeout: 5000,
                    autoplaySpeed: 500,
                    responsive: {
                        480: {
                            items: 2,
                        },
                        768: {
                            items: 3,
                        },
                        992: {
                            items: 4,
                        }
                    }
                });                
            };

        },
        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image]").each(function() {
                var $this = $(this);               
    
                if(  $this.attr("data-bg-color") !== undefined ){                        
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                    $this.css("background-size", $this.attr("data-bg-size") );
                    $this.css("background-repeat", $this.attr("data-bg-repeat") );
                    $this.css("background-position", $this.attr("data-bg-position") );
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                }
            });
        },

        initialize: function() {
			euroTech.preloader();
			euroTech.onePageFunction();
			euroTech.mobile_menu();
			euroTech.owlCarousel();
			euroTech.background_image();
		}
    };
    $(function() {
		euroTech.initialize();
	});
})(jQuery);