import categoriasRender from '../Renders/CategoriaRecetaListaRender.js'
import GetCategoriasApi from '../../../../Service/Receta/GetCategoriaReceta.js'


async function CargarListaCategorias(id) {
    const seccionContenedora = document.getElementById(id);
    let categorias = await GetCategoriasApi.GetCategorias();
    seccionContenedora.innerHTML = '';

    if (categorias.length === 0) {
        const mensajeNoEncontrado = document.createElement('li');
        mensajeNoEncontrado.textContent = 'NO HAY NINGUNA DIFICULTAD DISPONIBLE EN ESTE MOMENTO :(';
        return seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        for (const categoria of categorias) {
                seccionContenedora.appendChild(categoriasRender(categoria));
            }
        }
}

const listaCategorias = {
    Get: CargarListaCategorias
};

export default listaCategorias;