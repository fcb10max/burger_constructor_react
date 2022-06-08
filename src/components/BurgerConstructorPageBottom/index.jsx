import React, { useCallback } from "react";
import { Container } from "./styles";

const BurgerContructorPageBottom = ({
  setOrder,
  order,
  ingredients,
  setAdditionalInfo,
}) => {
  const incrementClickHandler = useCallback((e) => {
    if (order.includes("top bun")) return;
    const productName = String(
      e.target.parentElement.previousElementSibling.children[0].innerText
    ).toLowerCase();
    const ingredientInfo = ingredients.find((i) => i.title === productName);
    const counter = e.target.parentElement.querySelector(".count");
    counter.innerText++;
    setOrder((prevOrder) => [...prevOrder, productName]);
    setAdditionalInfo((prevValue) => ({
      kcal: (prevValue.kcal += ingredientInfo.kcal),
      time: (prevValue.time += ingredientInfo.time),
      weight: (prevValue.weight += ingredientInfo.weight),
    }));
  });

  const decrementClickHandler = useCallback((e) => {
    const productName = String(
      e.target.parentElement.previousElementSibling.children[0].innerText
    ).toLowerCase();
    const ingredientInfo = ingredients.find((i) => i.title === productName);
    const productLastPosition = order.lastIndexOf(productName);
    const counter = e.target.parentElement.querySelector(".count");
    if (counter.innerText > 0) counter.innerText--;
    if (productLastPosition === -1) return;
    setOrder((prevOrder) =>
      prevOrder.filter((el, ind) => ind !== productLastPosition)
    );
    setAdditionalInfo((prevValue) => ({
      kcal: (prevValue.kcal -= ingredientInfo.kcal) < 0 ? 0 : (prevValue.kcal -= ingredientInfo.kcal),
      time: (prevValue.time -= ingredientInfo.time) < 0 ? 0 : (prevValue.time -= ingredientInfo.time),
      weight: (prevValue.weight -= ingredientInfo.weight) < 0 ? 0 : (prevValue.weight -= ingredientInfo.weight),
    }));
  });

  return (
    <Container>
      {ingredients.map((item, index) => (
        <div className="item" key={index}>
          <div className="img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="title">
            <h4>{item.title}</h4>
          </div>
          <div className="countBlock">
            <button className="decrease" onClick={decrementClickHandler}>
              -
            </button>
            <span className="count">0</span>
            <button className="increase" onClick={incrementClickHandler}>
              +
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default BurgerContructorPageBottom;
