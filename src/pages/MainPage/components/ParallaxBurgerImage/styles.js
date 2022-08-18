import styled from "styled-components";
import bg from "../../../../assets/png/burger_bg.png";

export const Container = styled.div`
  width: auto;
  height: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: relative;

  & > div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    img {
      position: relative;
      width: 100%;
      height: auto;
    }
  }
  .top_bun {
    left: 20%;
    top: 5%;
    z-index: 10;
    img {
      transform: rotate(30deg);
      width: 60%;
    }
  }

  .mayos {
    img:first-child {
      width: 50%;
      left: 19%;
      top: 18%;
      z-index: 9;
      transform: rotate(27deg) scaleX(-1);
    }
  }

  .salads {
    img:first-child {
      width: 50%;
      top: 11%;
      left: 10%;
      transform: rotate(25deg);
      z-index: 8;
    }
  }

  .cucumbers {
    img {
      width: 20%;
      z-index: 7;
    }
  }
  .cucumbers > img:nth-child(1) {
    top: 22%;
    left: 15%;
    transform: rotate(15deg);
  }
  .cucumbers > img:nth-child(2) {
    top: 19.5%;
    left: 5%;
    transform: rotate(25deg);
  }
  .cucumbers > img:nth-child(3) {
    top: 26%;
    left: -7%;
    transform: rotate(-15deg);
  }
  .cucumbers > img:nth-child(4) {
    top: 28%;
    left: -3%;
    transform: rotate(35deg);
  }

  .tomatos {
    img {
      width: 20%;
      z-index: 6;
    }
  }
  .tomatos > img:nth-child(1) {
    width: 15%;
    top: 35%;
    left: -10%;
    transform: rotate(45deg);
  }
  .tomatos > img:nth-child(2) {
    top: 22%;
    left: 15%;
    transform: rotate(15deg);
  }
  .tomatos > img:nth-child(3) {
    top: 22%;
    left: 15%;
    transform: rotate(15deg);
  }
  .tomatos > img:nth-child(4) {
    top: 22%;
    left: 15%;
    transform: rotate(15deg);
  }
  /*  .onions > img {
    height: 25px;
    width: auto;
    z-index: 4;
  }
  .onions > img:nth-child(1) {
    height: 15px;
    right: 30px;
    top: 135px;
    transform: rotate(15deg);
  }
  .onions > img:nth-child(2) {
    height: 10px;
    right: 120px;
    top: 180px;
    transform: rotate(15deg);
  }
  .onions > img:nth-child(3) {
    height: 25px;
    right: 170px;
    top: 210px;
    transform: rotate(-15deg);
  }
  .onions > img:nth-child(4) {
    height: 25px;
    right: 170px;
    top: 200px;
    transform: rotate(15deg);
  }
  .onions > img:nth-child(5) {
    height: 25px;
    right: 300px;
    top: 230px;
    transform: rotate(15deg);
  }
  .onions > img:nth-child(6) {
    height: 15px;
    right: 330px;
    top: 180px;
    transform: rotate(-15deg);
  }
  .cutlet > img {
    height: 65px;
    width: auto;
    right: 110px;
    top: 150px;
    transform: rotate(-10deg);
    z-index: 1;
  }
  .cheese > img {
    height: 50px;
    width: auto;
    right: 100px;
    top: 240px;
    transform: rotate(-15deg);
    z-index: 3;
  }
  .salads > img:last-child {
    height: 85px;
    width: auto;
    top: 235px;
    right: 100px;
    z-index: 2;
  }
  .mayos > img:last-child {
    height: 50px;
    width: auto;
    right: 130px;
    top: 290px;
    transform: rotate(-8deg);
    z-index: 2;
  }
  .bottom_bun > img {
    height: 63px;
    width: auto;
    right: 130px;
    top: 295px;
    transform: rotate(-8deg);
    z-index: 2;
  } */
  .emojis > img {
    width: auto;

    :nth-child(1) {
      height: 50px;
      left: 200px;
      bottom: 120px;
      animation: moveEmoji1 5s linear infinite alternate;
    }
    :nth-child(2) {
      height: 40px;
      right: 70px;
      bottom: 320px;
      animation: moveEmoji2 1s linear infinite alternate;
    }
    :nth-child(3) {
      height: 30px;
      right: 50px;
      bottom: 250px;
      animation: moveEmoji3 1s linear infinite alternate;
    }
    :nth-child(4) {
      width: 30px;
      left: 150px;
      bottom: 270px;
      animation: moveEmoji4 1s linear infinite alternate;
    }
  }

  @keyframes moveEmoji1 {
    25% {
      left: 100px;
      bottom: 100px;
    }
    50% {
      left: 200px;
      bottom: 50px;
    }
    75% {
      left: 300px;
      bottom: 90px;
    }
    100% {
      left: 200px;
      bottom: 120px;
    }
  }
  @keyframes moveEmoji2 {
    100% {
      right: 50px;
      bottom: 300px;
    }
  }
  @keyframes moveEmoji3 {
    100% {
      right: 30px;
      bottom: 270px;
    }
  }
  @keyframes moveEmoji4 {
    100% {
      left: 130px;
      bottom: 250px;
    }
  }
`;
