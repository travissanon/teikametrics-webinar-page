import React from 'react';
import logo from '../logo.svg';
import logoMobile from '../logo-mobile.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img src={logo} className="app-logo" alt="logo" />
        <img src={logoMobile} className="app-logo-mobile" alt="logo-mobile" />
        <div className="header__primary">
          <a href="/">Sign In</a>
          <form className="email__form" method="POST" action="#">
            <input type="email" className="email__input" name="email" placeholder="Enter your email"></input>
            <button type="submit" className="email__submit-btn">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Header;