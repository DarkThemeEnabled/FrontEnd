export default function GenerarInfoIndividual(informacion,receta) {
    const informacionLi = document.createElement('li');
    informacionLi.className = 'acomodar-paso-div';
    informacionLi.innerHTML = `
    <div class="flex-informacion">
        <span class="separar">${informacion.toUpperCase()}</span>
        <span class="acomodar-texto"> ${receta.toUpperCase()}</span>
    </div>
    `;

    return informacionLi;
};