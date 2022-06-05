import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .left {
    display: flex;
    align-items: center;
  }

  .left > .text {
    margin-right: 20px;
  }

  .left > .links > a {
    padding: 0 10px;
    color: #5243c2;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }

    :first-child {
      border-right: 1px solid #949ba6;
    }
  }

  .right > i {
    margin-right: 10px;
  }
`;