// Llamadas a la API:

// Para cada llamada a la API que requiera autenticación, se debe incluir el token en el encabezado de la solicitud.


// var request = new XMLHttpRequest();
// request.open('GET', 'https://api.example.com/data', true);
// request.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
// request.send();
let response = await fetch(`https://localhost:7015/api/Receta`);

const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  };
  
  // Realizar la solicitud POST utilizando fetch()
  fetch(url, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud.');
      }
      return response.json();
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

