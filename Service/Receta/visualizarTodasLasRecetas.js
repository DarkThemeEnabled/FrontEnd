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
                console.log(recetaId)
                // Redirige a la página deseada con el ID de la receta como parámetro
                window.location.href = `../../Pages/PostReceta/PostDeReceta.html?id$=${recetaId}`;
            });
        });

        // Agregar el contenedor de recetas al contenedor principal
        contenedorPrincipal.appendChild(contenedorRecetas);
    } catch (error) {
        console.error('Error al obtener o visualizar las recetas:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    // Obtén los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    
    // Obtén el texto de búsqueda, o utiliza un valor predeterminado si no se proporciona
    const textoBusqueda = urlParams.get('texto') || 'defaultTexto';
    
    // Obtén los dos números, o utiliza valores predeterminados si no se proporcionan
    const numero1 = parseInt(urlParams.get('numero1')) || 0;
    const numero2 = parseInt(urlParams.get('numero2')) || 0;

    // Lógica basada en los parámetros
    console.log("Texto de búsqueda:", textoBusqueda);
    console.log("Número 1:", numero1);
    console.log("Número 2:", numero2);

    // Llama a la función para obtener y visualizar las recetas con los parámetros
    await visualizarTodasLasRecetas(textoBusqueda, numero1, numero2);
});

export {visualizarTodasLasRecetas};