import styled from "styled-components";

export const HeaderComponent = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
  }
  .wrapper > .left,
  .wrapper > .right {
    display: flex;
    align-items: center;
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
    font-size: 16px;
    font-weight: 600;
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
`;
