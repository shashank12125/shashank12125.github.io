const text = 
"Aspiring Java Developer | MCA Student | Passionate about building scalable software and solving real-world problems";
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
