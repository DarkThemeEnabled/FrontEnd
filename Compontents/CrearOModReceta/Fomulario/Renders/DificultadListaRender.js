export default function GenerarDificultades(dificultad) {
    const dificultadesLista = document.createElement('li');
    dificultadesLista.id = "dificultad"
    dificultadesLista.innerHTML = `
        <span id="dificultad-data" value="${dificultad.id}">${dificultad.nombre.toUpperCase()}</span>
    `;

    return dificultadesLista;
};