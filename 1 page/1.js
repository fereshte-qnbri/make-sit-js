// تغییر متن به صورت خودکار (تایپ افکت)
const texts = ["Frontend Developer", "Web Designer", "JavaScript Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function typeEffect() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".hero h2").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(typeEffect, 2000); // مکث قبل از تغییر متن
    } else {
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);



// document.querySelectorAll("nav ul li a").forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute("href").substring(1);
//         const targetSection = document.getElementById(targetId);
        
//         window.scrollTo({
//             top: targetSection.offsetTop ,
//             behavior: "smooth"
//         });
//     });
// });
