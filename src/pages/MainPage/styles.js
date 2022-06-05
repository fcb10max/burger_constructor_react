import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;

  .left {
    flex: 1;
    width: 40%;
    display: flex;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 72px;
      line-height: 80px;
      color: #1f2339;
      width: 245px;
    }
  }

  .right {
    flex: 1;
    width: 60%;

    img {
      width: auto;
      max-height: 600px;
      height: 70vh;
    }
  }

  a#button {
    position: absolute;
    bottom: 10%;
    left: 30%;
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #5243c2;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.3s linear, background-color 0.3s linear;

    &:hover {
      background-color: #3b318a;
      transform: scale(1.2);
      transform-origin: center;
    }

    p {
      font-weight: 800;
      font-size: 24px;
      color: #fff;
    }
  }
`;
