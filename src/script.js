const text = 
"I build backend applications using Java, Spring Boot, and MySQL. Passionate about problem solving and building practical software systems";
let index = 0;
function typeEffect(){
    if(index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;

        setTimeout(typeEffect, 80);
    }
} 

typeEffect();

const cards = document.querySelectorAll(".card");
cards.forEach(card => card.classList.add("show"));

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if(cardTop < triggerPoint){
            card.classList.add("show");
        }

    });

});

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

