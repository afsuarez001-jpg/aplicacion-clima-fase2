const climaCiudades = {
    "ciudad de mexico": {
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
    },

    "tijuana": {
        nombre: "Tijuana",
        temperatura: "21 °C",
        descripcion: "Parcialmente nublado",
        icono: "🌤️",
        humedad: "55%",
        viento: "14 km/h"
    },

    "merida": {
        nombre: "Mérida",
        temperatura: "32 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "65%",
        viento: "11 km/h"
    },

    "oaxaca": {
        nombre: "Oaxaca",
        temperatura: "25 °C",
        descripcion: "Parcialmente nublado",
        icono: "🌤️",
        humedad: "48%",
        viento: "8 km/h"
    },

    "acapulco": {
        nombre: "Acapulco",
        temperatura: "30 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "72%",
        viento: "16 km/h"
    },

    "veracruz": {
        nombre: "Veracruz",
        temperatura: "28 °C",
        descripcion: "Nublado",
        icono: "☁️",
        humedad: "75%",
        viento: "17 km/h"
    },

    "toluca": {
        nombre: "Toluca",
        temperatura: "18 °C",
        descripcion: "Nublado",
        icono: "☁️",
        humedad: "55%",
        viento: "7 km/h"
    },

    "queretaro": {
        nombre: "Querétaro",
        temperatura: "23 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "42%",
        viento: "13 km/h"
    },

    "morelia": {
        nombre: "Morelia",
        temperatura: "21 °C",
        descripcion: "Parcialmente nublado",
        icono: "🌤️",
        humedad: "50%",
        viento: "9 km/h"
    },

    "cuernavaca": {
        nombre: "Cuernavaca",
        temperatura: "26 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "45%",
        viento: "8 km/h"
    },

    "leon": {
        nombre: "León",
        temperatura: "24 °C",
        descripcion: "Parcialmente nublado",
        icono: "🌤️",
        humedad: "38%",
        viento: "12 km/h"
    },

    "chihuahua": {
        nombre: "Chihuahua",
        temperatura: "20 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "30%",
        viento: "19 km/h"
    },

    "hermosillo": {
        nombre: "Hermosillo",
        temperatura: "34 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "25%",
        viento: "14 km/h"
    },

    "mazatlan": {
        nombre: "Mazatlán",
        temperatura: "29 °C",
        descripcion: "Parcialmente nublado",
        icono: "🌤️",
        humedad: "68%",
        viento: "15 km/h"
    },

    "san luis potosi": {
        nombre: "San Luis Potosí",
        temperatura: "23 °C",
        descripcion: "Soleado",
        icono: "☀️",
        humedad: "35%",
        viento: "11 km/h"
    },

    "aguascalientes": {
        nombre: "Aguascalientes",
        temperatura: "22 °C",
        descripcion: "Nublado",
        icono: "☁️",
        humedad: "40%",
        viento: "10 km/h"
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
        alert("No tenemos información para esa ciudad. Prueba con una de las 20 ciudades disponibles.");
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
