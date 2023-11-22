import ingredientesSinSeleccion from '../Renders/IngredientesSinSeleccionRender.js';
import ingredientesConSeleccion from '../Renders/IngredientesConSeleccionRender.js';

async function CargarSeleccionIngredientes(id,flag) {
    const contenedor = document.getElementById(id);
    if (!flag)
    {
        const cargarSelectorIngredientes = ingredientesSinSeleccion();
        contenedor.appendChild(cargarSelectorIngredientes);
    }
    else
    {
        const cargarSelectorIngredientes = ingredientesConSeleccion();
        contenedor.appendChild(cargarSelectorIngredientes);
    }
   
}

const cargaDeSeccionIngredientes = {
    Get: CargarSeleccionIngredientes
};

export default cargaDeSeccionIngredientes;