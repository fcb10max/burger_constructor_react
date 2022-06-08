import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import BurgerConstructorPageTop from "../../components/BurgerConstructorPageTop";
import BurgerConstructorPageBottom from "../../components/BurgerConstructorPageBottom";

// import ingredients images
import cutlet from "../../assets/png/cutlet.png";
import mayo from "../../assets/png/mayo.png";
import onion from "../../assets/png/onion.png";
import tomato from "../../assets/png/tomatoe.png";
import cucumber from "../../assets/png/cucumber.png";
import cheese from "../../assets/png/cheese.png";
import salad from "../../assets/png/salad.png";
import bun from "../../assets/png/bun_middle.png";
import topBun from "../../assets/png/bun_top.png";

// import icons
import checkoutIcon from "../../assets/svg/point_in_circle.svg";
import smiley from "../../assets/svg/emotion-happy-line.svg";
import routeLine from "../../assets/svg/route-line.svg";
import phone from "../../assets/svg/phone.svg";
import deliveryIcon from "../../assets/svg/delivery_icon.svg";

const BurgerConstructorPage = () => {
  const [additionalInfo, setAdditionalInfo] = useState({
    time: 0,
    kcal: 0,
    weight: 0,
  });
  const [order, setOrder] = useState([]);
  const [checkoutActive, setCheckoutActive] = useState(false);
  const ingredients = [
    {
      title: "cutlet",
      img: `${cutlet}`,
      topMargin: 35,
      isDouble: false,
      time: 5,
      weight: 20,
      kcal: 500,
    },
    {
      title: "mayo",
      img: `${mayo}`,
      topMargin: 35,
      isDouble: false,
      time: 0.5,
      weight: 10,
      kcal: 200,
    },
    {
      title: "onion",
      img: `${onion}`,
      topMargin: 15,
      isDouble: true,
      time: 0.5,
      weight: 5,
      kcal: 90,
    },
    {
      title: "tomato",
      img: `${tomato}`,
      topMargin: 15,
      isDouble: true,
      time: 0.5,
      weight: 8,
      kcal: 50,
    },
    {
      title: "cucumber",
      img: `${cucumber}`,
      topMargin: 15,
      isDouble: true,
      time: 0.5,
      weight: 10,
      kcal: 40,
    },
    {
      title: "cheese",
      img: `${cheese}`,
      topMargin: 40,
      isDouble: false,
      time: 1,
      weight: 20,
      kcal: 150,
    },
    {
      title: "salad",
      img: `${salad}`,
      topMargin: 25,
      isDouble: false,
      time: 1,
      weight: 20,
      kcal: 90,
    },
    {
      title: "bun",
      img: `${bun}`,
      topMargin: 40,
      isDouble: false,
      time: 1,
      weight: 50,
      kcal: 300,
    },
    {
      title: "top bun",
      img: `${topBun}`,
      topMargin: 40,
      isDouble: false,
      time: 1,
      weight: 50,
      kcal: 300,
    },
  ];

  return (
    <Container>
      {checkoutActive && (
        <div className="checkoutWindow">
          <div className="container">
            <div className="top">
              <div className="left">
                <i>
                  <img src={checkoutIcon} alt="checkout" />
                </i>
                Checkout
              </div>
              <div className="right" onClick={()=>setCheckoutActive(false)}>
                <span></span>
              </div>
            </div>
            <hr />
            <div className="main">
              <div className="left">
                <div className="top">
                  <div className="icon">
                    <img src={smiley} alt="icon" />
                  </div>
                  <div className="text">
                    <label htmlFor="clientName">Your Name</label>
                    <input type="text" id="clientName"/>
                  </div>
                </div>
                <div className="bottom">
                  <div className="icon">
                    <img src={routeLine} alt="icon" />
                  </div>
                  <div className="text">
                    <label htmlFor="clientAddress">Shipping Address</label>
                    <input type="text" id="clientAddress" />
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="top">
                  <div className="icon">
                    <img src={phone} alt="icon" />
                  </div>
                  <div className="text">
                    <label htmlFor="clientPhone">Phone Number</label>
                    <input type="tel" id="clientPhone" />
                  </div>
                </div>
                <div className="bottom">
                  <div className="icon">
                    <img src={deliveryIcon} alt="deliver" />
                  </div>
                  <div className="text">
                  <label htmlFor="clientOrderTime">Time to Delivery</label>
                  <select name="clientOrderTime" id="clientOrderTime">
                    <option value="00:00pm">00:00pm</option>
                    <option value="01:00pm">01:00pm</option>
                    <option value="02:00pm">02:00pm</option>
                    <option value="03:00pm">03:00pm</option>
                    <option value="04:00pm">04:00pm</option>
                    <option value="05:00pm">05:00pm</option>
                    <option value="06:00pm">06:00pm</option>
                    <option value="07:00pm">07:00pm</option>
                    <option value="08:00pm">08:00pm</option>
                    <option value="09:00pm">09:00pm</option>
                    <option value="10:00pm">10:00pm</option>
                    <option value="11:00pm">11:00pm</option>
                    <option value="12:00pm">12:00pm</option>
                  </select>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="bottom">
              <button onClick={()=>setCheckoutActive(false)}>Cancel</button>
              <button onClick={()=>alert("checkout")}>Checkout</button>
            </div>
          </div>
        </div>
      )}
      <BurgerConstructorPageTop
        order={order}
        ingredients={ingredients}
        additionalInfo={additionalInfo}
        setCheckoutActive={setCheckoutActive}
      />
      <BurgerConstructorPageBottom
        setOrder={setOrder}
        order={order}
        ingredients={ingredients}
        setAdditionalInfo={setAdditionalInfo}
      />
    </Container>
  );
};

export default BurgerConstructorPage;
