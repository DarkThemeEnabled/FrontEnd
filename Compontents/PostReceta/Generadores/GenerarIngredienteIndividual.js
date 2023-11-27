import ingredienteIndividual from '../Renders/IngredienteIndividualRender.js'
import GetIngredienteByIdApi from '../../../Service/Ingrediente/GetIngredienteById.js'


async function CargarIngrediente(id,ingredientes) {
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML = '';

    if (ingredientes.length === 0) {
        const mensajeNoEncontrado = document.createElement('li');
        mensajeNoEncontrado.textContent = 'NO HAY INGREDIENTES DISPONIBLES EN ESTE MOMENTO :(';
        return seccionContenedora.appendChild(mensajeNoEncontrado);
    } else {
        for (const ingrediente of ingredientes) {
                console.log(ingrediente)
                console.log(ingrediente.id)
                console.log(ingrediente.cantidad);
                let ingredinteDatos = await GetIngredienteByIdApi.Get(ingrediente.id)
                seccionContenedora.appendChild(ingredienteIndividual(ingredinteDatos,ingrediente.cantidad));
            }
        }
}

const listaInformacion = {
    Get: CargarIngrediente
};

export default listaInformacion;