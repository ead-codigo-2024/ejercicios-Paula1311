document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const comments = document.getElementById("comments").value;

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h3>Datos Ingresados:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Edad:</strong> ${age}</p>
        <p><strong>Género:</strong> ${gender}</p>
        <p><strong>Comentarios:</strong> ${comments}</p>
    `;
});
