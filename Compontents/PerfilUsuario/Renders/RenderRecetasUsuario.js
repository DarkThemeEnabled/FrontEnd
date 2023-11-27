export default function GenerarPaginaUsuario() {
    const infoGeneral = document.createElement('div');
    infoGeneral.className = '';
    infoGeneral.innerHTML = `
        <div class="botones">
            <h3>Mis Recetas</h3>
            <a href="../../Pages/PostearOModReceta/CrearOModReceta.html" ><h3>Crear Receta</h3></a>
        </div>

    <div class="col-12" id="recetas">
    </div>
        
    

    `;
    return infoGeneral;
};