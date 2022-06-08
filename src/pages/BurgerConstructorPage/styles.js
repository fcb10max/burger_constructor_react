import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .checkoutWindow {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(82, 67, 194, 0.9);
    backdrop-filter: blur(10px);
    z-index: 10;
  }

  .checkoutWindow > .container {
    background-color: #fff;
    width: 600px;
    height: 300px;
    border-radius: 20px;
    padding: 20px 0;
  }

  .container > .top {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      font-size: 20px;
    }

    .left > i {
      margin-right: 10px;
    }
    & > .right {
      width: 30px;
      height: 30px;
      position: relative;
      cursor: pointer;

      & > span {
        position: absolute;
        left: 50%;
        top: 0;
        width: 3px;
        height: 25px;
        background-color: #000;
        transform: rotate(45deg);
        transition: background-color 0.3s linear;

        ::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 3px;
          height: 25px;
          background-color: #000;
          transform: rotate(90deg);
          transition: background-color 0.3s linear;
        }
      }
      :hover > span,
      :hover > span::after {
        background-color: #777;
      }
    }
  }
  .container > .main {
    width: 90%;
    height: 70%;
    margin: 0 auto;
    display: flex;
  }

  .container > .main > div {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;

    .top,
    .bottom {
      flex: 1;
      display: flex;
      align-items: center;
      border: 1px solid #f5f5ff;
      border-radius: 16px;
      padding: 8px 16px;
      margin: 10px;
      box-sizing: border-box;

      .icon > img {
        width: 20px;
        height: 20px;
      }

      .text {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        input,
        select {
          width: 100%;
          margin-top: 10px;
          padding: 10px 15px;
          border: 1px solid #999;
          border-radius: 20px;
          box-sizing: border-box;
          font-size: 16px;
        }
      }
    }
  }

  .container > .bottom {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: end;

    button {
      width: 90px;
      height: 32px;
      font-size: 12px;
      transition: color 0.3s linear, background-color 0.3s linear;
      margin-left: 20px;
      border: none;
      border-radius: 99px;
    }

    button:first-child {
      color: rgb(82, 67, 194);
      background-color: #f5f5ff;

      :hover {
        color: #f5f5ff;
      background-color: rgb(82, 67, 194);
      }
    }
    button:last-child {
      color: #f5f5ff;
      background-color: rgb(82, 67, 194);

      :hover {
        background-color: rgb(71, 58, 166);
      }
    }
  }
`;
