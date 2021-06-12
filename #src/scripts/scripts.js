let app = {

    init: function() {
        app.menu();
        app.screen_scroll();
        app.sliders();
        app.lazyload();
    }, // init END

    inner: function (){
        app.menu();
        app.lazyload();
        app.side_scroll();
        app.sliders();
    },

    side_scroll: function (){
        $('#scroll-down').css({'display': 'none'});
        $('#scroll-up').click( function (){
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 800)
        });
    },

    menu: function() {

        $('.menu-toggle').on('click', function(e) {
            e.preventDefault();
            $('.hamburger').toggleClass('active');
            $('body').toggleClass('site-menu-open');
        });

    }, // menu END

    // screen_scroll: function() {

    //     fullpage = $('#fullpage').fullpage({
    //         licenseKey: '6D5A2159-B20143E0-8CE02F7F-AF19A3C4',
    //         //Навигация
    //         menu: '#screen-menu',
    //         lockAnchors: true,
    //         // anchors:['intro', 'Проекты', 'services', 'contacts'],
    //         navigation: false,
    //         navigationPosition: 'right',
    //         // navigationTooltips: ['', ''],
    //         showActiveTooltip: false,
    //         slidesNavigation: false,
    //         slidesNavPosition: 'bottom',

    //         //Скроллинг
    //         css3: true,
    //         scrollingSpeed: 1000,
    //         autoScrolling: true,
    //         fitToSection: true,
    //         fitToSectionDelay: 2000,
    //         scrollBar: false,
    //         easing: 'easeInOutCubic',
    //         easingcss3: 'ease',
    //         loopBottom: false,
    //         loopTop: false,
    //         loopHorizontal: true,
    //         continuousVertical: false,
    //         continuousHorizontal: true,
    //         scrollHorizontally: false,
    //         interlockedSlides: false,
    //         dragAndMove: false,
    //         offsetSections: false,
    //         resetSliders: false,
    //         fadingEffect: false,
    //         normalScrollElements: '#element1, .element2',
    //         scrollOverflow: false,

    //         scrollOverflowOptions: {
    //             scrollbars: true,
    //             mouseWheel: true,
    //             hideScrollbars: false,
    //             fadeScrollbars: true
    //         },

    //         scrollOverflowReset: false,
    //         scrollOverflowOptions: null,
    //         touchSensitivity: 15,
    //         bigSectionsDestination: null,

    //         //Доступ
    //         keyboardScrolling: true,
    //         animateAnchor: true,
    //         recordHistory: true,

    //         //Дизайн
    //         controlArrows: true,
    //         verticalCentered: false,
    //         // sectionsColor : ['#fff', '#fff'],
    //         paddingTop: '0px',
    //         paddingBottom: '0px',
    //         // fixedElements: '#site-header, #site-footer',
    //         responsiveWidth: 0,
    //         responsiveHeight: 0,
    //         responsiveSlides: false,
    //         parallax: false,
    //         parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    //         cards: false,
    //         cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

    //         //Настроить селекторы
    //         sectionSelector: '.section',
    //         slideSelector: '.screen-slide',

    //         lazyLoading: true,

    //         //события
    //         onLeave: function(origin, destination, direction){
    //             // alert('onLeave');
    //             $('.page-index').addClass('animate-start');
    //             $('.page-index').removeClass('animate-finish');
    //             $('.section-title').addClass('hidden');
    //             $('.section-subtitle').addClass('hidden');

    //         },
    //         afterLoad: function(origin, destination, direction){
    //             // alert('afterLoad')
    //             $('.page-index').removeClass('animate-start');
    //             $('.page-index').addClass('animate-finish');
    //             $('.section-title').removeClass('hidden');
    //             $('.section-subtitle').removeClass('hidden');
    //         },
    //         afterRender: function(){
    //             // alert('afterRender')
    //         },
    //         afterResize: function(width, height){
    //             // alert('afterResize')
    //         },
    //         afterReBuild: function(){alert('afterReBuild')},
    //         afterResponsive: function(isResponsive){alert('afterResponsive')},
    //         afterSlideLoad: function(section, origin, destination, direction){alert('afterSlideLoad')},
    //         onSlideLeave: function(section, origin, destination, direction){alert('onSlideLeave')}
    //         // onLeave: function(origin, destination, direction){},
    //         // afterLoad: function(origin, destination, direction){},
    //         // afterRender: function(){},
    //         // afterResize: function(width, height){},
    //         // afterReBuild: function(){},
    //         // afterResponsive: function(isResponsive){},
    //         // afterSlideLoad: function(section, origin, destination, direction){},
    //         // onSlideLeave: function(section, origin, destination, direction){}
    //     });

    //     let isHome = document.getElementsByClassName('home')

    //     if(isHome.length > 0){
    //         $('#scroll-down').on('click', function() {

    //             $.fn.fullpage.moveSectionDown();

    //         });


    //         $('#scroll-up').on('click', function() {

    //             $.fn.fullpage.moveTo(1);

    //         });
    //     }

    // }, // screen_scroll END

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

        var $homeContactsSlider = $('#home-contacts-slider .swiper-container');
        if (!$homeContactsSlider) {} else {

            var homeContactsCarousel = new Swiper('#home-contacts-slider .swiper-container', {
                // Default parameters
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    // when window width is >= 992
                    1220: {
                        slidesPerView: 2,
                        allowTouchMove: false,
                    },
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

$(document).ready(function($) {

    const isHome = document.getElementsByClassName('home')

    if(isHome.length > 0){
        app.init();
    }else{
       app.inner();
    }

    $('.screen-preloader').remove();


    $(window).resize(function() {

        if ($(window).width() <= 1280) {
            $('html').css('height', $(window).height());
        }

    });

    var btn = $('#scroll-up');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('#scroll-up').css({'opacity': '1'});
        } else {
            $('#scroll-up').css({'opacity': '0'});
        }
    });
});


