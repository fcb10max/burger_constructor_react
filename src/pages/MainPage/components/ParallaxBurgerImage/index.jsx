import React from "react";

// import styles for component
import { Container } from "./styles";

// import ingredients images
import topBun from "./../../../../assets/png/bun_top.png";
import bottomBun from "./../../../../assets/png/bun_bottom.png";
import salad from "./../../../../assets/png/salad.png";
import cucumber from "./../../../../assets/png/cucumber.png";
import tomato from "./../../../../assets/png/tomatoe.png";
import onion from "./../../../../assets/png/onion.png";
import cutlet from "./../../../../assets/png/cutlet.png";
import cheese from "./../../../../assets/png/cheese.png";
import mayo from "./../../../../assets/png/mayo.png";

// import emojis images
import explosion from "./../../../../assets/png/explosion.png";
import thumbsUp from "./../../../../assets/png/thumbsUp.png";
import heartEyed from "./../../../../assets/png/heartEye.png";
import surprise from "./../../../../assets/png/surprise.png";

const ParallaxBurgerImage = () => {
  return (
    <Container>
      <div className="top_bun">
        <img src={topBun} alt="top bun" />
      </div>
      <div className="mayos">
        <img src={mayo} alt="mayo" />
        {/* <img src={mayo} alt="mayo" /> */}
      </div>
      <div className="salads">
        <img src={salad} alt="salad" />
        {/* <img src={salad} alt="salad" /> */}
      </div>
      <div className="cucumbers">
        <img src={cucumber} alt="cucumber" />
        <img src={cucumber} alt="cucumber" />
        <img src={cucumber} alt="cucumber" />
        <img src={cucumber} alt="cucumber" />
      </div>
      <div className="tomatos">
        <img src={tomato} alt="tomato" />
        {/* <img src={tomato} alt="tomato" /> */}
        {/* <img src={tomato} alt="tomato" /> */}
        {/* <img src={tomato} alt="tomato" /> */}
      </div>
{/*      <div className="onions">
        <img src={onion} alt="onion" />
        <img src={onion} alt="onion" />
        <img src={onion} alt="onion" />
        <img src={onion} alt="onion" />
        <img src={onion} alt="onion" />
        <img src={onion} alt="onion" />
      </div>
      <div className="cutlet">
        <img src={cutlet} alt="cutlet" />
      </div>
      <div className="cheese">
        <img src={cheese} alt="cheese" />
      </div>
      <div className="emojis">
      <div className="bottom_bun">
        <img src={bottomBun} alt="bottom bun" />
      </div>
        <img src={thumbsUp} alt="thumbs up emoji" />
        <img src={explosion} alt="explosion emoji" />
        <img src={surprise} alt="surprise emoji" />
        <img src={heartEyed} alt="heart eyes emoji" />
      </div> */}
    </Container>
  );
};

export default ParallaxBurgerImage;
