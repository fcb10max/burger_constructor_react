import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .infoBlock {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
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
  }

  .ingredientsCarousel {
    width: 90%;
    overflow-x: hidden;
    position: relative;
    border-radius: 10px;
    margin: 20px 0;

    ::before {
      display: ${(props) => (props.isLeftBorder ? "none" : "block")};
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 100%;
      background-image: linear-gradient(to right, #00000022, #ffffff00);
    }
    ::after {
      display: ${(props) => (props.isRightBorder ? "none" : "block")};
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 20px;
      height: 100%;
      background-image: linear-gradient(to right, #ffffff00, #00000022);
    }

    /*  */
    .carouselWrapper {
      display: flex;
      height: 200px;
      overflow-x: scroll;

      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .item {
      flex: 1;
      width: auto;
      height: auto;
      margin: 20px;
      padding: 0 20px;
      border: 1px solid #f0f7fa;
      border-radius: 32px;

      display: flex;
      max-width: 150px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .item > .img {
      width: fit-content;
      width: 90%;
      img {
        width: 100%;
        height: auto;
      }
    }

    .item > .name > p {
      font-family: "Open-Sans", sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 0;
      margin: 20px 0;
      color: #1f2939;
      text-transform: capitalize;
    }

    .item > .quantity {
      display: flex;
      justify-content: center;
      align-items: center;

      .increment,
      .decrement {
        width: fit-content;
        height: fit-content;
        span {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          color: ${props => props.isTopBunPut ? `#949BA6` : `#5243C2`};
          background-color: #f5f5ff;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s linear, color 0.3s linear;

          :hover {
            background-color: ${props => props.isTopBunPut ? `#949BA6` : `#5243C2`};
            color: #f5f5ff;
          }
        }
      }
      .number {
        margin: 0 10px;
      }
    }
  }
  button {
    width: 90%;
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

    &.cancel {
      background-color: red;
    }

    :hover {
      background-color: #473aa6;

      &.cancel {
        background-color: #ff4d4f;
      }
    }
  }

  p.price {
    margin: 10px 0;
    font-size: 36px;
    font-weight: 800;
    color: #5243c2;
  }
`;
