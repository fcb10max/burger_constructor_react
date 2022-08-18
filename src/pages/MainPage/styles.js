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
    min-height: 600px;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: auto;
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
    /* transition: transform 0.5s cubic-bezier(.79,2.18,0,0), */
    transition: transform 0.5s cubic-bezier(0.65, 1.95, 0.03, 0.32),
      background-color 0.3s linear;

    p {
      font-size: 10px;
      font-family: monospace;
    }

    &:hover {
      transform: scale(1.3);
      background-color: #473AA6;
    }

    p {
      font-weight: 800;
      font-size: 24px;
      color: #fff;
    }
  }
`;
