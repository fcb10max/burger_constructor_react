import styled from "styled-components";

export const Main = styled.div`
  flex: 1;
  p {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    font-family: "Open-Sans";
    font-weight: 700;
    font-size: 72px;
    color: #1f2939;
    line-height: 80px;
  }

  @media (max-width: 1400px) {
    display: flex;

    p {
      margin: 0 10px;
    }
  }
`;
