
$(document).ready(function () {

// header and menu options

    const menu = document.getElementById("site-header");
    let last_known_scroll_position = 0;
    let direction = 0;
    let ticking = false;
    function hideElem(direction) {
      if (direction < 0) {
        menu.classList.add('hide-header');
      }
      else {
        menu.classList.remove('hide-header');
      }
    }

    window.addEventListener("scroll", (e) => { 
      direction = last_known_scroll_position - window.scrollY; 
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function() {
          hideElem(direction);
          ticking = false;
        });    
        ticking = true;
      }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 138){  
            $('.site-header').css({'backgroundColor' : '#fef6f3'});
        }
        else{
            $('.site-header').css({'backgroundColor' : 'transparent'});
        }
    });

    const $window   = $(window),
          $addTo    = $('.site-menu');
    $window.resize(function resize() {
        if ($window.width() < 769) {
            return $addTo.addClass('mobile-menu');
        }
        $addTo.removeClass('mobile-menu');
    }).trigger('resize');

    $('.menu-toggle').on('click', function(){
        $('#body').toggleClass('body-overflow');
    });
// header and menu options END

});

const testimonialSwiper = document.getElementById('testimonials-swiper');
if (testimonialSwiper){
    const mySwiper = new Swiper('#testimonials-swiper', {
        // Optional parameters
        slidesPerView: 1,
        // spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        speed: 2000,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            1025:{
                slidesPerView: 1.5
            },
        },
        navigation: {
            nextEl: '.testimonials-swiper-next',
            prevEl: '.testimonials-swiper-prev',
        },
    })
}

const blogSwiper = document.getElementById('blog-swiper');
if (blogSwiper){
    const mySwiper = new Swiper('#blog-swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        // centeredSlides: true,
        speed: 2000,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            600:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1025:{
                slidesPerView: 3
            },
        },
    })
}

const partnersSwiper = document.getElementById('partners-swiper');
if (partnersSwiper){
    const mySwiper = new Swiper('#partners-swiper', {
        // Optional parameters
        slidesPerView: 1,
        loop: true,
        // centeredSlides: true,
        speed: 2000,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            600:{
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1025:{
                slidesPerView: 5,
            },
        },
    })
}

const socialSwiper = document.getElementById('social-swiper');
if (socialSwiper){
    const mySwiper = new Swiper('#social-swiper', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        // centeredSlides: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            600:{
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1025:{
                slidesPerView: 6,
            },
        },
    })
}