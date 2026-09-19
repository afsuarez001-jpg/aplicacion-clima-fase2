const climaCiudades = {
    "ciudad de mexico": {
        nombre: "Ciudad de México",
        temperatura: "24 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "45%",
        viento: "12 km/h"
    },

    "mexico": {
        nombre: "Ciudad de México",
        temperatura: "24 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "45%",
        viento: "12 km/h"
    },

    "guadalajara": {
        nombre: "Guadalajara",
        temperatura: "27 °C",
        descripcion: "Parcialmente nublado",
        icono: "🌤️",
        humedad: "40%",
        viento: "10 km/h"
    },

    "monterrey": {
        nombre: "Monterrey",
        temperatura: "31 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "35%",
        viento: "15 km/h"
    },

    "cancun": {
        nombre: "Cancún",
        temperatura: "29 °C",
        descripcion: "Nublado",
        icono: "☁️",
        humedad: "70%",
        viento: "18 km/h"
    },

    "puebla": {
        nombre: "Puebla",
        temperatura: "22 °C",
        descripcion: "Nublado",
        icono: "☁️",
        humedad: "50%",
        viento: "9 km/h"
    }
};


function buscarCiudad() {

    const entrada = document.getElementById("ciudad").value
        .trim()
        .toLowerCase();

    if (entrada === "") {
        alert("Por favor, escribe una ciudad.");
        return;
    }

    const clima = climaCiudades[entrada];

    if (!clima) {
        alert("No tenemos información para esa ciudad. Prueba con Ciudad de México, Guadalajara, Monterrey, Cancún o Puebla.");
        return;
    }

    document.getElementById("nombreCiudad").textContent = clima.nombre;
    document.getElementById("temperatura").textContent = clima.temperatura;
    document.getElementById("descripcion").textContent = clima.descripcion;

    document.querySelector(".clima-icono").textContent = clima.icono;

    const datos = document.querySelectorAll(".clima-card .row p");

    datos[0].innerHTML = `<strong>Humedad</strong><br>${clima.humedad}`;
    datos[1].innerHTML = `<strong>Viento</strong><br>${clima.viento}`;
}
