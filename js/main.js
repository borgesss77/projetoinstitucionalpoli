(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial-carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


   

})(jQuery);

$(document).ready(function() {
  // Inicia o AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: false,
    offset: 100
  });

  // Rolagem suave
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var destino = this.getAttribute('href');
    if ($(destino).length) {
      $('html, body').animate({
        scrollTop: $(destino).offset().top
      }, 800);
    }
  });
});

  document.addEventListener('DOMContentLoaded', function() {
    // Inicia AOS
    if (AOS) {
      AOS.init({ duration: 900, once: true });
    }

    // Contador simples
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText.replace(/\D/g,'') || 0;
        const increment = Math.ceil(target / 120);
        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(update, 12);
        } else {
          counter.innerText = target;
        }
      };
      // start when visible (simple)
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            update();
            obs.unobserve(counter);
          }
        });
      }, {threshold: 0.6});
      obs.observe(counter);
    });
  });
