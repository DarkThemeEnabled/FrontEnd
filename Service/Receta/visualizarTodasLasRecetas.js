import { GetRecetasByFilter } from "./GetRecetaByFilter.js";
import { renderizarVistaPreviaReceta } from "./RenderizarVistaPrevia.js";

async function visualizarTodasLasRecetas(tituloIngrediente, dificultad, categoria) {
    try {
        console.log("Se ejecuta visualizarTodasLasRecetas");
        console.log("string: " + tituloIngrediente + " dificultad: " + dificultad + " categoria: " + categoria);
        // Llamar directamente a GetRecetasByFilter para obtener todas las recetas
        const listaRecetas = await GetRecetasByFilter(tituloIngrediente, dificultad, categoria);

        // Obtener el contenedor principal
        const contenedorPrincipal = document.getElementById('contenedor-principal');

        // Limpiar el contenido anterior, si es necesario
        contenedorPrincipal.innerHTML = '';

        // Crear un contenedor para las recetas
        const contenedorRecetas = document.createElement('div');
        contenedorRecetas.classList.add('contenedor-filas-recetas');

        // Iterar sobre la lista de recetas
        listaRecetas.forEach((receta) => {
            // Renderizar la vista previa de la receta
            const recetaElemento = renderizarVistaPreviaReceta(receta);

            // Agregar el contenedor de la receta al contenedor principal
            contenedorRecetas.appendChild(recetaElemento);

            recetaElemento.addEventListener('click', () => {
                const recetaId = recetaElemento.dataset.recetaId;
                // Redirige a la página deseada con el ID de la receta como parámetro
                window.location.href = "../../Pages/PostReceta/PostDeReceta.html";
            });
        });

        // Agregar el contenedor de recetas al contenedor principal
        contenedorPrincipal.appendChild(contenedorRecetas);
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

export {visualizarTodasLasRecetas};