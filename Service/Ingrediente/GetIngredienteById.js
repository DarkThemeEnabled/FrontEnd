const GetIngredienteById = async (Id) => {
    let result = [];
    let response = await fetch(`https://localhost:7192/api/Ingrediente/ById/${Id}`);

    if (response.ok){
        result = await response.json();
    }
    return result;
}
const ApiIngredienteById = {
    Get : GetIngredienteById
}
export default ApiIngredienteById;