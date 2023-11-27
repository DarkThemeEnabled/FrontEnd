function GenerarFooter() {
    const barraFooter = document.createElement('div');
    barraFooter.className = 'background';
    barraFooter.innerHTML = `
    <div class="container">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 ">
                    <img src="../../Assets/img/LogoNav.png" alt="LogoNav" class="imagen-footer" >
                    <p class="fs-1 text-black text-center fw-bold">GASTRONET</p>
                </div>
                <div class="col-3 ">
                    <h5 class="text-black mb-3">Paginas</h5>
                    <ul class="list-unstyled text-white">
                        <li><a href="#">link1</a></li>
                        <li><a href="#">lin2</a></li>
                        <li><a href="#">link3</a></li>
                        <li><a href="#">link4</a></li>
                    </ul>
                </div>
                <div class="col-3 ">
                    <h5 class="text-black mb-3">Contactanos</h5>
                    <ul class="list-unstyled text-white">
                        <li><a href="#">link1</a></li>
                        <li><a href="#">lin2</a></li>
                        <li><a href="#">link3</a></li>
                        <li><a href="#">link4</a></li>
                    </ul>
                </div>
                <div class="col-2">
                    <h5 class="text-black mb-3">¿Quienes somos?</h5>
                    <ul class="list-unstyled text-white">
                        <li><a href="#">link1</a></li>
                        <li><a href="#">lin2</a></li>
                    </ul>
                </div>
            </div>
    </div>
    `;
    return barraFooter;
}
const contenedor = document.getElementById('Footer');
const footer = GenerarFooter();
contenedor.appendChild(footer);