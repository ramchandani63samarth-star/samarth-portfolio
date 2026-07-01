/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [
    "Frontend Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Java Programmer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing");

function typingEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;
        }

    }

    setTimeout(typingEffect, deleting ? 60 : 100);
}

typingEffect();


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(8,17,31,.85)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
"section,.project-card,.skill-card,.achievement-card,.contact-card,.timeline-content"
);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();


/* ==========================================
   ACTIVE NAVBAR LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   PROGRESS BAR ANIMATION
========================================== */

const progressBars =
document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.animation =
            "grow 2s forwards";

        }

    });

});

progressBars.forEach(bar => {

    observer.observe(bar);

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#3B82F6";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"🚀 Welcome to Samarth Ramchandani's Portfolio"
);