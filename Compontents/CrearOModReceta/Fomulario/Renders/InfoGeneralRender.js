export default function GenerarInfoGeneral() {
    const infoGeneral = document.createElement('div');
    infoGeneral.className = 'general-container';
    infoGeneral.innerHTML = `
    <h3 class="subtitulos-pagina-receta">INFORMACIÓN GENERAL DE LA RECETA</h3>
                <ul class="container-formulario-general">
                    <li>
                        <div class="div-tag-formulario">
                            <i class="fa-solid fa-marker"></i>
                            <span class="div-tag-formulario">TITULO:</span>
                        </div>
                        <input type="text" placeholder="Introducí el nombre de tu receta..." class="input-texto input-tags input-default-settings">
                    </li>
                    <li>
                        <div class="div-tag-formulario">
                            <i class="fa-solid fa-pencil"></i>
                            
                        <span class="div-tag-formulario">DESCRIPCIÓN:</span>
                        </div>
                        
                        <textarea class="input-texto input-tags input-default-settings" rows="3" cols="50" placeholder="Describí aquí tu receta..."></textarea>

                    </li>
                    <li>
                        <div class="div-tag-formulario">
                            <i class="fa-regular fa-clock"></i>
                            <span >TIEMPO.PREP</span>
                        </div>
                        <div class="horario-container input-default-settings">
                            <input type="number" class="input-hora" placeholder="HH">
                            <a> : </a>
                            <input type="number" class="input-hora" placeholder="MM">
                        </div>
                    </li>
                    <li>
                        <div class="div-tag-formulario ">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span class="div-tag-formulario">DIFICULTAD:</span>
                        </div>
                        <div class="input-default-settings list-dificultad">
                            <ul class="menu-dificultad"> 
                                <li>
                                    <a>Seleccione una dificultad <i class="fa-solid fa-sort-down"></i></a>
                                    <ul class="submenu-dificultad" id="lista-dificultades">
                                    </ul>
                                </li>
                            </ul>  
                        </div>
                    </li>
                    <li>
                        <div class="div-tag-formulario">
                            <i class="fa-solid fa-camera"></i>
                            <span class="div-tag-formulario">FOTO PORTADA</span>
                        </div>
                        
                        <input type="text" placeholder="Example: www.image.com/myimage.jpg" class="input-texto input-tags input-default-settings">
                    </li>
                    <li>
                        <div class="div-tag-formulario">
                            <i class="fa-solid fa-video"></i>
                            <span class="div-tag-formulario">VIDEO</span>
                        </div>
                        <input type="text" placeholder="Example: www.youtube.com/myvideo1" class="input-texto input-tags input-default-settings">
                    </li>
                </ul>
    
    `;

    return infoGeneral;
};