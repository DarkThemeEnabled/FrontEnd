import infoIndividualRender from '../Renders/CrearInformacionRender.js'


async function CargarListaInformacion(id,receta) {
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML = '';
    if (receta != null)
    {
        seccionContenedora.appendChild(infoIndividualRender('Topics',SplitTopics(receta.topics)));
        seccionContenedora.appendChild(infoIndividualRender('Categoria',receta.categoria.nombre));
        seccionContenedora.appendChild(infoIndividualRender('Dificultad',receta.dificultad.nombre));
        seccionContenedora.appendChild(infoIndividualRender('Duracion',CorregirHorario(receta.tiempoPreparacion)));
        seccionContenedora.appendChild(infoIndividualRender('Descripcion',receta.descripcion));
    }
    else
    {
        const mensajeNoEncontrado = document.createElement('li');
        mensajeNoEncontrado.textContent = 'Servicio fuera de línea :(';
        return seccionContenedora.appendChild(mensajeNoEncontrado);
    }
}

const listaInformacion = {
    Get: CargarListaInformacion
};

export default listaInformacion;

function SplitTopics(topics) {
    // Dividir la cadena en un array usando el separador '|'
    const topicsArray = topics.split('|');

    // Modificar cada elemento del array agregando '#' delante
    const modifiedTopics = topicsArray.map(topic => `#${topic}`);

    // Unir los elementos del array en un solo string con espacios entre ellos
    const result = modifiedTopics.join(' ');

    return result;
}

function CorregirHorario(hora)
{
    const partes = hora.split(':');
    const horas = parseInt(partes[0], 10);
    const minutos = parseInt(partes[1], 10);

    let horaTexto = '';
    let minutosTexto = '';

    // Verificar si las horas y los minutos son '01' o '1'
    if (horas === 1) {
        horaTexto = '1 Hora';
    } else {
        horaTexto = `${horas} Horas`;
    }

    if (minutos === 1) {
        minutosTexto = '1 Minuto';
    } else {
        minutosTexto = `${minutos} Minutos`;
    }

    // Construir el texto final
    const resultado = `${horaTexto} y ${minutosTexto}`;

    return resultado;
}