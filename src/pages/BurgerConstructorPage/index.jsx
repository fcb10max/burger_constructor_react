import React, { useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";
import Left from "./components/Left";
import Right from "./components/Right";
import Center from "./components/Center";
import { Main } from "./styles";

// import handler modules
import ingredientAddHandler from "../../modules/ingredientAddHandler";
import ingredientRemoveHandler from "../../modules/ingredientRemoveHandler";

const BurgerConstructorPage = ({ ingredients, data, setData }) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    if (width <= 800) return navigate("/mobile/constructor");
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

  return (
    <Main>
      <div className="constructorWindow">
        <Left />
        <div className="wrapper">
          <Center data={data.arrangement} ingredients={ingredients} />
          <Right data={data} />
        </div>
      </div>
      <div className="ingredients">
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
    </Main>
  );
};

export default BurgerConstructorPage;
