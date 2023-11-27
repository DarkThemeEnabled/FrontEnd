async function GetRecetasByFilter(
  tituloIngredienteTopic,
  dificultad,
  categoria
) {
  try {
    // Construir la URL completa para la solicitud
    const url = `https://localhost:7015/api/v1/Receta`;

    // Configurar los parámetros para la solicitud
    const params = {
      tituloIngredienteTopic: tituloIngredienteTopic,
      dificultad: dificultad,
      categoria: categoria,
    };
    // Agregar parámetros a la URL
    const urlConParametros = `${url}?${new URLSearchParams(params).toString()}`;

    // Realizar la solicitud a la API
    const response = await fetch(urlConParametros);

    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      const errorMessage = `Error en la solicitud a ${url}: ${response.status} ${response.statusText}`;
      console.error(errorMessage);

      // Intenta imprimir el cuerpo de la respuesta para obtener más detalles
      const errorBody = await response.text();
      console.error("Error body:", errorBody);

      throw new Error(errorMessage);
    }

    // Devolver los datos en formato JSON
    const recetas = await response.json();
    // Devolver las recetas obtenidas
    return recetas;
  } catch (error) {
    // Manejar el error si ocurre durante la solicitud de recetas
    console.error("Error al obtener recetas:", error);
    throw error;
  }
}

export { GetRecetasByFilter };
