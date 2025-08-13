// ===================== SLIDES =====================
const slides = document.querySelectorAll(".start_slide");
const points = document.querySelectorAll(".togglers__point");

let currentSlide = 0;

// Show slide by index
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    points.forEach(point => point.classList.remove("active"));

    slides[index].classList.add("active");
    points[index].classList.add("active");
}

points.forEach((point, idx) => {
    point.addEventListener("click", () => {
        currentSlide = idx;
        showSlide(currentSlide);
    });
});

// Auto slide every 5s
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

// Initialize first slide
showSlide(currentSlide);

// ===================== MENU =====================
const menuBar = document.getElementById("menu-bar");
const nav = document.getElementById("nav");
const menuBg = document.getElementById("menu-bg");

function menuOnClick() {
    nav.classList.toggle("active_flex");
    menuBg.classList.toggle("active_flex");

    // Animate hamburger bars
    menuBar.classList.toggle("change");
}

// Close menu when background clicked
menuBg.addEventListener("click", () => {
    nav.classList.remove("active_flex");
    menuBg.classList.remove("active_flex");
    menuBar.classList.remove("change");
});

// ===================== SEARCH =====================
const searchBtn = document.querySelector(".search");
const smenu = document.querySelector(".smenu");
const smenuClose = document.querySelector(".smenu__close");

searchBtn.addEventListener("click", () => {
    smenu.classList.add("active_flex");
});

smenuClose.addEventListener("click", () => {
    smenu.classList.remove("active_flex");
});

// ===================== PLAY BUTTON =====================
const playContainer = document.querySelector(".container");
const playBtn = playContainer.querySelector(".fas");
playContainer.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=OS8taasZl8k&ab_channel=RedHotChiliPeppers", "_blank");
});

// ===================== COUNTDOWN TIMER =====================
const endDate = new Date("July 23, 2025 00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
        document.querySelector(".days").textContent = "0";
        document.querySelector(".hours").textContent = "0";
        document.querySelector(".mins").textContent = "0";
        document.querySelector(".secs").textContent = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((distance / (1000 * 60)) % 60);
    const secs = Math.floor((distance / 1000) % 60);

    document.querySelector(".days").textContent = days;
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".mins").textContent = mins;
    document.querySelector(".secs").textContent = secs;
}

setInterval(updateTimer, 1000);
updateTimer();

// ===================== TOURS BUTTON =====================
const usaBtn = document.querySelector(".usa");
const eurBtn = document.querySelector(".eur");
const america = document.querySelector(".america");
const europe = document.querySelector(".europe");

usaBtn.addEventListener("click", () => {
    america.style.display = "flex";
    europe.style.display = "none";
});

eurBtn.addEventListener("click", () => {
    america.style.display = "none";
    europe.style.display = "flex";
});

// ===================== SPOTIFY IFRAME =====================
const spotifyIframe = document.getElementById("spotify");
spotifyIframe.src = "https://open.spotify.com/embed/album/2ITVvrNiINKRiW7wA3w6w6?utm_source=generator";
