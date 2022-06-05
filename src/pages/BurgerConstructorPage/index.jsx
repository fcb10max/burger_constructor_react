import React, { useState } from 'react'
import { Container } from './styles'
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


const BurgerConstructorPage = () => {
  const ingredients = [
    {
      title: "cutlet",
      img: `${cutlet}`,
      height: 70,
    },
    {
      title: "mayo",
      img: `${mayo}`,
      height: 50,
    },
    {
      title: "onion",
      img: `${onion}`,
      height: 40,
    },
    {
      title: "tomato",
      img: `${tomato}`,
      height: 40,
    },
    {
      title: "cucumber",
      img: `${cucumber}`,
      height: 40,
    },
    {
      title: "cheese",
      img: `${cheese}`,
      height: 30,
    },
    {
      title: "salad",
      img: `${salad}`,
      height: 50,
    },
    {
      title: "bun",
      img: `${bun}`,
      height: 60,
    },
  ];

  const [order, setOrder] = useState([]);

  return (
    <Container>
      <BurgerConstructorPageTop order={order} ingredients={ingredients} />
      <BurgerConstructorPageBottom setOrder={setOrder} order={order} ingredients={ingredients} />
    </Container>
  )
}

export default BurgerConstructorPage