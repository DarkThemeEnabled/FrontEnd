function redirigirConParametros(textoBusqueda, numero1, numero2) {
    window.location.href = `Pages/PaginaBusqueda/BusquedaPers.html?texto=${textoBusqueda}&numero1=${numero1}&numero2=${numero2}`;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado");


// Evento de la barra de búsqueda
document.getElementById("botonBuscar").addEventListener("click", () => {
    // Obtén el valor del campo de búsqueda
    const textoBusqueda = document.getElementById("campoBusqueda").value;

    // Redirige a BusquedaPers.html con el texto de búsqueda y números específicos
    redirigirConParametros(textoBusqueda, 0, 0);
});

// Evento para la categoría "Pastas"
document.getElementById("pasta-category").addEventListener("click", () => {
    // Redirige a BusquedaPers.html con el texto vacío y el número 1 para pastas
    console.log("Click en pasta-category");
    redirigirConParametros(null, 0, 1);
});

// Evento para la categoría "Ensaladas"
document.getElementById("ensalada-category").addEventListener("click", () => {
    // Redirige a BusquedaPers.html con el texto vacío y el número 3 para ensaladas
    redirigirConParametros(null, 0, 3);
});

// Evento para la categoría "Postres"
document.getElementById("postre-category").addEventListener("click", () => {
    // Redirige a BusquedaPers.html con el texto vacío y el número 8 para postres
    redirigirConParametros("", 0, 8);
});

// Evento para la categoría "Bebidas"
document.getElementById("bebida-category").addEventListener("click", () => {
    // Redirige a BusquedaPers.html con el texto vacío y el número 10 para bebidas
    redirigirConParametros("", 0, 10);
});})