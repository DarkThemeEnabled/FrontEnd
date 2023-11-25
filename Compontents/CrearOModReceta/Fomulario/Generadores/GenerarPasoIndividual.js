import pasoIndividual from '../Renders/PasoIndividualRender.js';

async function CargarPasosIndividuales(id) {
    const contenedor = document.getElementById(id);
    const cargarPasoIndividual = pasoIndividual();
    contenedor.appendChild(cargarPasoIndividual);
   
}

const cargaDePasos = {
    Get: CargarPasosIndividuales
};
export default cargaDePasos;