import ingredientesConSeleccion from '../Renders/IngredientesConSeleccionRender.js';

async function CargarSeleccionIngredientes(id) {
    const contenedor = document.getElementById(id);
    const cargarSelectorIngredientes = ingredientesConSeleccion();
    contenedor.appendChild(cargarSelectorIngredientes);
   
}

const cargaDeSeccionIngredientes = {
    Get: CargarSeleccionIngredientes
};

export default cargaDeSeccionIngredientes;