import styled from "styled-components";

export const Main = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  height: 100%;

  h1 {
    font-weight: 600;
    font-size: 36px;
    color: #1f2939;
  }

  hr {
    height: 2px;
    background-color: #f5f5ff;
    border: none;
  }

  .priceAndCheckoutBlock {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p.price {
      margin: 10px 0;
      font-size: 36px;
      font-weight: 800;
      color: #5243c2;
    }

    button {
      width: fit-content;
      height: fit-content;
      padding: 16px 32px;
      margin: 10px 0;
      font-size: 16px;
      font-weight: 600;
      border: none;
      background-color: #5243c2;
      color: #fff;
      border-radius: 99px;
      transition: background-color 0.3s linear;

      :hover {
        background-color: #473AA6;
      }
    }
  }

  .wrapper > p {
    font-size: 14px;
    font-weight: 600;
    color: #1f2939;

    span {
      color: #ff4d4f;
    }
  }

  .infoBlock {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F5F5FF;
    padding: 16px;
    border-radius: 32px;

    div {
      display: flex;
      align-items: center;
    }

    div > p {
      font-size: 14px;
      font-weight: 600;
      color: #1f2939;
      margin-left: 5px;
    }

    div > i > img {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      width: fit-content;
      margin: 0 auto;
    }
}
`;
