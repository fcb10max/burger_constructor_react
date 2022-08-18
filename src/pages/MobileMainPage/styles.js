import styled from "styled-components";
import burger from "../../assets/png/burger-img.png"

export const Main = styled.div`
  width: 90%;
  margin: 0 auto;
  z-index: 1;
  h1 {
    font-family: sans-serif;
    color: #1f2939;
    font-weight: 500;
    font-size: 48px;
  }

  .mobileBurgerImg {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${burger});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    a {
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #5243C2;
      border: none;
      color: #fff;
      border-radius: 50%;
      text-transform: uppercase;
      text-decoration: none;
      transition: background-color 0.3s linear;

      :hover {
        background-color: #473AA6;
      }
    }
  }
`;
