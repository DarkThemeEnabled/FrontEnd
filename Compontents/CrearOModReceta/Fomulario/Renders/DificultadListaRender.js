export default function GenerarDificultades(dificultad) {
    const dificultadesLista = document.createElement('li');
    dificultadesLista.innerHTML = `
                <label>- ${dificultad} </label>                  
    `;

    return dificultadesLista;
};