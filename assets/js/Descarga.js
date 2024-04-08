document.getElementById("descargarPdf").addEventListener("click", function() {
    var url = "https://drive.google.com/uc?export=download&id=1wKsJ_g238VR9tYvJzqt9rO753KDb9UoU";
    var link = document.createElement("a");
    link.href = url;
    link.download = "requisitos_fidem.pdf";
    link.click();
});