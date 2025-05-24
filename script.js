

const menu = document.getElementById("nav-menu");
const toggle = document.querySelector(".menu-toggle");

function toggleMenu() {
    menu.classList.toggle("menu-open");
    toggle.textContent = menu.classList.contains("menu-open") ? "✖" : "☰";
}

document.addEventListener('click', (event) => {
    if (
        menu.classList.contains("menu-open") &&
        !menu.contains(event.target) &&
        !toggle.contains(event.target)
    ) {
        menu.classList.remove("menu-open");
        toggle.textContent = "☰";
    }
});

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        if (menu.classList.contains("menu-open")) {
            menu.classList.remove("menu-open");
            toggle.textContent = "☰";
        }
    });
});

const words = ["Python", "HTML", "C/C++"];
let i = 0, j = 0, isDeleting = false;

function type() {
    const current = words[i];
    const el = document.getElementById("typed-text");

    if (isDeleting) {
        el.textContent = current.substring(0, j--);
    } else {
        el.textContent = current.substring(0, j++);
    }

    if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 150);
}

document.addEventListener("DOMContentLoaded", () => {
    type();

    const video = document.getElementById("bg-video");
    const playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise.catch((error) => {
            console.warn("Autoplay was prevented. Video is paused.", error);
            video.pause();
        });
    }
});
