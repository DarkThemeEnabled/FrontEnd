export default function GenerarInfoGeneral() {
    const infoGeneral = document.createElement('div');
    infoGeneral.className = 'general-container';
    infoGeneral.innerHTML = `
    <h3 class="subtitulos-pagina-receta">CONTANOS UN POCO DE TU RECETA</h3>
                <ul class="container-formulario-general">
                    <li>
                        <div class="div-tag-formulario">
                            <i class="fa-solid fa-marker"></i>
                            <span class="div-tag-formulario">TÍTULO</span>
                        </div>
                        <input type="text" placeholder="Introducí el nombre de tu receta..." class="input-texto input-tags input-default-settings" id="titulo-receta">
                    </li>
                    <li>
                        <div class="div-tag-formulario">
                            <i class="fa-solid fa-pencil"></i>
                            
                        <span class="div-tag-formulario">DESCRIPCIÓN</span>
                        </div>
                        
                        <textarea class="input-texto input-tags input-default-settings" rows="3" cols="50" placeholder="Describí aquí tu receta en general (los pasos e ingredientes los ingresarás más adelante)" id="descripcion-receta"></textarea>

                    </li>
                    <li>
                        <div class="div-tag-formulario ">
                            <i class="fa-solid fa-shapes"></i>
                            <span class="div-tag-formulario">CATEGORIA</span>
                        </div>
                        <div class="input-default-settings list-dificultad">
                            <ul class="menu-dificultad"> 
                                <li>
                                    <div class="corrector-sublistas">
                                    <span id="span-categoria">Seleccione la categoria de la receta</span><i class="fa-solid fa-sort-down"></i>
                                    </div>
                                    <ul class="general-submenu-settings submenu-acomodar submenu-categoria" id="lista-categoria">
                                    </ul>
                                </li>
                            </ul>  
                        </div>
                    </li>
                    <li>
                        <div class="div-tag-formulario">
                            <i class="fa-solid fa-stopwatch"></i>
                            <span >TIEMPO.PREP</span>
                        </div>
                        <div class="horario-container input-default-settings">
                            <input type="number" class="input-hora input-hora-izquierda" placeholder="HH" id="hora-receta">
                            <span> : </span>
                            <input type="number" class="input-hora input-hora-derecha" placeholder="MM" id="minuto-receta">
                        </div>
                    </li>
                    <li>
                        <div class="div-tag-formulario ">
                            <i class="fa-solid fa-chart-simple"></i>
                            <span class="div-tag-formulario">DIFICULTAD</span>
                        </div>
                        <div class="input-default-settings list-dificultad">
                            <ul class="menu-dificultad"> 
                                <li>
                                    <div class="corrector-sublistas">
                                        <span id="span-dificultad">Seleccione una dificultad</span><i class="fa-solid fa-sort-down"></i>
                                    </div>
                                    <ul class="general-submenu-settings submenu-dificultad submenu-acomodar" id="lista-dificultades">
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
        <h5 class="cambio-formulario cambio-formulario-una-opcion"> <span id="cambio-a-ingredientes">AGREGAR INGREDIENTES<i class="fa-solid fa-arrow-right"></i> </span> </h5>
    `;

    return infoGeneral;
};