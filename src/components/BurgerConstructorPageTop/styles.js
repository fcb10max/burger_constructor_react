import styled from "styled-components";
import burgerBg from "../../assets/png/burger_bg.png";

export const Container = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .top {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 70%;
  }

  .top > .left {
    display: flex;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 72px;
      width: 245px;
      margin: 0;
    }
  }

  .top > .center {
    width: 100%;
    height: 100%;
    background: url(${burgerBg}) no-repeat center center;
    background-size: contain;
    position: relative;

    &.active::after {
      display: block;
    }

    ::after {
      content: "🤯 You are sure?";
      position: absolute;
      top: 50px;
      right: 50px;
      background: #fff;
      border-radius: 50px;
      padding: 10px;
      color: #1f2939;
      width: 150px;
      height: 20px;
      font-size: 16px;
      text-align: center;
      display: none;
    }

    & > img#burgerBottom {
      position: absolute;
      width: 230px;
      height: auto;
      left: 80px;
      bottom: 0;
    }
    & > img.ingredient,
    & > span {
      width: 230px;
      height: auto;
      position: absolute;
      left: 80px;
      max-height: 60px;
    }

    span > img {
      width: 100px;
      height: auto;
      position: relative;
    }
  }

  .top > .right {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .top > .right > h3 {
    font-weight: 600;
    font-size: 36px;
    color: #1f2939;
    margin: 0;
  }
  .top > .right > hr {
    border: 1px solid #f5f5ff;
    margin: 40px 0;
  }
  .top > .right > .priceAndCheckoutWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    .price {
      font-weight: 800;
      font-size: 36px;
      color: #5243c2;
      font-style: normal;
    }
    .checkout {
      width: 192px;
      height: 52px;
      border: none;
      border-radius: 99px;
      background-color: #5243c2;
      color: #f5f5ff;
      font-size: 16px;
      font-weight: 600;
      transition: background-color 0.3s linear;

      :hover {
        background-color: #3b318a;
      }
    }
  }
  .top > .right > p {
    margin: 20px 0;
    span {
      color: #ff4d4f;
    }
  }

  .top > .right > .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f5f5ff;
    border-radius: 32px;
    padding: 16px;

    & > div {
      display: flex;
      align-items: center;

      i {
        margin-right: 7px;
      }
    }
  }
`;
