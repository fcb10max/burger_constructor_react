import { Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
import BurgerConstructorPage from "./pages/BurgerConstructorPage";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/make_burger" element={<BurgerConstructorPage/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
