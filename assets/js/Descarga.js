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
var whatsappButtons = document.querySelectorAll(".Ws-button1, .Ws-button10, Ws-button8, .Ws-buttonKA");

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