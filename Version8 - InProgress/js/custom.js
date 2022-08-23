(function ($) {
    "use strict";
    // Navbar Menu JS
    $("a.nav-link").on("click", function (e) {
        var anchor = $(this);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $(anchor.attr("href")).offset().top - 65,
                },
                3000
            );
        e.preventDefault();
    });

    $(".navbar .navbar-nav li a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Menu Icon JS
    $(".menu-icon").on("click", function () {
        $(".menu-icon").toggleClass("active");
    });
    $(".menu-icon").on("click", function () {
        $(".sidebar").toggleClass("active");
    });

    $("#getLink").on("click", function () {
        $("p.show_OnLink").toggleClass("active");
    });

    $(".projects").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        left: true,
        autoplay: false,
        nav: true,
        responsive: {
            0: {
                items: 1.2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
})(jQuery);
