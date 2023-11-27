export default function GenerarInfoIndividual(ingrediente,cantidad) {
    const informacionLi = document.createElement('li');
    informacionLi.className = 'acomodar-paso-div';
    informacionLi.innerHTML = `
    <div class="form-check check-ingrediente">
        <input class="form-check-input checkisto " type="checkbox" value="" id="flexCheckDefault">
    </div>
    <div class="container-del-ingrediente">
        <span>${ingrediente.name}</span>
        <span>CANTIDAD: ${cantidad} ${ingrediente.tipoMedida.name}</span>
    </div>

    `;

    return informacionLi;
};