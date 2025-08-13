'use strict';

function menuOnClick() {
    document.querySelector("#menu-bar").classList.toggle("change");
    document.querySelector("#nav").classList.toggle("change");
    document.querySelector("#menu-bg").classList.toggle("change-bg");
}
document.querySelector('#menu-bar').addEventListener('click', menuOnClick);

let smoothScroll = new scrollToSmooth('a', {
    targetAttribute: 'href',
    duration: 400,
    easing: 'easeOutCubic',
    fixedHeader: null
});
smoothScroll.init();

$(document).ready(function () {
    $('#spotify').attr('src', 'https://open.spotify.com/embed/album/2ITVvrNiINKRiW7wA3w6w6?utm_source=generator');
    $('#menu-bar').click();
});

$('.search').click(() => {
    $('.smenu').addClass('active_flex');
});
$('.smenu__close').click(() => {
    $('.smenu').removeClass('active_flex');
});

// --- SLIDESHOW REFACTOR START ---

document.addEventListener('DOMContentLoaded', function () {
    // Preload slide backgrounds (if not already in cache)
    new Image().src = "img/start_back.webp";
    new Image().src = "img/start_back1.webp";

    const slides = [
        document.querySelector('.start_slide1'),
        document.querySelector('.start_slide2')
    ];
    const dots = [
        document.querySelector('.point1'),
        document.querySelector('.point2')
    ];

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Initial state
    showSlide(0);

    dots[0].addEventListener('click', () => showSlide(0));
    dots[1].addEventListener('click', () => showSlide(1));
});

// --- SLIDESHOW REFACTOR END ---

$(document).ready(function () {
    $('.europe').fadeOut();
});
$('.usa').click(() => {
    $('.america').fadeIn(500, () => {
        $('.europe').fadeOut(500);
    });
});
$('.eur').click(() => {
    $('.europe').fadeIn(500, () => {
        $('.america').fadeOut(500);
    });
});

document.querySelector(".fas").addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=OS8taasZl8k&ab_channel=RedHotChiliPeppers", '_blank');
});

document.querySelector(".tickets").addEventListener('click', () => {
    window.open("https://www.ticketmaster.com/event/1E005B3E463F5483", '_blank');
});

$(document).scroll(function () {
    let y = $(this).scrollTop();
    (y > 700) ? $('.header').css('background-color', 'rgba(19, 24, 29, 1)') : $('.header').css('background-color', 'rgba(19, 24, 29, 0.5)');
});

ScrollReveal().reveal('.ts', { duration: 1000 }, { delay: 600 }, { origin: 'right' });
ScrollReveal().reveal('.disk', { duration: 1000 }, { delay: 600 }, { origin: 'left' });
ScrollReveal().reveal('.time', { duration: 1000 }, { delay: 600 }, { origin: 'right' });
ScrollReveal().reveal('.band', { duration: 1000 }, { delay: 600 }, { origin: 'left' });
ScrollReveal().reveal('.tours', { duration: 1000 }, { delay: 600 }, { origin: 'right' });
ScrollReveal().reveal('.contacts', { duration: 1000 }, { delay: 600 }, { origin: 'left' });

let countDownDate = new Date("Jul 14, 2022 16:00:00").getTime();
let renew = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = `${days}`;
    document.querySelector(".hours").innerHTML = `${hours}`;
    document.querySelector(".mins").innerHTML = `${minutes}`;
    document.querySelector(".secs").innerHTML = `${seconds}`;

    if (timeleft < 0) {
        clearInterval(renew);
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("mins").innerHTML = "";
        document.getElementById("secs").innerHTML = "";
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
}, 1000);
