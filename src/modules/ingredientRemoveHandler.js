const ingredientRemoveHandler = (ind, ingredients, data) => {
  const chosenIngredient = ingredients[ind];
  if (data.quantities[chosenIngredient.name] <= 0) return;
  const newQuantities = {
    //enter previous values
    ...data.quantities,
    // chosen ingredient name as key and add 1 to it's previous value
    [chosenIngredient.name]:
      data.quantities[chosenIngredient.name] > 0
        ? Number(data.quantities[chosenIngredient.name]) - 1
        : 0,
  };
  const indexOfIngredientLastEntry = data.arrangement.lastIndexOf(
    chosenIngredient.name
  );
  // remove last entry of ingredient from arrangement
  const newArrangement = data.arrangement.filter(
    (el, ind) => ind !== indexOfIngredientLastEntry
  );
  const newData = {
    kcal:
      data.kcal > 0
        ? Number(Number(data.kcal) - Number(chosenIngredient.kcal)).toFixed(1)
        : 0,
    time:
      data.time > 0
        ? Number(Number(data.time) - Number(chosenIngredient.time)).toFixed(1)
        : 0,
    weight:
      data.weight > 0
        ? Number(
            Number(data.weight) - Number(chosenIngredient.weight)
          ).toFixed(1)
        : 0,
    price:
      data.price > 0
        ? Number(Number(data.price) - Number(chosenIngredient.price)).toFixed(
            1
          )
        : 0,
    quantities: newQuantities,
    arrangement: newArrangement,
  };
  return newData
};


export default ingredientRemoveHandler