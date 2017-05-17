// scroll animation

(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.fixed-top',
        offset: 60
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('#collapsingNavbar li a').click(function() {
        /* close responsive nav after click except for dropdown menu*/
        if (!this.classList.contains("dropdown-toggle")) {
          $('.navbar-toggler:visible').click();
        }
    });

})(jQuery);
