import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import MainPage from "./pages/MainPage";
import BurgerConstructorPage from "./pages/BurgerConstructorPage";
import MobileMainPAge from "./pages/MobileMainPage";
import MobileConstructorPage from "./pages/MobileconstructorPage";
import { ingredients } from "./modules/getIngredients";

function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [isTopBunPut, setIsTopBunPut] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (!ref || !ref.current) return;
    if (mobileMenuActive) {
      ref.current.classList.add("active");
    }
    if (!mobileMenuActive) {
      ref.current.classList.remove("active");
    }
  }, [mobileMenuActive]);

  const [data, setData] = useState({
    kcal: 0,
    time: 0,
    price: 0,
    weight: 0,
    // get quantities value as object constructed according ingredients array
    quantities: ingredients.reduce(
      (prevVal, currVal) => ({
        ...prevVal,
        [currVal.name]: 0,
      }),
      { [ingredients[0].name]: 0 }
    ),
    arrangement: [],
  });

  return (
    <div className="app">
      <Header
        setMoblieMenuActive={setMobileMenuActive}
        mobileMenuActive={mobileMenuActive}
      />
      <div className="mobileMenuWindow" ref={ref}>
        <div className="mobileMenuWrapper">
          <p>8 800 437-87-22</p>
          <div className="links">
            <Link onClick={() => setMobileMenuActive(false)} to="/mobile">
              Discover
            </Link>
            <Link
              onClick={() => setMobileMenuActive(false)}
              to="/mobile/constructor"
            >
              Make Your Burger
            </Link>
          </div>
          <div className="userMobile">
            <i className="avatar"></i>
            <p>Anthony Thomas</p>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/constructor"
          element={
            <BurgerConstructorPage
              setIsTopBunPut={setIsTopBunPut}
              isTopBunPut={isTopBunPut}
              ingredients={ingredients}
              data={data}
              setData={setData}
            />
          }
        />
        <Route path="/mobile" element={<MobileMainPAge />} />
        <Route
          path="/mobile/constructor"
          element={
            <MobileConstructorPage
              setIsTopBunPut={setIsTopBunPut}
              isTopBunPut={isTopBunPut}
              ingredients={ingredients}
              data={data}
              setData={setData}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
