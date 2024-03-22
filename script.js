function consultarEstatus() {
            // Por ahora, solo mostramos un mensaje de ejemplo
            var numeroUsuario = document.getElementById("numeroUsuario").value;
            var statusResultado = document.getElementById("statusResultado");
            statusResultado.innerHTML = "El estatus de su producto para el usuario " + numeroUsuario + " es: Pendiente de consulta.";
        }

        // Datos de ejemplo para las reseñas
        var reseñasData = [
            { nombre: "Usuario 1", comentario: "¡Excelente servicio, estoy muy satisfecho!" },
            { nombre: "Usuario 2", comentario: "El producto llegó en buen estado, pero el envío fue un poco lento." },
            { nombre: "Usuario 3", comentario: "Me encantó el producto, definitivamente lo recomendaré." }
        ];

        // Función para mostrar las reseñas
        function mostrarReseñas() {
            var reseñasContainer = document.getElementById("reseñas");
            reseñasData.forEach(function(reseña) {
                var reviewDiv = document.createElement("div");
                reviewDiv.classList.add("review");
                reviewDiv.innerHTML = "<strong>" + reseña.nombre + ":</strong> " + reseña.comentario;
                reseñasContainer.appendChild(reviewDiv);
            });
        }

        // Llamamos a la función para mostrar las reseñas al cargar la página
        mostrarReseñas();// Clear existing reviews
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
