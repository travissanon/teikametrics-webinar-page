import React from 'react';

import dotsLeft from '../assets/dots-left.png';
import dotsRight from '../assets/dots-right.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <img className="hero__dots dots-left" src={dotsLeft} />
        <img className="hero__dots dots-right" src={dotsRight} />
        <div className="hero__wrapper">
          <div className="hero__info">
            <div className="hero__label-wrapper">
              <small className="hero__label">Free Webinar</small>
            </div>
            <h1 className="hero__title">
              7 Simple Strategies to Build Better Sponsored Products Campaigns
            </h1>
            <p className="hero__description">Winning with Sponsored Products starts at the beginning, with well-organized and strategy focused campaign creation. </p>
            <div className="hero__group">
              <h3 className="hero__subtitle">You’ll learn how to:</h3>
              <ul className="hero__list">
                <li className="hero__item"><span>Build and manage profitable campaigns</span></li>
                <li className="hero__item"><span>Find profitable keywords you might have missed</span></li>
                <li className="hero__item"><span>Increase conversions with Sponsored Products</span></li>
                <li className="hero__item"><span>Reduce your overall wasted spend</span></li>
              </ul>
            </div>
            <div className="hero__group">
              <h3 className="hero__subtitle">Date and time</h3>
              <p className="hero__description">June 21st 2018, 3PM EST</p>
            </div>
          </div>
          <form className="hero__form">
            <h3 className="hero__form-title">Register</h3>
            <div className="hero__form-wrapper">
              <div className="hero__signin-field">
                <div className="hero__field-wrapper">
                  <label for="">First Name</label>
                  <input type="text" name="first-name" placeholder="First Name" />
                </div>
              </div>
              <div className="hero__signin-field">
                <div className="hero__field-wrapper">
                  <label for="">Last Name</label>
                  <input type="text" name="last-name" placeholder="Last Name" />
                </div>
              </div>
              <div className="hero__signin-field">
                <div className="hero__field-wrapper">
                  <label for="">Company Name*</label>
                  <input type="text" name="company-name" placeholder="Company Name" />
                </div>
              </div>
              <div className="hero__signin-field">
                <div className="hero__field-wrapper">
                  <label for="">Email*</label>
                  <input type="text" name="email" placeholder="Email" />
                </div>
              </div>
              <div className="hero__signin-field">
                <div className="hero__field-wrapper">
                  <label for="">Phone Number*</label>
                  <input type="text" name="phone-number" placeholder="Phone Number" />
                </div>
              </div>
              <div className="hero__signin-field">
                <div className="hero__field-wrapper">
                  <label for="">Monthly Amazon Marketplace Revenue*</label>
                  <input type="text" name="revenue" placeholder="Marketplace Revenue" />
                </div>
              </div>
              <div className="hero__signin-field">
                <div className="hero__field-wrapper">
                  <label for="">how much are you spending on Amazon Sponsored Products*</label>
                  <input type="text" name="expenditures" placeholder="Spend on Amazon Sponsored Products" />
                </div>
              </div>
              <button type="submit" className="hero__submit-btn">Register Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Hero;