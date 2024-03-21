let reviews = [];

// Function to handle form submission for verification
document.getElementById('verification-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const clientNumber = document.getElementById('client-number').value;
    // Here you can add logic to verify the status with the client number
    // For demo, we'll just display a message
    const statusResult = document.getElementById('status-result');
    statusResult.innerHTML = `Estatus para el cliente ${clientNumber}: Pendiente de implementación.`;
});

// Function to handle form submission for review
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const review = document.getElementById('review').value;
    reviews.push(review);
    displayReviews();
    document.getElementById('review-form').reset(); // Reset form after submission
});

// Function to display reviews
function displayReviews() {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = ''; // Clear existing reviews
    reviews.forEach(function(review, index) {
        const div = document.createElement('div');
        div.classList.add('review');
        div.innerHTML = `<p><strong>Reseña ${index + 1}:</strong> ${review}</p>`;
        reviewsList.appendChild(div);
    });
}
function consultarEstado() {
    var numeroCliente = document.getElementById("numeroCliente").value;

    // Aquí debes reemplazar 'datos.xlsx' con la ruta de tu archivo Excel.
    var archivoExcel = "datos.xlsx";
    
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        var encontrado = false;
        var estado = "";

        for (var i = 0; i < xlData.length; i++) {
            if (xlData[i]["Número de Cliente"] == numeroCliente) {
                estado = xlData[i]["Estado de la Unidad"];
                encontrado = true;
                break;
            }
        }

        if (encontrado) {
            document.getElementById("resultado").innerText = "El estado de la unidad es: " + estado;
        } else {
            document.getElementById("resultado").innerText = "Número de cliente no encontrado";
        }
    };

    reader.readAsArrayBuffer(archivoExcel);
}
