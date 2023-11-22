export default function GenerarIngredientes(ingrediente) {
    const ingredientesLista = document.createElement('li');
    ingredientesLista.innerHTML = `
                ${ingrediente.id} - ${ingrediente.name}                 
    `;

    return ingredientesLista;
};