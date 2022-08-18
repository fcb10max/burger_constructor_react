import styled from "styled-components";
import bg from "../../../../assets/png/burger_bg.png";

// import burger parts
import bottomBun from "../../../../assets/png/bun_bottom.png";

export const Main = styled.div`
position: relative;
z-index: 1;
  ${(props) => (props.isMobile ? "" : "flex: 2")};
  min-width: ${(props) => (props.isMobile ? "300px" : "480px")};
  height: 600px;
  width: ${(props) => (props.isMobile ? "80%" : "auto")};
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  .builtBurger {
    height: 100%;
    width: 55%;
    margin: 0 auto;
    position: relative;
  }
  .bottomBun {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background-image: url(${bottomBun});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  @media (max-width: 600px) {
    height: 400px;
    margin: 20px 0;
  }
`;

export const SingleElem = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  z-index: 2;
  bottom: ${(props) =>
    props.isFirstElem
      ? `${70 - Number(props.cssValues.initialBottomDifference)}px`
      : `${70 + Number(props.cssValues.bottom)}px`};
  img {
    width: 100%;
    height: ${(props) => `${props.cssValues.height}px`};
  }

  @media (max-width: 600px) {
    img {
      height: ${(props) => `${props.cssValues.mobileHeight}px`};
    }
  }
`;
export const MultipleElem = styled.div`
  width: 100%;
  height: ${(props) => `${props.cssValues.height}px`};
  position: absolute;
  left: 0;
  z-index: 2;
  bottom: ${(props) =>
    props.isFirstElem
      ? `${70 - Number(props.cssValues.initialBottomDifference)}px`
      : `${70 + Number(props.cssValues.bottom)}px`};
  img {
    width: 35%;
    height: ${(props) => `${props.cssValues.height}px`};
    position: absolute;

    :nth-child(1) {
      left: 0%;
      top: 0;
    }
    :nth-child(2) {
      left: 63%;
      top: 0;
    }
    :nth-child(3) {
      left: 33%;
      top: 20px;
    }
  }
  @media (max-width: 600px) {
    height: ${(props) => `${props.cssValues.mobileHeight}px`};
    img {
      height: ${(props) => `${props.cssValues.mobileHeight}px`};
      :nth-child(3) {
        top: 8px;
      }
    }
  }
`;
