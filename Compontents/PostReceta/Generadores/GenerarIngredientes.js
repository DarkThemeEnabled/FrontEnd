import infoIngrediente from '../Renders/IngredientesRender.js';

async function CargarIngredientes(id) {
    infoIngrediente(id);
}

const cargaIngredientes = {
    Get: CargarIngredientes
};

export default cargaIngredientes;