import styled from "styled-components";

export const HeaderComponent = styled.div`
  position: ${props=>props.mobileMenuActive ? "fixed" : "flex"};
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  z-index: 2;
  
  .wrapper {
    width: 90%;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }
  .wrapper > .left,
  .wrapper > .right {
    display: flex;
    align-items: center;

    .mobile_menu {
      display: none;
    }
  }
  .left > .logo {
    width: 50px;
    height: 50px;
    background-color: #f5f5ff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    span {
      color: #5243c2;
      font-size: 20px;
    }
  }
  .left > a {
    width: fit-content;
    height: 48px;
    font-size: 16px;
    text-decoration: none;
    font-weight: 600;
    line-height: 16px;
    color: #1f2939;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    box-sizing: border-box;

    :hover {
      border-bottom: 1px solid #5243c2;
    }
  }

  .right > button {
    font-size: 16px;
    font-weight: 600;
    padding: 10px 15px;
    background-color: #ffeded;
    color: #ff4d4f;
    border: 1px solid #ff4d4f;
    border-radius: 20px;
    margin-right: 40px;
    cursor: pointer;
  }

  .right > p {
    margin-right: 40px;
  }
  .right > span {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f5f5ff;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .right > button {
      margin: 0;
    }

    .wrapper > .left > a,
    .wrapper > .right > p,
    .wrapper > .right > span {
      display: none;
    }

    .wrapper > .left {
      flex: 3;
    }
    .wrapper > .right {
      flex: 5;
      justify-content: space-between;
    }

    .wrapper > .right > .mobile_menu {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f5f5ff;
      border-radius: 50%;
      transition: background-color 0.3s linear, color 0.3s linear;
      position: relative;
      cursor: pointer;

      :hover {
        background-color: #5243c2;
        path {
          fill: #f5f5ff;
        }
      }

      & > span {
        position: absolute;
        left: 45%;
        top: 37%;
        width: 3px;
        height: 15px;
        background-color: #5243c2;
        transform: rotate(45deg);
        transition: background-color 0.3s linear;

        ::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 3px;
          height: 15px;
          background-color: #5243c2;
          transform: rotate(90deg);
          transition: background-color 0.3s linear;
        }
      }
      :hover > span,
      :hover > span::after {
        background-color: #f5f5ff;
      }
    }
  }

  @media (max-width: 500px) {
    .wrapper > .left {
      flex: 1;
    }
    .wrapper > .right {
      flex: 2;

      button {
        font-size: 12px;
      }
    }
  }
`;
