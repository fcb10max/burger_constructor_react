// import images of ingredients
import cutlet from "./../assets/png/cutlet.png";
import mayo from "./../assets/png/mayo.png";
import onion from "./../assets/png/onion.png";
import tomato from "./../assets/png/tomatoe.png";
import cucumber from "./../assets/png/cucumber.png";
import cheese from "./../assets/png/cheese.png";
import salad from "./../assets/png/salad.png";
import bun from "./../assets/png/bun_middle.png";

export const ingredients = [
  {
    name: "cutlet",
    weight: 4.5,
    time: 5,
    kcal: 100,
    image: cutlet,
    price: 5,
    isSingleElem: true,
    cssValues: {
      height: 80,
      mobileHeight: 40,
      bottomDifference: 40,
      mobileBottomDifference: 20,
      initialBottomDifference: 0,
      mobileInitialBottomDifference: 5
    },
  },
  {
    name: "mayo",
    weight: 2,
    time: 1,
    kcal: 50,
    image: mayo,
    price: 1,
    isSingleElem: true,
    cssValues: {
      height: 80,
      mobileHeight: 40,
      bottomDifference: 55,
      mobileBottomDifference: 27,
      initialBottomDifference: 15,
      mobileInitialBottomDifference: 15
    },
  },
  {
    name: "onion",
    weight: 0.2,
    time: 0.5,
    kcal: 10,
    image: onion,
    price: 0.5,
    isSingleElem: false,
    cssValues: {
      height: 40,
      mobileHeight: 15,
      bottomDifference: 20,
      mobileBottomDifference: 10,
      initialBottomDifference: -20,
      mobileInitialBottomDifference: -5
    },
  },
  {
    name: "tomato",
    weight: 0.3,
    time: 0.5,
    kcal: 10,
    image: tomato,
    price: 0.5,
    isSingleElem: false,
    cssValues: {
      height: 40,
      mobileHeight: 15,
      bottomDifference: 20,
      mobileBottomDifference: 10,
      initialBottomDifference: -20,
      mobileInitialBottomDifference: -5
    },
  },
  {
    name: "cucumber",
    weight: 0.3,
    time: 0.5,
    kcal: 15,
    image: cucumber,
    price: 0.5,
    isSingleElem: false,
    cssValues: {
      height: 40,
      mobileHeight: 15,
      bottomDifference: 20,
      mobileBottomDifference: 10,
      initialBottomDifference: -20,
      mobileInitialBottomDifference: -5
    },
  },
  {
    name: "cheese",
    weight: 1,
    time: 1,
    kcal: 50,
    image: cheese,
    price: 2,
    isSingleElem: true,
    cssValues: {
      height: 90,
      mobileHeight: 40,
      bottomDifference: 80,
      mobileBottomDifference: 35,
      initialBottomDifference: 30,
      mobileInitialBottomDifference: 25
    },
  },
  {
    name: "salad",
    weight: 1.5,
    time: 0.5,
    kcal: 15,
    image: salad,
    price: 1,
    isSingleElem: true,
    cssValues: {
      height: 80,
      mobileHeight: 40,
      bottomDifference: 50,
      mobileBottomDifference: 25,
      initialBottomDifference: 0,
      mobileInitialBottomDifference: 10
    },
  },
  {
    name: "bun",
    weight: 5,
    time: 1,
    kcal: 75,
    image: bun,
    price: 3,
    isSingleElem: true,
    cssValues: {
      height: 80,
      mobileHeight: 40,
      bottomDifference: 40,
      mobileBottomDifference: 20,
      initialBottomDifference: 0,
      mobileInitialBottomDifference: 10
    },
  },
];