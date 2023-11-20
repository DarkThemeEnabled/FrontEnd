import { GetRecetasByFilter } from "./GetRecetaByFilter.js";
import { renderizarVistaPreviaReceta } from "./RenderizarVistaPrevia.js";

async function visualizarTodasLasRecetas(tituloIngrediente, dificultad, categoria) {
    try {
        // Llamar directamente a GetRecetasByFilter para obtener todas las recetas
        const listaRecetas = await GetRecetasByFilter(tituloIngrediente, dificultad, categoria);

        // Obtener el contenedor principal
        const contenedorPrincipal = document.getElementById('contenedor-principal');

        // Limpiar el contenido anterior, si es necesario
        contenedorPrincipal.innerHTML = '';

        // Crear un contenedor para las filas de recetas
        const contenedorFilasRecetas = document.createElement('div');
        contenedorFilasRecetas.classList.add('contenedor-filas-recetas');

        // Iterar sobre la lista de recetas
        listaRecetas.forEach((receta, indice) => {
            // Crear una nueva fila por cada tres recetas o al comienzo
            if (indice % 3 === 0) {
                const filaRecetas = document.createElement('div');
                filaRecetas.classList.add('fila-recetas');
                contenedorFilasRecetas.appendChild(filaRecetas);
            }

            // Obtener la fila actual
            const filaActual = contenedorFilasRecetas.lastChild;

            // Agregar el contenedor de la receta a la fila
            filaActual.appendChild(renderizarVistaPreviaReceta(receta));
        });

        // Agregar el contenedor de filas al contenedor principal
        contenedorPrincipal.appendChild(contenedorFilasRecetas);
    } catch (error) {
        console.error('Error al obtener o visualizar las recetas:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    // Obtener el parámetro de búsqueda del URL
    const params = new URLSearchParams(window.location.search);
    const textoBusqueda = params.get('texto');
    // Llamar a la función para obtener y visualizar las recetas con el texto de búsqueda
    await visualizarTodasLasRecetas(textoBusqueda, 0, 0);
});