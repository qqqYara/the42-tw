let app = {

    init: function() {
        app.hideHeader();
        app.sliders();
        app.lazyload();
    }, // init END

    inner: function (){
        app.hideHeader();
        app.lazyload();
        app.sliders();
    },

    hideHeader: function () {

    }, // hideHeader END

    sliders: function() {

        var $servicesSlider = $('#home-services-slider .swiper-container');
        if (!$servicesSlider) {} else {

            var servicesSliderCarousel = new Swiper('#home-services-slider .swiper-container', {
                // Default parameters
                slidesPerView: 1,
                loop: true,
                spaceBetween: 0,
                breakpoints: {
                    // when window width is >= 992
                    0:{
                        slidesPerView: 1
                    },
                    540:{
                        slidesPerView: 2
                    },
                    1024:{
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4,
                        allowTouchMove: false
                    },
                },
                navigation: {
                    nextEl: '#home-services-slider-next',
                    prevEl: '#home-services-slider-prev',
                },
                pagination: {
                    el: '#home-services-slider-pagination',
                    clickable: true,
                    type: 'bullets',
                },
            });
        }

    }, // sliders END

    lazyload: function() {
        var bLazy = new Blazy({
            offset: 100, // Loads images 100px before they're visible

            success: function(element){
                setTimeout(function(){
                    // We want to remove the loader gif now.
                    // First we find the parent container
                    // then we remove the "loading" class which holds the loader image
                    var parent = element.parentNode;
                    parent.className = parent.className.replace(/\bloading\b/,'');
                }, 200);
            }
        });

    }, // lazyload END
}


// hide header

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
        $('.site-header').css({'backgroundColor' : '#FAB298'});
    }
    else{
        $('.site-header').css({'backgroundColor' : 'transparent'});
    }
});

// hide header END

// $(document).ready(function () {
//     $("a").click(function () {
//         elementClick = $(this).attr("href");
//         destination = $(elementClick).offset().top;
//         $("body,html").animate({ scrollTop: destination - 50}, 1000);
//     });
// });


const expertiseSwiper = document.getElementsByClassName('expertise-slider');

if (expertiseSwiper){
    const mySwiper = new Swiper('.expertise-slider', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 7000,
        },
        navigation: {
            nextEl: '#expertise-next',
            prevEl: '#expertise-prev',
        },
    })
}
new WOW().init();