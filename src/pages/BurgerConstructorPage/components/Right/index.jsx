import React from "react";
import { Main } from "./styles";
import kcalIcon from "../../../../assets/svg/fire.svg";
import timeIcon from "../../../../assets/svg/clock.svg";
import weightIcon from "../../../../assets/svg/bag.svg";

const Right = ({ data, setIsTopBunPut, isTopBunPut }) => {
  const checkoutHandler = (e) => {
    if (!isTopBunPut) return setIsTopBunPut(true);
    // there will be checkout function;
    alert("Checkout completed");
  };

  return (
    <Main isTopBunPut={isTopBunPut}>
      <div className="wrapper">
        <h1>Summary</h1>
        <hr />
        <div className="priceAndCheckoutBlock">
          <p className="price">{Number(data.price).toFixed(2)} $</p>
          <button onClick={checkoutHandler}>
            {isTopBunPut ? "Checkout" : "Put top bun and checkout"}
          </button>
          {isTopBunPut && (
            <button className="close" onClick={() => setIsTopBunPut(false)}>Cancel</button>
          )}
        </div>
        <p>
          Build a <span>$10</span> Burger and Get a Gift
        </p>
        <div className="infoBlock">
          <div>
            <i>
              <img src={kcalIcon} alt="time icon" />
            </i>
            <p>{data.time} min</p>
          </div>
          <div>
            <i>
              <img src={weightIcon} alt="weigth icon" />
            </i>
            <p>{data.weight} oz</p>
          </div>
          <div>
            <i>
              <img src={timeIcon} alt="kcal icon" />
            </i>
            <p>{data.kcal} kcal</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Right;
