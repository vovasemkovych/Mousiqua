'use strict';

// Menu toggle functionality
function menuOnClick() {
    document.querySelector("#menu-bar").classList.toggle("change");
    document.querySelector("#nav").classList.toggle("change");
    document.querySelector("#menu-bg").classList.toggle("change-bg");
}

// Add event listener for menu bar
document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.querySelector('#menu-bar');
    if (menuBar) {
        menuBar.addEventListener('click', menuOnClick);
    }
});

// Initialize smooth scrolling (if available)
if (typeof scrollToSmooth !== 'undefined') {
    let smoothScroll = new scrollToSmooth('a', {
        targetAttribute: 'href',
        duration: 400,
        easing: 'easeOutCubic',
        fixedHeader: null
    });
    smoothScroll.init();
}

// MAIN INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow FIRST
    initializeSlideshow();
    
    // Other initializations
    setupSearchFunctionality();
    setupTourControls();
    setupPlayButton();
    setupTicketButtons();
    setupHeaderScrollEffect();
    initializeCountdownTimer();
    
    // Set up Spotify iframe
    setTimeout(() => {
        const spotifyIframe = document.querySelector('#spotify');
        if (spotifyIframe) {
            spotifyIframe.src = 'https://open.spotify.com/embed/album/2ITVvrNiINKRiW7wA3w6w6?utm_source=generator';
        }
    }, 500);
});

// FIXED SLIDESHOW FUNCTIONALITY
function initializeSlideshow() {
    console.log('Initializing slideshow...');
    
    const slides = document.querySelectorAll('.start_slide');
    const dots = document.querySelectorAll('.togglers__point');
    let currentSlide = 0;

    console.log('Found slides:', slides.length);
    console.log('Found dots:', dots.length);

    if (slides.length === 0 || dots.length === 0) {
        console.error('Slideshow elements not found!');
        return;
    }

    // Function to show specific slide
    function showSlide(index) {
        console.log('Showing slide:', index);
        
        // Remove active class from all slides and dots
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            console.log(`Slide ${i} active removed`);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            console.log(`Dot ${i} active removed`);
        });
        
        // Add active class to current slide and dot
        if (slides[index]) {
            slides[index].classList.add('active');
            console.log(`Slide ${index} activated`);
        }
        if (dots[index]) {
            dots[index].classList.add('active');
            console.log(`Dot ${index} activated`);
        }
    }

    // Initialize first slide immediately
    showSlide(0);

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Dot clicked:', index);
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides every 6 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 6000);
    
    console.log('Slideshow initialized successfully');
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
    const playButton = document.querySelector(".fas.fa-play");
    if (playButton) {
        playButton.addEventListener('click', () => {
            window.open("https://www.youtube.com/watch?v=OS8taasZl8k&ab_channel=RedHotChiliPeppers", '_blank');
        });
    }
    
    // Also check for container with play button
    const containerPlay = document.querySelector(".container");
    if (containerPlay) {
        containerPlay.addEventListener('click', () => {
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
            if (scrollY > 100) {
                header.style.backgroundColor = 'rgba(19, 24, 29, 1)';
            } else {
                header.style.backgroundColor = 'rgba(19, 24, 29, 0.5)';
            }
        }
    });
}

// Countdown timer functionality
function initializeCountdownTimer() {
    // Updated countdown date to future date
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
        
        if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
        if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
        if (minsElement) minsElement.textContent = String(minutes).padStart(2, '0');
        if (secsElement) secsElement.textContent = String(seconds).padStart(2, '0');
        
        if (timeLeft < 0) {
            clearInterval(timer);
            if (daysElement) daysElement.textContent = "00";
            if (hoursElement) hoursElement.textContent = "00";
            if (minsElement) minsElement.textContent = "00";
            if (secsElement) secsElement.textContent = "00";
            if (endElement) endElement.textContent = "TOUR HAS STARTED!";
        }
    }, 1000);
}

// Initialize scroll animations (if ScrollReveal is available)
if (typeof ScrollReveal !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
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
    });
}

// jQuery compatibility (if jQuery is loaded)
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

// Error handling and debugging
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// Debug function to check slideshow elements
function debugSlideshow() {
    console.log('=== SLIDESHOW DEBUG ===');
    console.log('Slides found:', document.querySelectorAll('.start_slide').length);
    console.log('Dots found:', document.querySelectorAll('.togglers__point').length);
    
    document.querySelectorAll('.start_slide').forEach((slide, i) => {
        console.log(`Slide ${i}:`, slide.classList.contains('active') ? 'ACTIVE' : 'inactive');
    });
    
    document.querySelectorAll('.togglers__point').forEach((dot, i) => {
        console.log(`Dot ${i}:`, dot.classList.contains('active') ? 'ACTIVE' : 'inactive');
    });
}

// Call debug function after 2 seconds (for testing)
setTimeout(debugSlideshow, 2000);
