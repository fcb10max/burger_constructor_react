import React from "react";
import { Container } from "./styles";
import BurgerImg from "../../assets/png/burger-img.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  const makeBurgerButtonClick = (e) => {};

  return (
    <Container>
      <div className="left">
        <h1 className="mainText">Make Your Burger</h1>
      </div>
      <div className="right">
        <img src={BurgerImg} alt="burger" />
      </div>
      <Link id="button" to="/make_burger">
        <p>Make Burger</p>
      </Link>
    </Container>
  );
};

export default MainPage;
