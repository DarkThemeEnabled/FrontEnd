import pasoIndividual from '../Renders/PasoIndividualRender.js'


async function CargarIngrediente(id,pasos) {
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML = '';

    if (pasos.length === 0) {
        const mensajeNoEncontrado = document.createElement('li');
        mensajeNoEncontrado.textContent = 'NO HAY PASOS DISPONIBLES EN ESTE MOMENTO :(';
        return seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        for (const paso of pasos) {
                seccionContenedora.appendChild(pasoIndividual(paso));
            }
        }
}

const listaInformacion = {
    Get: CargarIngrediente
};

export default listaInformacion;