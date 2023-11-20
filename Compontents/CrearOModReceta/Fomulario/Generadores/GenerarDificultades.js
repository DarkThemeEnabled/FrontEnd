import dificultadesRender from '../Renders/DificultadListaRender.js'
import GetDificultadApi from '../../../../Service/Receta/GetDificultadApi.js'


async function CargarListaDificultades(id) {
    const seccionContenedora = document.getElementById(id);
    let dificultades = await GetDificultadApi.GetDificultades();
    seccionContenedora.innerHTML = '';

    if (dificultades.length === 0) {
        const mensajeNoEncontrado = document.createElement('li');
        mensajeNoEncontrado.textContent = 'NO HAY NINGUNA DIFICULTAD DISPONIBLE EN ESTE MOMENTO :(';
        return seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        for (const dificultad of dificultades) {
                seccionContenedora.appendChild(dificultadesRender(dificultad.nombre));
            }
        }
}

const listaDificultades = {
    Get: CargarListaDificultades
};

export default listaDificultades;