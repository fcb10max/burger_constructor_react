import styled from "styled-components";

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
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img#main_img {
      position: relative;
      z-index: 1;
      width: 100%;
    }
    img.ingredient {
      position: absolute;
      left: 55px;
      bottom: 0;
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
