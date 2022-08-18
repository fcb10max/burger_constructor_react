import React, { useEffect } from "react";
import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import ParallaxBurgerImage from "./components/ParallaxBurgerImage";
import bg from "../../assets/png/burger-img.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MainPage = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    if (width <= 800) return navigate("/mobile");
  }, [width])

  return (
    <Container>
      <div className="left">
        <h1 className="mainText">Make Your Burger</h1>
      </div>
      <div className="right">
        <img src={bg} alt="burger" />
        {/* TODO */}
        {/* <ParallaxBurgerImage/> */}
      </div>
      <Link id="button" to="/constructor">
        <p>Make Burger</p>
      </Link>
    </Container>
  );
};

export default MainPage;
