import React from "react";
import { Container } from "./styles";

const BurgerContructorPageBottom = ({setOrder, order, ingredients}) => {

  const incrementClickHandler = (e) => {
    const productName = e.target.parentElement.previousElementSibling.children[0].innerText;
    setOrder(prevOrder => [...prevOrder, productName]);
  };
  const decrementClickHandler = (e) => {
    const productName = e.target.parentElement.previousElementSibling.children[0].innerText;
    const productLastPosiotion = order.lastIndexOf(productName);

    if (productLastPosiotion === -1) return;
    setOrder(prevOrder => prevOrder.filter((el,ind)=> ind!==productLastPosiotion));
  };

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
