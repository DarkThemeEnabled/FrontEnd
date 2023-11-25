const GetIngredienteByName = async (name) => {
    let result = [];
    let response = await fetch(`https://localhost:7192/api/Ingrediente/ByName/${name}`);
    
    if (response.ok){
        result = await response.json();
    }
    else
    {
        result = null;
    }
    return result;
}
const ApiIngredienteByName = {
    Get : GetIngredienteByName
}
export default ApiIngredienteByName;