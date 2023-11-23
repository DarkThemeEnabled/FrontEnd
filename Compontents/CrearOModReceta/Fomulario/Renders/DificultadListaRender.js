export default function GenerarDificultades(dificultad) {
    const dificultadesLista = document.createElement('li');
    dificultadesLista.innerHTML = `
                - ${dificultad.toUpperCase()}               
    `;

    return dificultadesLista;
};