// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Simular la validación del documento
    const validationResult = document.getElementById("validation-result");
    const downloadButton = document.getElementById("download-button");
    const checkContainer = document.getElementById("check-container");
    const message = document.querySelector(".message");

    // Simular una verificación de validación
    const isValid = true;  // Este sería el resultado de tu lógica de validación

    if (isValid) {
        validationResult.innerHTML = '<div class="file-icon"><div class="file-header"></div><div class="file-body"></div></div><div class="check-icon"><svg width="24" height="24" viewBox="0 0 24 24"><path fill="#28a745" d="M20.292 5.292l-11 11c-.391.391-1.023.391-1.414 0l-5-5c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l4.293 4.293 10.293-10.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414z"/></svg></div>';
        message.textContent = "El documento que está verificando cuenta con una firma válida.";
        downloadButton.style.display = "inline-block";
        downloadButton.addEventListener("click", function() {
            // Simular la descarga del documento
            alert("Descargando documento...");
        });
    } else {
        validationResult.textContent = "El documento que está verificando es inválido.";
        validationResult.style.color = "red";
        message.textContent = "";
    }
});
