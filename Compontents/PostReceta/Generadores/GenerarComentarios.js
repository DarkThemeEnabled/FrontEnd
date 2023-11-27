import infoGeneral from '../Renders/ComentariosRender.js';

async function CargarIngredientes(id) {
    const contenedor = document.getElementById(id);
    const cargaIngredientes = infoGeneral();
    // contenedor.appendChild(cargaIngredientes);
}

const cargaIngredientes = {
    Get: CargarIngredientes
};

export default cargaIngredientes;