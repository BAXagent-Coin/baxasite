$(document).ready(function() {
    'use strict';
    /* =========================
    STRT JS - TABLE OF CONTENTS
    ============================
    1. NAVBAR CHANGE
    2. MASONRY PORTFOLIO : ISOTOPE
    3. SKILLBAR
    4. PARALLAX : STELLAR
    5. MAPS
    6. AOS : ANIMATE ON SCROLL 
    7. COUNT TO : COUNTER 
    7. OWL SLIDER
    8. SCROLL TO TOP 
    9. $ VALIDATION
    10. PRELOADER
    11. MAGNIFIC POPUP
    12. BACK TO TOP BUTTON
    13. SUBSCRIBE FORM WITH AJAXCHIMP
    14. CONTACT FORM NOTIFICATION
    15. YOUTUBE VIDEO

    /* ====================
    1. NAVBAR CHANGE
    =======================*/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $("nav").removeClass("navbar-transparent");
            $("body").addClass("not-on-top");
        } else {
            $("body").removeClass("not-on-top");
            $("nav").addClass("navbar-transparent");
        }
        return false;
    });

    /* =============================
    2. MASONRY PORTFOLIO : ISOTOPE
    ================================*/
    // init Isotope
    $(function() {
        var $grid = $('.grid-portfolio').isotope({
            // options
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item'
            }
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // filter add class
        $('.btn-filter button.is-checked').addClass('active');
        $('.btn-filter button').on('click', function() {
            $('.btn-filter button').removeClass('active');
            $(this).addClass('active');
        });
        return false;
    });
    /* ====================
    3. SKILLBAR
    =======================*/
    $('.skills').each(function() {
        var that = this;
        var waypoints = $(this).waypoint({
            handler: function(direction) {
                $('.skill-percent-wrap').each(function() {
                    $(this).find('.skill-percent').delay(10000).css({
                        width: $(this).attr('data-percent')
                    });
                });
            },
            offset: '80%'
        });
        return false;
    });

    /* ====================
    4. PARALLAX : STELLAR
    =======================*/
    $(function() {
        var screenW = $(window).width();
        if (screenW >= 767) {
            $(".bg-fixed").attr("data-stellar-background-ratio", "0.9");
            $.stellar({
                horizontalScrolling: false,
                responsive: true,
                parallaxBackgrounds: true,
                scrollProperty: 'scroll',
            });
            $(".parallax-object").attr({
                "data-stellar-ratio": 1.2,
                "data-stellar-vertical-offset": 100
            });
            $.stellar({
                horizontalScrolling: false,
                responsive: true,
                parallaxBackgrounds: true,
                scrollProperty: 'scroll',
            });
        };
    });

    /* ====================
    5. MAPS 
    =======================*/
    // When the window has finished loading create our google map below
    $(function() {
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            // Input your location info (latitude and longitude) here
            var myLatLng = new google.maps.LatLng(-7.7972, 110.3688);

            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 15,
                scrollwheel: false,
                // navigationControl: false,
                mapTypeControl: false,
                // scaleControl: false,
                // draggable: false,
                // The latitude and longitude to center the map (always required)
                center: myLatLng, // Your Location
                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#000000"
                    }, {
                        "lightness": 17
                    }]
                }]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');
            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map
            });
        };
    });
    /* ====================
    6. AOS : ANIMATE ON SCROLL 
    =======================*/
    // animate on scroll
    // you can viewing https://michalsnik.github.io/aos/ for more detail options
    $(function() {
        AOS.init({
            easing: 'ease-out-back',
            duration: 1000,
            delay: 300,
            once: true
        });
    });
    /* ====================
    7. COUNT TO : COUNTER 
    =======================*/
    $('#counter').each(function() {
        var that = this;
        var waypoints = $(this).waypoint({
            handler: function(direction) {
                $('.number').countTo({
                    speed: 1500
                });
            },
            offset: '80%'
        });
    });
    /* ====================
    7. OWL SLIDER
    =======================*/
    $('.slideshow').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navSpeed: 1000,
        dots: true,
        dotSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        navText: ['<span class="icon-nav-slider nav-left"></span>', '<span class="icon-nav-slider nav-right"></span>']
    });
    $('.client-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navSpeed: 1000,
        dots: false,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
    $('.testi-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: false,
        dots: true,
        dotSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        items: 1
    });


    /* ====================
    8. SCROLL TO TOP 
    =======================*/
    $(".navbar-right li > a").on("click", function(event) {
        var target = $(this).attr("href");
        var top;
        if (target !== "#home") {
            top = $(target).offset().top;
        } else {
            top = 0;
        }
        $('html, body').animate({
            scrollTop: top
        }, 750);
        event.preventDefault();
    });
    /* ====================
    9. $ VALIDATION
    =======================*/
    $(function() {
        $("form[name='contact-us']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                name: {
                    required: true,
                    minlength: 3,
                    maxlength: 25
                },
                email: {
                    required: true,
                    // Specify that email should be validated
                    // by the built-in "email" rule
                    email: true
                },
                subject: {
                    required: true,
                    minlength: 3,
                    maxlength: 24
                },
                message: {
                    required: true,
                    minlength: 5
                }
            },
            // Specify validation error messages
            messages: {
                name: "Please enter your name at least 3 characters",
                subject: "Please enter your subject at least 3 characters",
                message: {
                    required: "Please provide your message",
                    minlength: "Your message must be at least 5 characters long"
                },
                email: {
                    required: "Please enter a valid email address",
                    email: "Your email address must be in the format of name@domain.com"
                }
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                form.submit();
                return false;
            }
        });
    });
    /* ====================
    10. PRELOADER
    =======================*/

    // After loading finished
    $(function() {
        $(window).load(function() {
            setTimeout(function() {
                $('body').addClass('loaded');
            }, 50);
            // Set the delay animation
        });
    });

    /* ====================
    11. MAGNIFIC POPUP
    =======================*/
    $('.grid-link').magnificPopup({
        type: 'image',
        delegate: '.img-pop',
        removalDelay: 300,
        type: "image",
        fixedContentPos: false,
        gallery: {
            enabled: true,
            preload: [0, 2],
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            tPrev: 'Previous Project',
            tNext: 'Next Project'
        }
    });
    /* ====================
    12. BACK TO TOP BUTTON
    =======================*/
    $(function() {
        var button = "#back-to-top";
        $(document).on("click", button, function(event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 750);
        });
    });
    /* ====================
    13. SUBSCRIBE FORM WITH AJAXCHIMP
    =======================*/
    $('#subscribe-form').ajaxChimp({
        callback: mailchimpCallback,
        url: 'http://slari.us14.list-manage.com/subscribe/post?u=2c7c746699e1645e9c090cea5&amp;id=9f878bda22'
            // Replace the URL above with your mailchimp URL (put your URL inside '').
    });

    // callback function when the form submitted, show the notification box
    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-success-notification').addClass('show-up');
        } else if (resp.result === 'error') {
            $('#subscribe-error-notification').addClass('show-up');
        }
    };
    /* ====================
    14. CONTACT FORM NOTIFICATION
    =======================*/
    $("#contact-form .btn").on("click", function(e) {
        // Stop form submission & check the validation
        e.preventDefault();

        // Variable declaration
        var error = false;

        if (error == true) {
            $('#error-notification').addClass('show-up');
        } else {
            $('#error-notification').removeClass('show-up');
        }

        if (error == false) {
            $.post("php/contact.php", $("#contact-form form").serialize(), function(result) {
                if (result == 'sent') {
                    $('#success-notification').addClass('show-up');
                    $('#contact-form .btn').addClass('disabled');
                }
                console.log(result);
            });
        }
    });
    // Function to close the Notification
    $(".notification-close").on("click", function(e) {
        $(this).parent('div').fadeOut(200);
    });
    /* ====================
    15. YOUTUBE VIDEO
    =======================*/
    $(function() {
        $("#bg-video").YTPlayer();
    });

});
