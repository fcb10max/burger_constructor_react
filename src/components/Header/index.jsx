import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderComponent } from "./styles";
import userAvatar from "../../assets/svg/user_avatar.svg";
import phoneIcon from "../../assets/svg/phone.svg";
import { useEffect } from "react";

const Header = ({ setMoblieMenuActive, mobileMenuActive }) => {
  const location = useLocation().pathname;

  const menuClickHandler = (e) => {
    setMoblieMenuActive((prevValue) => !prevValue);
  }

  useEffect(() => {
    if (mobileMenuActive) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [mobileMenuActive])

  return (
    <HeaderComponent mobileMenuActive={mobileMenuActive}>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <span>a</span>
          </div>
          <Link
            to="/"
            style={{
              borderBottom: location === "/" ? "1px solid #5243c2" : "",
            }}
          >
            Discover
          </Link>
          <Link
            to="/constructor"
            style={{
              borderBottom:
                location === "/constructor" ? "1px solid #5243c2" : "",
            }}
          >
            Make Your Burger
          </Link>
        </div>
        <div className="right">
          <button className="call_me_button">
            <img src={phoneIcon} alt="" /> Call Me Back
          </button>
          <p>8 800 437-87-22</p>
          <span>
            <img src={userAvatar} alt="avatar" />
          </span>
          <div
            className="mobile_menu"
            onClick={menuClickHandler}
          >
            {mobileMenuActive ? (
              <span></span>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66667 10V11.3333H1.33333V10H8.66667ZM12 5.33333V6.66666H0V5.33333H12ZM10.6667 0.666664V2H3.33333V0.666664H10.6667Z"
                  fill="#5243C2"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;
