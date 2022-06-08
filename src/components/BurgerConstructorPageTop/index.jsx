import React, { useCallback, useEffect, useRef } from "react";
import { Container } from "./styles";
import burgerBottom from "../../assets/png/bun_bottom.png";
import timeSVG from "../../assets/svg/clock.svg";
import weightSVG from "../../assets/svg/bag.svg";
import fireSVG from "../../assets/svg/fire.svg";

const BurgerConstructorPageTop = ({ order, ingredients, additionalInfo, setCheckoutActive }) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref || !ref.current) return;
    additionalInfo.kcal > 1500
      ? ref.current.classList.add("active")
      : ref.current.classList.remove("active");
  }, [additionalInfo.kcal]);


  const checkoutClickHandler = useCallback(() => {
    if (order.length < 1 || !order.includes("top bun"))
      return alert("Please construct your burger and choose top bun");
    setCheckoutActive(true)
  });

  return (
    <Container>
      <div className="top">
        <div className="left">
          <h1>Make Your Burger</h1>
        </div>
        <div className="center" ref={ref}>
          <img src={burgerBottom} alt="burgerBottom" id="burgerBottom" />
          {order.map((item, ind) => {
            if (!ref || !ref.current) return;
            const obj = ingredients.find((i) => i.title === item);
            const lastChildTop =
              ref.current.offsetHeight -
              ref.current.querySelector(`:nth-child(${ind + 1})`).offsetTop;

            let result = (
              <img
                src={obj.img}
                alt={obj.title}
                className="ingredient"
                key={ind}
                style={{
                  bottom:
                    ind === 0 ? "30px" : `${lastChildTop - obj.topMargin}px`,
                }}
              />
            );

            if (obj.isDouble)
              result = (
                <span
                  key={ind}
                  style={{
                    bottom:
                      ind === 0 ? "30px" : `${lastChildTop - obj.topMargin}px`,
                  }}
                >
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="ingredient"
                    style={{
                      left: `${Math.ceil(Math.random() * 30)}px`,
                      transform: `rotate(${Math.random() * 20}deg)`,
                    }}
                  />
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="ingredient"
                    style={{
                      left: `${Math.ceil(Math.random() * 30)}px`,
                      transform: `rotate(${Math.random() * 10}deg)`,
                    }}
                  />
                </span>
              );

            return result;
          })}
        </div>
        <div className="right">
          <h3>Summary</h3>
          <hr />
          <div className="priceAndCheckoutWrapper">
            <span className="price">$0.00</span>
            <button className="checkout" onClick={checkoutClickHandler}>
              Checkout
            </button>
          </div>
          <p>
            Build a <span>$10</span> Burger and Get a Gift
          </p>
          <div className="info">
            <div className="time">
              <i>
                <img src={timeSVG} alt="time" />
              </i>
              <p>{additionalInfo.time} min</p>
            </div>
            <div className="weight">
              <i>
                <img src={weightSVG} alt="weight" />
              </i>
              <p>{additionalInfo.weight} oz</p>
            </div>
            <div className="calories">
              <i>
                <img src={fireSVG} alt="calories" />
              </i>
              <p>{additionalInfo.kcal} kcal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </Container>
  );
};

export default BurgerConstructorPageTop;
