import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderComponent } from "./styles";
import userAvatar from "../../assets/svg/user_avatar.svg"
import phoneIcon from "../../assets/svg/phone.svg"

const Header = () => {
  const location = useLocation().pathname;

  return (
    <HeaderComponent>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <span>a</span>
          </div>
          <Link to="/" style={{borderBottom: location === "/" ? "1px solid #5243c2" : ""}}>Discover</Link>
          <Link to="/make_burger" style={{borderBottom: location === "/make_burger" ? "1px solid #5243c2" : ""}}>Make Your Burger</Link>
        </div>
        <div className="right">
          <button className="call_me_button"><img src={phoneIcon} alt="" /> Call Me Back</button>
          <p>8 800 437-87-22</p>
          <span><img src={userAvatar} alt="avatar" /></span>
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;
