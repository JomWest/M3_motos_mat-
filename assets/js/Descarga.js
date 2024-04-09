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