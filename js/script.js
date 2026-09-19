function buscarCiudad() {

    const ciudad = document.getElementById("ciudad").value;
    const nombreCiudad = document.getElementById("nombreCiudad");

    if (ciudad.trim() === "") {

        alert("Por favor, escribe una ciudad.");

        return;
    }

    nombreCiudad.textContent = ciudad;

}
