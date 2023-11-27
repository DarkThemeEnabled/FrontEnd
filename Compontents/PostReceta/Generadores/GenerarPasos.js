import infoGeneral from '../Renders/PasosRender.js';

async function CargarPasos(id) {
    const contenedor = document.getElementById(id);
    const cargaPaso = infoGeneral();
    // contenedor.appendChild(cargaPaso);
}

const cargaPasos = {
    Get: CargarPasos
};

export default cargaPasos;