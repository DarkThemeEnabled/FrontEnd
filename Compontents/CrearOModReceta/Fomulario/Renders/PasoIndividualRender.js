export default function GenerarPaso() {
    const dificultadesLista = document.createElement('li');
    dificultadesLista.className = 'acomodar-paso-div';
    dificultadesLista.id = 'paso-individual'
    dificultadesLista.innerHTML = `
    <li class='paso-individual'>
        <div class="elemento-paso">
            <span class="div-tag-formulario">PASO</span>
        </div>
        <div class="elemento-paso">
            <div class="div-tag-formulario">
                <i class="fa-regular fa-pen-to-square"></i>
                <span class="div-tag-formulario">DESCRIPCIÓN</span>
            </div>
            <textarea class="input-texto input-tags input-default-settings" rows="3" cols="60" placeholder="Describí como preparar tu receta"></textarea>
        </div>
        <div class="elemento-paso">
                <div class="div-tag-formulario">
                    <i class="fa-solid fa-camera-retro"></i>
                    <span class="div-tag-formulario">FOTO</span>
                </div>
                <input type="text" placeholder="Example: www.image.com/myimage.jpg" class="input-texto input-tags input-default-settings">
        </div>
    </li>
    <div class='acomodar-iconos'>
        <i class="fa-solid fa-arrow-up-long" id="subir-paso"></i>
        <i class="fa-solid fa-trash" id="borrar-paso"></i>
        <i class="fa-solid fa-arrow-down-long" id="bajar-paso"></i>
    </div>
    `;

    return dificultadesLista;
};