$(document).ready(function () {
    $("a").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination - 50}, 1000);
    });
});

// ANIMATION  FUNCTIONS


let servicesList = Array.from(document.querySelectorAll('.services-list'));

let makeSame = function makeSameExp (obj) {
    let maxHeight = 0; // Получение найбольшего значения

    obj.forEach (function (e) {
        e.offsetHeight > maxHeight ? maxHeight = e.offsetHeight : null;
    }); // Применение найбольшего значения всем елементам

    obj.forEach (function (e) {
        e.style.height = maxHeight + 'px';
    });
}; // Вызов функции выравнивания для елементов


servicesList ? makeSame(servicesList) : null; // Services List


let words = document.getElementsByClassName('word');
let wordArray = [];
let currentWord = 0;

if (words.length > 0){
    words[currentWord].style.opacity = 1;
    for (let i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }
}

function changeWord () {
    let cw = wordArray[currentWord];
    let nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut (cw, i) {
    setTimeout(function() {
        cw[i].className = 'letter out';
    }, i*80);
}

function animateLetterIn (nw, i) {
    setTimeout(function() {
        nw[i].className = 'letter in';
    }, 340+(i*80));
}

function splitLetters (word) {
    let content = word.innerHTML;
    word.innerHTML = '';
    let letters = [];
    for (let i = 0; i < content.length; i++) {
        let letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

if (words.length > 0){
    changeWord();
    setInterval(changeWord, 3500);
}

const techSwiper = document.getElementsByClassName('tech-swiper');

if (techSwiper){
    let mySwiper = new Swiper('.tech-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 5,
        spaceBetween: 10,
        speed: 3500,
        autoplay: {
            delay: 0,
        },
        breakpoints: {
            // when window width is >= 992
            0:{
                slidesPerView: 4,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 5,
            },
        },
    })
}

const casesSwiper = document.getElementsByClassName('cases-swiper');

if (casesSwiper){
    let mySwiper = new Swiper('.cases-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 250,
        speed: 1500,
        navigation: {
            nextEl: '#case-projects-next',
            prevEl: '#case-projects-prev',
        },
        autoplay: {
            delay: 3000,
        },
    })
}

const blogSwiper = document.getElementsByClassName('blog-swiper');

if (blogSwiper){
    let mySwiper = new Swiper('.blog-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000,
        navigation: {
            nextEl: '#blog-main-next',
            prevEl: '#blog-main-prev',
        },
        autoplay: {
            delay: 1500,
        },
    })
}

const aboutSwiper = document.getElementsByClassName('about-swiper');

if (aboutSwiper){
    let mySwiper = new Swiper('.about-swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: '#about-team-next',
            prevEl: '#about-team-prev',
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
                spaceBetween: 15,
            },
            576:{
                slidesPerView: 2,
            },
            768:{
                slidesPerView: 3,
            }
        }
    })
}

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