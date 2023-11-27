export default function GenerarInfoCaracteristicas(id) {
    const ingredientes = document.getElementById(id);
    ingredientes.innerHTML = `
    <div class="acomodar-iconos">
    <i class="fa-solid fa-drumstick-bite"></i>
    <h3>INGREDIENTES</h3>
    </div>

    <ul id="ingredientes-individuales">
    </ul>
    `;

    return ingredientes;
};