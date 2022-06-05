import React, { useState } from "react";
import { Container } from "./styles";
import burgerImg from "../../assets/svg/burger.svg";
import timeSVG from "../../assets/svg/clock.svg";
import weightSVG from "../../assets/svg/bag.svg";
import fireSVG from "../../assets/svg/fire.svg";

const BurgerConstructorPageTop = ({ order, ingredients }) => {
  order = order.map((item) => item.toLowerCase());
  const [currentHeight, setCurrentHeight] = useState(0);

  const renderIngredients = () => {
    const result = order.map((item, ind) => {
      const info = ingredients.find((i) => i.title === item);
      setCurrentHeight((prevValue) => Number(prevValue) + Number(info.height));
      if (["onion", "tomato", "cucumber"].includes(item))
        return (
          <div key={ind}>
            <img
              className="ingredient"
              src={info.img}
              alt={info.title}
              style={{
                zIndex: ind + 2,
                bottom: ind === 0 ? 60 : Number(currentHeight),
                width: "150px",
                height: `${info.height}px`,
                transform: "rotate(-5deg)",
              }}
            />
            <img
              className="ingredient"
              src={info.img}
              alt={info.title}
              style={{
                zIndex: ind + 2,
                bottom: ind === 0 ? 60 : Number(currentHeight),
                width: "150px",
                height: `${info.height}px`,
                left: "200px",
                transform: "rotate(-10deg)",
              }}
            />
          </div>
        );

      return (
        <img
          key={ind}
          className="ingredient"
          src={info.img}
          alt={info.title}
          style={{
            zIndex: ind + 2,
            bottom: ind === 0 ? 50 : Number(currentHeight),
            width: "300px",
            height: `${info.height}px`,
          }}
        />
      );
    });
    return result;
  };

  return (
    <Container>
      <div className="top">
        <div className="left">
          <h1>Make Your Burger</h1>
        </div>
        <div className="center">
          <img src={burgerImg} alt="burger" id="main_img" key={Date.now()} />
          {renderIngredients()}
        </div>
        <div className="right">
          <h3>Summary</h3>
          <hr />
          <div className="priceAndCheckoutWrapper">
            <span className="price">$0.00</span>
            <button className="checkout">Checkout</button>
          </div>
          <p>
            Build a <span>$10</span> Burger and Get a Gift
          </p>
          <div className="info">
            <div className="time">
              <i>
                <img src={timeSVG} alt="time" />
              </i>
              <p>0 min</p>
            </div>
            <div className="weight">
              <i>
                <img src={weightSVG} alt="weight" />
              </i>
              <p>0 oz</p>
            </div>
            <div className="calories">
              <i>
                <img src={fireSVG} alt="calories" />
              </i>
              <p>0 kcal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </Container>
  );
};

export default BurgerConstructorPageTop;
