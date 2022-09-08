import React, { useState, useEffect } from "react";
import { SingleElem, Main, MultipleElem } from "./styles";

const Center = ({ ingredients, data, isMobile = false }) => {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    if (!data.length) return setRenderData([]);
    const objArr = [];
    let lastHeight = 0;
    data.reduce((prevValue, currValue, ind) => {
      // const prevIngData = ingredients.find((el) => el.name === prevValue);
      const currIngData = ingredients.find((el) => el.name === currValue);
      const obj = {
        name: currValue,
        image: currIngData.image,
        isSingleElement: currIngData.isSingleElem,
        cssValues: {
          ...currIngData.cssValues,
          bottom: isMobile
            ? Number(lastHeight) -
              Number(currIngData.cssValues.mobileBottomDifference)
            : Number(lastHeight) -
              Number(currIngData.cssValues.bottomDifference),
          initialBottomDifference: isMobile
            ? Number(currIngData.cssValues.mobileInitialBottomDifference)
            : Number(currIngData.cssValues.initialBottomDifference),
        },
      };
      objArr.push(obj);
      if (isMobile) {
        // add object's height
        lastHeight += currIngData.cssValues.mobileHeight;
        if (ind === 0 && obj.isSingleElement) {
          // if first ingredient is single part(not sliced) ingredient
          // then add initialBottomDifference to lastHeight
          lastHeight -= currIngData.cssValues.mobileInitialBottomDifference;
        }
        if (ind === 0 && !obj.isSingleElement) {
          // if first ingredient is multi part(sliced) ingredient
          // then remove initialBottomDifference from lastHeight
          lastHeight -= currIngData.cssValues.mobileInitialBottomDifference;
        }
        if (ind > 0 && obj.isSingleElement)
          lastHeight -= obj.cssValues.mobileBottomDifference;
        if (ind > 0 && !obj.isSingleElement)
          lastHeight -= obj.cssValues.mobileBottomDifference;
      } else if (!isMobile) {
        lastHeight += currIngData.cssValues.height;
        if (ind === 0 && obj.isSingleElement)
          lastHeight += currIngData.cssValues.initialBottomDifference;
        if (ind === 0 && !obj.isSingleElement)
          lastHeight -= currIngData.cssValues.initialBottomDifference;
        if (ind > 0) lastHeight -= currIngData.cssValues.bottomDifference;
      }
      return currValue;
    }, data[0]);
    setRenderData(objArr);
  }, [data]);

  return (
    <Main isMobile={isMobile}>
      <div className="builtBurger">
        {renderData.map((el, ind) =>
          el.isSingleElement ? (
            <SingleElem
              key={ind}
              cssValues={el.cssValues}
              isFirstElem={ind === 0 ? true : false}
            >
              <img src={el.image} alt={el.name} />
            </SingleElem>
          ) : (
            <MultipleElem
              key={ind}
              cssValues={el.cssValues}
              isFirstElem={ind === 0 ? true : false}
            >
              <img src={el.image} alt={el.name} />
              <img src={el.image} alt={el.name} />
              <img src={el.image} alt={el.name} />
            </MultipleElem>
          )
        )}
        <span className="bottomBun" />
      </div>
    </Main>
  );
};

export default Center;
