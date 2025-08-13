'use strict';

// Menu toggle functionality
function menuOnClick() {
    document.querySelector("#menu-bar").classList.toggle("change");
    document.querySelector("#nav").classList.toggle("change");
    document.querySelector("#menu-bg").classList.toggle("change-bg");
}

// Initialize smooth scrolling (assuming you have the scrolltosmooth library)
if (typeof scrollToSmooth !== 'undefined') {
    let smoothScroll = new scrollToSmooth('a', {
        targetAttribute: 'href',
        duration: 400,
        easing: 'easeOutCubic',
        fixedHeader: null
    });
    smoothScroll.init();
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    initializeSlideshow();
    
    // Set up Spotify iframe
    const spotifyIframe = document.querySelector('#spotify');
    if (spotifyIframe) {
        spotifyIframe.src = 'https://open.spotify.com/embed/album/2ITVvrNiINKRiW7wA3w6w6?utm_source=generator';
    }
    
    // Set up search functionality
    setupSearchFunctionality();
    
    // Set up tour controls
    setupTourControls();
    
    // Set up play button functionality
    setupPlayButton();
    
    // Set up ticket button functionality
    setupTicketButtons();
    
    // Set up header scroll effect
    setupHeaderScrollEffect();
    
    // Initialize countdown timer
    initializeCountdownTimer();
    
    // Initialize scroll animations (if ScrollReveal is available)
    if (typeof ScrollReveal !== 'undefined') {
        initializeScrollAnimations();
    }
});

// Slideshow functionality
function initializeSlideshow() {
    const slides = document.querySelectorAll('.start_slide');
    const dots = document.querySelectorAll('.togglers__point');
    let currentSlide = 0;

    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        if (slides[index]) slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
    }

    // Initialize first slide
    showSlide(0);

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

// Search functionality
function setupSearchFunctionality() {
    const searchButton = document.querySelector('.search');
    const searchMenu = document.querySelector('.smenu');
    const searchClose = document.querySelector('.smenu__close');

    if (searchButton && searchMenu) {
        searchButton.addEventListener('click', () => {
            searchMenu.classList.add('active_flex');
        });
    }

    if (searchClose && searchMenu) {
        searchClose.addEventListener('click', () => {
            searchMenu.classList.remove('active_flex');
        });
    }
}

// Tour controls functionality
function setupTourControls() {
    const americaButton = document.querySelector('.usa');
    const europeButton = document.querySelector('.eur');
    const americaTours = document.querySelector('.america');
    const europeTours = document.querySelector('.europe');

    // Initially hide Europe tours
    if (europeTours) {
        europeTours.style.display = 'none';
    }

    if (americaButton && americaTours && europeTours) {
        americaButton.addEventListener('click', () => {
            americaTours.style.display = 'block';
            europeTours.style.display = 'none';
        });
    }

    if (europeButton && americaTours && europeTours) {
        europeButton.addEventListener('click', () => {
            europeTours.style.display = 'block';
            americaTours.style.display = 'none';
        });
    }
}

// Play button functionality
function setupPlayButton() {
    const playButton = document.querySelector(".fas");
    if (playButton) {
        playButton.addEventListener('click', () => {
            window.open("https://www.youtube.com/watch?v=OS8taasZl8k&ab_channel=RedHotChiliPeppers", '_blank');
        });
    }
}

// Ticket buttons functionality
function setupTicketButtons() {
    const ticketButtons = document.querySelectorAll(".tickets");
    ticketButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.open("https://www.ticketmaster.com/event/1E005B3E463F5483", '_blank');
        });
    });
}

// Header scroll effect
function setupHeaderScrollEffect() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const scrollY = window.scrollY;
        
        if (header) {
            if (scrollY > 700) {
                header.style.backgroundColor = 'rgba(19, 24, 29, 1)';
            } else {
                header.style.backgroundColor = 'rgba(19, 24, 29, 0.5)';
            }
        }
    });
}

// Countdown timer functionality
function initializeCountdownTimer() {
    // Set countdown date to July 14, 2025 (updated from 2022)
    const countDownDate = new Date("Jul 14, 2025 16:00:00").getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = countDownDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        const daysElement = document.querySelector(".days");
        const hoursElement = document.querySelector(".hours");
        const minsElement = document.querySelector(".mins");
        const secsElement = document.querySelector(".secs");
        const endElement = document.querySelector(".end");
        
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minsElement) minsElement.textContent = minutes.toString().padStart(2, '0');
        if (secsElement) secsElement.textContent = seconds.toString().padStart(2, '0');
        
        if (timeLeft < 0) {
            clearInterval(timer);
            if (daysElement) daysElement.textContent = "";
            if (hoursElement) hoursElement.textContent = "";
            if (minsElement) minsElement.textContent = "";
            if (secsElement) secsElement.textContent = "";
            if (endElement) endElement.textContent = "TOUR HAS STARTED!";
        }
    }, 1000);
}

// Scroll animations using ScrollReveal
function initializeScrollAnimations() {
    const revealOptions = { 
        duration: 1000, 
        delay: 600, 
        distance: '50px',
        easing: 'ease-in-out'
    };

    ScrollReveal().reveal('.ts', { ...revealOptions, origin: 'right' });
    ScrollReveal().reveal('.disk', { ...revealOptions, origin: 'left' });
    ScrollReveal().reveal('.time', { ...revealOptions, origin: 'right' });
    ScrollReveal().reveal('.band', { ...revealOptions, origin: 'left' });
    ScrollReveal().reveal('.tours', { ...revealOptions, origin: 'right' });
    ScrollReveal().reveal('.contacts', { ...revealOptions, origin: 'left' });
}

// jQuery compatibility functions (if jQuery is loaded)
if (typeof $ !== 'undefined') {
    $(document).ready(function() {
        // Set Spotify iframe source
        $('#spotify').attr('src', 'https://open.spotify.com/embed/album/2ITVvrNiINKRiW7wA3w6w6?utm_source=generator');
        
        // Europe tours initially hidden
        $('.europe').fadeOut();
        
        // Tour button functionality with jQuery
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
        
        // Search functionality with jQuery
        $('.search').click(() => {
            $('.smenu').addClass('active_flex');
        });
        
        $('.smenu__close').click(() => {
            $('.smenu').removeClass('active_flex');
        });
    });
}

// Menu bar click handler (backup)
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'menu-bar') {
        menuOnClick();
    }
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const debouncedScrollHandler = debounce(() => {
    setupHeaderScrollEffect();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Error handling for missing elements
function safelyExecute(func, errorMessage) {
    try {
        func();
    } catch (error) {
        console.warn(errorMessage, error);
    }
}

// Preload critical images
function preloadImages() {
    const imagesToPreload = [
        'img/start_back.webp',
        'img/start_back1.webp',
        'img/tour_back.webp',
        'img/4.webp',
        'img/vinyl.png'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
preloadImages();
