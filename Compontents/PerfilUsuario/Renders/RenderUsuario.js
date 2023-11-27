export default function GenerarPaginaUsuario() {
    const infoGeneral = document.createElement('div');
    infoGeneral.className = 'perfil';
    infoGeneral.innerHTML = `
        <div class="col-2" id="contenedorimg">
            <img src="../../Assets/Img/pngegg.png" alt="usericon" class="userlogo">
        </div>
        <div class="col-10" id="infousuario">
            <h2>PAULA SALGADO</h2>
            <h5>@PSalgado</h5>
            
        </div>
        
    

    `;

    return infoGeneral;
};