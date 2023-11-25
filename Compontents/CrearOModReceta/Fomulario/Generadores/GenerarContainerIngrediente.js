import sectionRender from '../Renders/IngredienteContainer.js'
import GetIngredienteById from '../../../../Service/Ingrediente/GetIngredienteById.js'

let listaRepetidos = [];

async function CargarIngredienteContainer(id, ingredienteId) {
    const seccionContenedora = document.getElementById(id);

    // Verificar si el ID del ingrediente ya está en la lista de repetidos
    if (!listaRepetidos.includes(ingredienteId)) {
        let ingrediente = await GetIngredienteById.Get(ingredienteId);
        if (ingrediente !== null) {
            listaRepetidos.push(ingredienteId);
            seccionContenedora.appendChild(sectionRender(ingrediente, ingrediente.name));
        }
    } else {
        console.log('El ingrediente con este ID ya está en la lista de repetidos');
        // Realizar alguna acción o mostrar un mensaje indicando que ya está en la lista
    }
}


const listaContainerIngredientes  = {
    Get: CargarIngredienteContainer
};

export default listaContainerIngredientes;