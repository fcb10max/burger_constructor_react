import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './styles';
import visa from "../../assets/svg/visa.svg";
import mCard from "../../assets/svg/mcard.svg";
import gPay from "../../assets/svg/gpay.svg";
import aPay  from "../../assets/svg/apay.svg";
import payPal from "../../assets/svg/paypal.svg";
import bitcoin from "../../assets/svg/bitcoin.svg";
import etherum from "../../assets/svg/Etherium.svg";

const Footer = () => {
  return (
    <Container>
      <div className="left">
        <div className="text">
          <p>2022. Make Your Burger</p>
        </div>
        <div className="links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
      </div>
      <div className="right">
        <i className="payingSystem"><img src={visa} alt="visa" /></i>
        <i className="payingSystem"><img src={mCard} alt="master card" /></i>
        <i className="payingSystem"><img src={gPay} alt="google pay" /></i>
        <i className="payingSystem"><img src={aPay} alt="apple pay" /></i>
        <i className="payingSystem"><img src={payPal} alt="paypal" /></i>
        <i className="payingSystem"><img src={bitcoin} alt="bitcoin" /></i>
        <i className="payingSystem"><img src={etherum} alt="etherum" /></i>
      </div>
    </Container>
  )
}

export default Footer