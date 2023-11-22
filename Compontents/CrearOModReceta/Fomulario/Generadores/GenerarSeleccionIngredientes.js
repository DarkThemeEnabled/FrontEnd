import GenerarListaIngredientes from "../Renders/IngredientesListaRender.js";
import GetIngredienteByNameApi from "../../../../Service/Ingrediente/GetIngredienteByNameApi.js"

async function CargarListaIngredientes(id,nombre) {
    const seccionContenedora = document.getElementById(id);
    if (nombre !== null)
    {
        let ingredientes = await GetIngredienteByNameApi.Get(nombre);
        seccionContenedora.innerHTML = '';
        if (ingredientes.length === 0) {
            const mensajeNoEncontrado = document.createElement('li');
            mensajeNoEncontrado.textContent = 'NO HAY NINGÚN INGREDIENTE DISPONIBLE EN ESTE MOMENTO :(';
            return seccionContenedora.appendChild(mensajeNoEncontrado);
        } else {
            for (const ingrediente of ingredientes) {
                    seccionContenedora.appendChild(GenerarListaIngredientes(ingrediente));
                }
            }
    }
    
}

const listaIngredientes = {
    Get: CargarListaIngredientes
};

export default listaIngredientes;