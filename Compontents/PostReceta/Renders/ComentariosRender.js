export default function GenerarPasos() {
    const pasos = document.getElementById('Comentarios');
    pasos.innerHTML = `
    <div class="card">
        <h5>Comentarios</h6>
        <div class="mt-3 d-flex flex-row align-items-center p-3 form-color" id="ingresarcomentario">

            <img src="../../Assets/Img/pngegg.png" width="50" class="rounded-circle mr-2">
            <input type="text" class="form-control" placeholder="Ingrese su comentario...">

        </div>


        <div class="mt-2">

            <div class="d-flex flex-row p-3">

                <img src="../../Assets/Img/pngegg.png" width="40" height="40" class="rounded-circle mr-3">

                <div class="w-100">

                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-row align-items-center">
                            <span class="mr-2">Juancito Comidas</span>                                      
                        </div>
                        <small>12h ago</small>
                    </div>

                    <p class="text-justify comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                    <div class="d-flex flex-row user-feed">
                        <span class="wish"><i class="fa fa-heartbeat mr-2"></i>24</span>
                        <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span>    
                    </div>
    
                </div>
            </div>

    </div>
    
</div>
    `;

    return pasos;
};