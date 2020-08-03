/*!
 * Color Changer
 * SlariStudio
 */
$(document).ready(function() {
    'use strict';
    var colorLuminance = function(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        // convert to decimal and change luminosity
        var rgb = "#",
            c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    };
    // Color Changer
    $(function() {
        $(document).on("click", ".background-changer .colors span", function() {
            $("#color-changer").remove();
            var color = $(this).data("color");
            var style = "<style id='color-changer'>" +
                // Backgrounds
                "span.divider, .skill-item .skill-percent,.toggle,.team-img:after,.headline-typing.type .word-typing.selected, .headline-typing.type .word-typing.waiting::after, .headline-typing.type .word-typing::after,.btn-filter .button:hover{background-color: " + color + " !important}" +
                ".btn.btn-custom{background-color: " + color + "}" +
                // Colors
                ".btn.btn-custom.btn-wire,.app-text span,.nav li.active a,#tabs-wrap .nav-tabs > li.active > a,#tabs-wrap .nav-tabs > li > a:hover,.btn-filter .button.active,.benefit-item i,a,.feature-item i,a:focus, a:hover,.panel-title > a:after,.price-title,.price-amount h2,.timeline-icon:hover,.testi-content .testi-desc span,.video-content h2 span,.contact-info-item i,#footer-copyright span,.navbar-fixed-top li > a:focus, .navbar-fixed-top li > a:hover,.hero-text span,.timeline-box:hover + .timeline-icon,.timeline-icon:hover,#back-to-top i,.counter-item > i,.vendor-icon a:hover > i {color: " + color + "}" +
                // Border Color
                ".price-item:hover,.timeline-icon:hover,.timeline-box:hover + .timeline-icon,.timeline-icon:hover,.btn-filter .button:hover{border-color: " + color + "}" +
                // Dark Background Colors
                ".btn.btn-custom.btn-wire:hover,.btn.btn-custom:hover{background-color: " + colorLuminance(color, -0.2) + " !important} " +
                // Dark Colors
                "a:hover{color: " + colorLuminance(color, -0.2) + "} " +
                // Dark Border Colors
                ".btn.btn-custom.btn-wire{border-color: " + colorLuminance(color, -0.2) + "}" +
                // Bright Background Colors
                "{background-color: " + colorLuminance(color, 0.2) + "} " +
                // Bright Colors
                "{color: " + colorLuminance(color, 0.2) + "} " +
                // Bright Border Colors
                "{border-color: " + colorLuminance(color, 0.2) + "}" +
                "</style>";
            $("head").append(style);
        });
    });
    // / Color Changer

    // Section and content color Changer
    $(function() {
        $(document).on("click", ".background-toggle  span", function() {
            $("#bg-changer").remove();
            var color = $(this).data("color");
            var bgcolor = $(this).data("bg-color");
            var bgmidcolor = $(this).data("bg-mid-color");
            var style = "<style id='bg-changer'>" +
                // Backgrounds section
                "body{background-color: " + bgcolor + "; color: " + color + "}" +
                "body #profile-2,#features,#timeline{background-color:" + bgmidcolor + "} " +
                "#tabs-wrap .nav-tabs > li.active > a{background-color: " + color + "}" +
                // Background
                ".panel-default>.panel-heading,.timeline-box,.timeline-icon{background-color: " + bgcolor + "}" +
                // Colors
                "#tabs-wrap .nav-tabs > li > a,.panel-title,.blog-title h3{color: " + color + "}" +
                //Border Colors
                ".timeline-wrapper .timeline-box:after{border-left-color: " + bgcolor + "}" +
                ".timeline-wrapper:nth-of-type(odd) .timeline-box:after{border-right-color: " + bgcolor + "}" +
                "@media (max-width: 992px){ .timeline-wrapper .timeline-box:after{border-right-color: " + bgcolor + "}" +
                // Bright Border Colors
                "</style>";
            // / Section and content color Changer
            $("head").append(style);
        });
    });

    $(document).on("click", ".background-changer .toggle", function() {
        var $parent = $(this).parent();
        if (!$parent.hasClass("opened")) {
            $parent.addClass("opened");
        } else {
            $parent.removeClass("opened");
        }
    });

    var markup = "<div class='background-changer'>" +
        "<div class='colors'>" +
        "<h5>Colors</h5>" +
        "<span class='red' data-color='#eb6361'></span>" +
        "<span class='blue' data-color='#41baf1'></span>" +
        "<span class='green' data-color='#2cc990'></span>" +
        "<span class='yellow' data-color='#eee657'></span>" +
        "<span class='orange' data-color='#ffc400'></span>" +
        "<span class='purple' data-color='#897fba'></span>" +
        "<span class='maroon' data-color='#8a2d3c'></span>" +
        "<span class='green1' data-color='#97ce68'></span>" +
        "<span class='aqua' data-color='#008F95'></span>" +
        "</div>" +
        "<div class='background-toggle'>" +
        "<h5>Backgrounds</h5>" +
        "<span class='dark-bg' data-bg-color='#171717 ' data-bg-mid-color='#0d0c0d' data-color='#f5f5f5' ></span>" +
        "<span class='light-bg' data-bg-color='#ffffff'  data-bg-mid-color='#f5f5f5' data-color='#2e2e2e'></span>" +
        "</div>" +
        "<div class='layouts'>" +
        "<h5>Layouts</h5>" +
        "<a href='index.html'>Hero Single Static</a>" +
        "<a href='index-slider.html'>Hero Slider</a>" +
        "<a href='index-creative.html'>Hero Creative</a>" +
        "<a href='index-app.html'>Hero App Layout</a>" +
        "</div>" +
        "<div class='toggle'><i class='fa fa-cog'></i></div>" +
        "</div>";
    $("body").append(markup);

});
