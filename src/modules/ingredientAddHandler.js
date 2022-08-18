const ingredientAddHandler = (ind, ingredients, data) => {
  const chosenIngredient = ingredients[ind];
  const newQuantities = {
    //enter previous values
    ...data.quantities,
    // chosen ingredient name as key and add 1 to it's previous value
    [chosenIngredient.name]:
      Number(data.quantities[chosenIngredient.name]) + 1,
  };
  // add new ingredient to arrangement
  const newArrangement = [...data.arrangement, chosenIngredient.name];
  const newData = {
    kcal: Number(Number(data.kcal) + Number(chosenIngredient.kcal)).toFixed(
      1
    ),
    time: Number(Number(data.time) + Number(chosenIngredient.time)).toFixed(
      1
    ),
    weight: Number(
      Number(data.weight) + Number(chosenIngredient.weight)
    ).toFixed(1),
    price: Number(
      Number(data.price) + Number(chosenIngredient.price)
    ).toFixed(1),
    quantities: newQuantities,
    arrangement: newArrangement,
  };
  return newData
};

export default ingredientAddHandler;