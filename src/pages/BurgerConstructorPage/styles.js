import styled from "styled-components";

export const Main = styled.div`
  width: 95%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .constructorWindow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;

    & > .wrapper {
      flex: 3;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .ingredients {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .item {
      flex: 1;
      width: auto;
      height: auto;
      margin: 40px 20px;
      padding: 32px 20px;
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
      color: #1F2939;
      text-transform: capitalize;
    }

    .item > .quantity {
      display: flex;
      justify-content: center;
      align-items: center;

      .increment, .decrement {
        width: fit-content;
        height: fit-content;
        span {
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          color: #5243C2;
          background-color: #F5F5FF;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s linear, color 0.3s linear;

          :hover {
            background-color: #5243C2;
            color: #F5F5FF;
          }
        }
      }
      .number {
        margin: 0 10px;
      }
    }
  }

  @media (max-width: 1400px) {
    .constructorWindow {
      flex-direction: column;
    }
  }
`;
