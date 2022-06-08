import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 10px auto;
  flex-wrap: wrap;

  .item {
    flex: 1;
    width: 140px;
    height: 183px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 18px;
    border: 1px solid #f0f7fa;
    border-radius: 32px;
    margin: 0 20px;
  }

  .item > .img {
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100px;
      height: auto;
    }
  }

  .item > .title > h4 {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 14px;
    color: #1f2939;
    text-align: center;
    text-transform: capitalize;
  }

  .item > .countBlock {
    display: flex;
    align-items: center;
  }
  .item > .countBlock > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 50%;
    background-color: #f5f5ff;
    color: #5243c2;
    margin: 10px;
    transition: color 0.3s linear, background-color 0.3s linear;

    :hover {
      background-color: #5243c2;
      color: #f5f5ff;
    }
  }
`;