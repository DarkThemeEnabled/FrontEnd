import GenerarPosteoReceta from '../../Compontents/PostReceta/Generadores/GenerarPosteoReceta.js'
import GenerarCaracteristicasRender from '../../Compontents/PostReceta/Generadores/GenerarCaracteristicasFoto.js'
import GenerarIngredientes from '../../Compontents/PostReceta/Generadores/GenerarIngredientes.js'
import GenerarPasos from '../../Compontents/PostReceta/Generadores/GenerarPasos.js';
import GenerarComentarios from '../../Compontents/PostReceta/Generadores/GenerarComentarios.js';
import GetRecetaByIdApi from '../../Service/Receta/GetRecetaById.js'
import GenerarInfoCaracteristicas from '../../Compontents/PostReceta/Generadores/GenerarInformacionIndividual.js';
import GenerarIngredientesIndividual from '../../Compontents/PostReceta/Generadores/GenerarIngredienteIndividual.js'

let ApiReceta = await GetRecetaByIdApi.GetCategorias('005472c6-c357-4410-0810-08dbef56a8fa');
console.log(ApiReceta);

//Generador de la pagina
GenerarPosteoReceta.Get('PostReceta');
//Generador de caracteristicas
GenerarCaracteristicasRender.Get('foto-caracteristicas-receta',ApiReceta);
GenerarInfoCaracteristicas.Get('informacion-individual',ApiReceta);


GenerarIngredientes.Get('ingredientes-receta');
GenerarIngredientesIndividual.Get('ingredientes-individuales',ApiReceta.ingredientes)

GenerarPasos.Get('pasos-receta',ApiReceta);
GenerarComentarios.Get('Comentarios',ApiReceta);