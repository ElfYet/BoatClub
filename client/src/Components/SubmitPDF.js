// Need to optimze for boat-club02-app specifics
import React from 'react';

function SubmitPDF() {
    var fileInput = document.getElementById('pdfFile');
    var file = fileInput.files[0];
}


    if (file) {
        var formData = new FormData();
        FormData.append('pdfFile', file);
        

        // Using fetch API for sending data to the server
        fetch('/submit-registration', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle the response from the server
        })
        .catch(error => {
            console.error("Error: ", error);
        });
    } else {
        alert('Please select a PDF file.');
    
    }

export default SubmitPDF;