import GenerarPosteoReceta from '../../Compontents/PostReceta/Generadores/GenerarPosteoReceta.js'
import GenerarCaracteristicasRender from '../../Compontents/PostReceta/Generadores/GenerarCaracteristicasFoto.js'
import GenerarIngredientes from '../../Compontents/PostReceta/Generadores/GenerarIngredientes.js'
import GenerarPasos from '../../Compontents/PostReceta/Generadores/GenerarPasos.js';
import GenerarComentarios from '../../Compontents/PostReceta/Generadores/GenerarComentarios.js';
import GetRecetaByIdApi from '../../Service/Receta/GetRecetaById.js'
import GenerarInfoCaracteristicas from '../../Compontents/PostReceta/Generadores/GenerarInformacionIndividual.js';
import GenerarIngredientesIndividual from '../../Compontents/PostReceta/Generadores/GenerarIngredienteIndividual.js'
import GenerarPasoIndividual from '../../Compontents/PostReceta/Generadores/GenerarPasoIndividual.js';

// Obtener el valor del parámetro 'id' de la URL
const parametros = new URLSearchParams(window.location.search);
const idReceta = parametros.get('id');

console.log('ID de receta obtenido de la URL:', idReceta);
// Utilizar el valor de idReceta según sea necesario en esta página

let ApiReceta = await GetRecetaByIdApi.GetCategorias(idReceta);
console.log(ApiReceta);

//Generador de la pagina
GenerarPosteoReceta.Get('PostReceta');
//Generador de caracteristicas
GenerarCaracteristicasRender.Get('foto-caracteristicas-receta',ApiReceta);
GenerarInfoCaracteristicas.Get('informacion-individual',ApiReceta);


GenerarIngredientes.Get('ingredientes-receta');
GenerarIngredientesIndividual.Get('ingredientes-individuales',ApiReceta.ingredientes)

GenerarPasos.Get('pasos-receta',ApiReceta);
GenerarPasoIndividual.Get('pasos-individuales',ApiReceta.pasos);
GenerarComentarios.Get('Comentarios',ApiReceta);