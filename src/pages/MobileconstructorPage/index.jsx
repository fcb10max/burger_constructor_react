import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";
import { Main } from "./styles";
import Center from "../BurgerConstructorPage/components/Center";

//import icons
import kcalIcon from "../../assets/svg/fire.svg";
import timeIcon from "../../assets/svg/clock.svg";
import weightIcon from "../../assets/svg/bag.svg";

// import event handlers
import ingredientAddHandler from "../../modules/ingredientAddHandler";
import ingredientRemoveHandler from "../../modules/ingredientRemoveHandler";

const MobileConsturctorPage = ({ ingredients, data, setData }) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const [isLeftBorder, setisLeftBorder] = useState(true);
  const [isRightBorder, setisRightBorder] = useState(false);

  useEffect(() => {
    if (width > 800) return navigate("/constructor");
  }, [width]);

  const callback = (e, ind) => {
    const buttonValue = e.target.innerText;
    let newData;
    if (buttonValue === "+") {
      newData = ingredientAddHandler(ind, ingredients, data);
    } else if (buttonValue === "-") {
      newData = ingredientRemoveHandler(ind, ingredients, data);
      if (!newData) newData = data;
    }
    setData(newData);
  };

  const scrollHandler = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const offsetWidth = e.target.offsetWidth;
    const scrollWidth = e.target.scrollWidth;
    const scrollRight = scrollLeft + offsetWidth;
    if (scrollLeft <= 0) return setisLeftBorder(true);
    if (scrollRight >= scrollWidth) return setisRightBorder(true);
    if (scrollRight > 0 && scrollRight < scrollWidth) {
      setisLeftBorder(false);
      setisRightBorder(false);
      return
    }
  };

  return (
    <Main isLeftBorder={isLeftBorder} isRightBorder={isRightBorder}>
      <Center data={data.arrangement} ingredients={ingredients} isMobile={true}></Center>
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
      <div className="ingredientsCarousel">
        <div className="carouselWrapper" onScroll={scrollHandler}>
          {ingredients.map((el, ind) => (
            <div className="item" key={ind}>
              <div className="img">
                <img src={el.image} alt={el.name} />
              </div>
              <div className="name">
                <p>{el.name}</p>
              </div>
              <div className="quantity">
                <div className="decrement">
                  <span onClick={(e) => callback(e, ind)}>-</span>
                </div>
                <div className="number">
                  <p>{data.quantities[el.name]}</p>
                </div>
                <div className="increment">
                  <span onClick={(e) => callback(e, ind)}>+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="price">{Number(data.price).toFixed(2)} $</p>
      <button>Checkout</button>
    </Main>
  );
};

export default MobileConsturctorPage;
