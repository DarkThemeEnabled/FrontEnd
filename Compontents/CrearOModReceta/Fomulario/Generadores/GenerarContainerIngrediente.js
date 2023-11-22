import sectionRender from '../Renders/IngredienteContainer.js'
import GetIngredienteById from '../../../../Service/Ingrediente/GetIngredienteById.js'

async function CargarIngredienteContainer(id,ingredienteId) {
    const seccionContenedora = document.getElementById(id);
    let ingrediente = await GetIngredienteById.Get(ingredienteId);
    seccionContenedora.innerHTML = '';
    if (ingrediente !== null) {
        seccionContenedora.appendChild(sectionRender(ingrediente, ingrediente.name));
    }
}

const listaContainerIngredientes  = {
    Get: CargarIngredienteContainer
};

export default listaContainerIngredientes;