import RecetaIndividual from '../Renders/MostrarRecetaSola.js'
import apiReceta from'../../../Service/Receta/GetRecetaByBusqueda.js'
import {renderizarVistaPreviaReceta} from '../../../Service/Receta/RenderizarVistaPrevia.js'


async function CargarIngrediente(id) {
    let recetasUsuario=await apiReceta.Get('lomo',null,null);
    console.log(await apiReceta.Get('Pizza',null,null));
    const seccionContenedora = document.getElementById(id);
    seccionContenedora.innerHTML = '';
    if(recetasUsuario.length > 0)
    {
        for (const receta of recetasUsuario) {
            seccionContenedora.appendChild(renderizarVistaPreviaReceta(receta));
        }
    }
    
}

const listaInformacion = {
    Get: CargarIngrediente
};

export default listaInformacion;