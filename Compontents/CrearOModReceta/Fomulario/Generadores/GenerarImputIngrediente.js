import BusquedaIngredienteRender from '../Renders/BusquedaIngredienteRender.js';

async function cargarInputIngredientes(id) {
    const contenedor = document.getElementById(id);
    const cargarInput = BusquedaIngredienteRender();
    contenedor.appendChild(cargarInput);
}

const cargaDeInputIngredientes = {
    Get: cargarInputIngredientes
};

export default cargaDeInputIngredientes;