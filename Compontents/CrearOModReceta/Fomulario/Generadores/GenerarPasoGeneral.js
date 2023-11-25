import ingredientesConSeleccion from '../Renders/PasosRender.js';

async function CargarSectorPasos(id) {
    const contenedor = document.getElementById(id);
    const cargarSectorPasos = ingredientesConSeleccion();
    contenedor.appendChild(cargarSectorPasos);
   
}

const cargaDePasos = {
    Get: CargarSectorPasos
};

export default cargaDePasos;