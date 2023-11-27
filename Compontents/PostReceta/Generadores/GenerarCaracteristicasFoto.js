import infoGeneral from '../Renders/CaracteristicasRecetaRender.js';

async function CargaCaracteristicasRender(id,api) {
    const contenedor = document.getElementById(id);
    const cargaFormularioGeneral = infoGeneral(api);
}

const cargadeCaracteristicasRender = {
    Get: CargaCaracteristicasRender
};

export default cargadeCaracteristicasRender;