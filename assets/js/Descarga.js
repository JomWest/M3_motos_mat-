'use strict';



/**
 * navbar toggle
 */



document.getElementById("descargarPdf").addEventListener("click", function() {
    var url = "https://drive.google.com/file/d/1wKsJ_g238VR9tYvJzqt9rO753KDb9UoU/view?usp=sharing";
    var link = document.createElement("a");
    link.href = url;
    link.download = "requisitos_fidem.pdf";
    link.click();
});
document.getElementById("whatsappButton").addEventListener("click", function() {
    var phoneNumber = "50588282726";
    var message = "¡Hola! Estoy interesado en información financiera. ¿Puedes ayudarme?";
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
});

var whatsappButtons = document.querySelectorAll(".Ws-button");

whatsappButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var modelo = document.querySelector(".Modelo").textContent;
        var phoneNumber = "50585482224";
        var message = "Hola, estoy interesado en el modelo " + modelo + ". ";
        message += "¿Podrías proporcionarme más información sobre el precio?\n";

        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");
    });
});

var whatsappButtons = document.querySelectorAll(".Ws-buttonEspeciasl");

whatsappButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var phoneNumber = "50585482224";
        var message = "Hola, estoy interesado en conocer mas sobre su tienda. ";
        message += "¿Podrías proporcionarme más información?\n";

        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");
    });
});


var whatsappButtons = document.querySelectorAll(".Ws-button");

whatsappButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var modelo = document.querySelector(".Modelo1").textContent;
        var phoneNumber = "50585482224";
        var message = "Hola, estoy interesado en el modelo " + modelo + ". ";
        message += "¿Podrías proporcionarme más información sobre el precio?\n";

        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");
    });
});
var whatsappButtons = document.querySelectorAll(".Ws-button1, .Ws-button10, Ws-button8, .Ws-buttonKA, .Ws-buttonRKS");

whatsappButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var modelo = document.querySelector(".Modelo").textContent;
        var phoneNumber = "50585482224";
        var message = "Hola, estoy interesado en el modelo " + modelo + ". ";
        message += "¿Podrías proporcionarme más información sobre el precio?\n";

        var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");
    });
});


let lastScrollTop = 0;
const navbar = document.querySelector("[data-navbar]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");
const navbarHeight = navbar.offsetHeight;
const screenHeight = window.innerHeight;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > screenHeight / 2) {
        // Scrolling down
        navbar.style.top = `-${navbarHeight}px`;
    } else {
        // Scrolling up
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

menuToggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
    if (!navbar.classList.contains("active")) {
        navbar.style.top = "0";
    }
});

const navbarLinks = document.querySelectorAll("[data-nav-link]");
for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
        menuToggleBtn.classList.remove("active");
        navbar.style.top = "0";
    });
}

