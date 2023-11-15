function GenerarHeader() {
    const barraHeader = document.createElement('nav');
    barraHeader.className = 'row nav-principal';
    barraHeader.innerHTML = `
        <div class="col-2">
        </div>
        <div class="col-8" id="Nav">
            <div class="nav-container">
                <div class="titulo-nav">
                    <a href="../../index.html">
                        <img src="../../Assets/Img/LogoNav.png" alt="Logo Gastronet" class="logo-nav">
                        <h3 class="titulo-del-nav">GASTRONET</h3>
                    </a>
                </div>
                <div class="input-container-nav">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="¿Qué te tienta preparar?" class="input-nav" id>
                </div>
                <div class="nav-login">
                    <a class="text-acceder">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        Acceder
                    </a>
                </div>
            </div>
        </div>
        <div class="col-2">
        </div>
    `;
    return barraHeader;
}
const contenedor = document.getElementById('Nav');
const header = GenerarHeader();
contenedor.appendChild(header);