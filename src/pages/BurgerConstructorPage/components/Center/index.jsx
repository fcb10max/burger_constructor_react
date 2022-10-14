import React, { useState, useEffect } from "react";
import { SingleElem, Main, MultipleElem } from "./styles";

const Center = ({ ingredients, data, isMobile = false }) => {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    if (!data.length) return setRenderData([]);
    const objArr = [];
    let lastHeight = 0;
    data.forEach((currValue) => {
      const currIngData = ingredients.find((el) => el.name === currValue);

      if (objArr.length > 1) {
        !isMobile
          ? (lastHeight =
              objArr[objArr.length - 1].cssValues.bottom +
              objArr[objArr.length - 1].cssValues.height)
          : (lastHeight =
              objArr[objArr.length - 1].cssValues.bottom +
              objArr[objArr.length - 1].cssValues.mobileHeight);
      } else if (objArr.length === 1) {
        !isMobile
          ? (lastHeight =
              objArr[objArr.length - 1].cssValues.initialBottom +
              objArr[objArr.length - 1].cssValues.height)
          : (lastHeight =
              objArr[objArr.length - 1].cssValues.mobileInitialBottom +
              objArr[objArr.length - 1].cssValues.mobileHeight);
      }
      const obj = {
        name: currValue,
        image: currIngData.image,
        isSingleElement: currIngData.isSingleElem,
        cssValues: {
          ...currIngData.cssValues,
          bottom: !isMobile
            ? Number(lastHeight - currIngData.cssValues.bottomDifference)
            : Number(lastHeight - currIngData.cssValues.mobileBottomDifference),
          initialBottom: !isMobile
            ? Number(currIngData.cssValues.initialBottom)
            : Number(currIngData.cssValues.mobileInitialBottom),
        },
      };
      objArr.push(obj);
    });
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
