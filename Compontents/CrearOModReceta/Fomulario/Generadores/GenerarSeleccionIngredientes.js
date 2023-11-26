import GenerarListaIngredientes from "../Renders/IngredientesListaRender.js";
import GetIngredienteByNameApi from "../../../../Service/Ingrediente/GetIngredienteByNameApi.js"

async function CargarListaIngredientes(id,nombre) {
    let limite=0;
    const seccionContenedora = document.getElementById(id);
    if (nombre !== null)
    {
        let ingredientes = await GetIngredienteByNameApi.Get(nombre);
        seccionContenedora.innerHTML = '';
        if (ingredientes === null) {
            const mensajeNoEncontrado = document.createElement('li');
            mensajeNoEncontrado.textContent = 'NINGÚN INGREDIENTE COINCIDE CON TU BÚSQUEDA :(';
            return seccionContenedora.appendChild(mensajeNoEncontrado);
        } else {
            for (const ingrediente of ingredientes) {
                    if (limite <= 10)
                    {
                        limite = limite + 1;
                        seccionContenedora.appendChild(GenerarListaIngredientes(ingrediente));
                    }
                    
                }
            }
    }
    
}

const listaIngredientes = {
    Get: CargarListaIngredientes
};

export default listaIngredientes;