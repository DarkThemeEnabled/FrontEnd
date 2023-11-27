import infoGeneral from '../Renders/PostRecetaRender.js';

async function CargarFormularioGeneral(id) {
    const contenedor = document.getElementById(id);
    const cargaFormularioGeneral = infoGeneral();
    contenedor.appendChild(cargaFormularioGeneral);
}

const cargaDeFormularioGeneral = {
    Get: CargarFormularioGeneral
};

export default cargaDeFormularioGeneral;