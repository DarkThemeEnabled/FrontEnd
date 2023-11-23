export default function GenerarIngredientes(ingrediente) {
    const ingredientesLista = document.createElement('li');
    ingredientesLista.innerHTML = `
                <span id="Ingrediente-data">${ingrediente.id} - ${ingrediente.name}</span>       
    `;

    return ingredientesLista;
};