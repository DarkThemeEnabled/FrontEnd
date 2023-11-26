import sectionRender from '../Renders/IngredienteContainer.js'
import GetIngredienteById from '../../../../Service/Ingrediente/GetIngredienteById.js'

let listaRepetidos = [];

async function CargarIngredienteContainer(id, ingredienteId, flag) {

    if(flag)
    {
        CargarIngredienteContainerSinCarga(id,ingredienteId);
    }
    else
    {
        CargarIngredienteContainerConCarga(id,ingredienteId);
    }
}

async function CargarIngredienteContainerSinCarga(id, ingredienteId) {
    const seccionContenedora = document.getElementById(id);

    // Verificar si el ID del ingrediente ya está en la lista de repetidos
    if (!listaRepetidos.includes(ingredienteId)) {
        let ingrediente = await GetIngredienteById.Get(ingredienteId);
        if (ingrediente !== null) {
            
            seccionContenedora.appendChild(sectionRender(ingrediente, ingrediente.name));
            listaRepetidos.push(ingredienteId);
        }
    } else {
        console.log('El ingrediente con este ID ya está en la lista de repetidos');
    }
}

async function CargarIngredienteContainerConCarga(id, ingredienteId) {
    const seccionContenedora = document.getElementById(id);
    let ingrediente = await GetIngredienteById.Get(ingredienteId);
    if (ingrediente !== null) {
        seccionContenedora.appendChild(sectionRender(ingrediente, ingrediente.name));
    }
}


const listaContainerIngredientes  = {
    Get: CargarIngredienteContainer
};

export default listaContainerIngredientes;