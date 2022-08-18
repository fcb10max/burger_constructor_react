import React, { useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "./styles";

const MobileMainPAge = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    if (width > 800) return navigate("/");
  }, [width]);

  return <Main>
    <h1>Make Your Burger</h1>
    <div className="mobileBurgerImg">
      <Link to="/mobile/constructor">make burger</Link>
    </div>
  </Main>;
};

export default MobileMainPAge;
