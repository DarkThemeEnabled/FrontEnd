// Llamadas a la API:

// Para cada llamada a la API que requiera autenticación, se debe incluir el token en el encabezado de la solicitud.


// var request = new XMLHttpRequest();
// request.open('GET', 'https://api.example.com/data', true);
// request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
// request.send();
const endpointReceta = `https://localhost:7015/api/Receta`;
const crearReceta = async (request) => 
{
  const response = await fetch(endpointReceta,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    if (response.ok)
    {
      const resultado = await response.text();
      return resultado;
    }
    else {
      console.log('no funca');
    }
}

const Posteo = 
{
  Post: crearReceta
}

export default Posteo;



