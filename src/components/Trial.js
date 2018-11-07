import React from 'react';

const FreeTrial = () => {
  return (
    <div className="trial">
      <div className="trial__container">
        <div className="trial__info-block">
          <h3 className="trial__title">Start your free trial</h3>
          <p className="trial__description">
            Start your 30-day free trial of the Sponsored Products Optimizer. All features included.
          </p>
        </div>
        <div className="trial__email-form">
          <form className="email__form" method="POST" action="#">
            <input type="email" className="email__input" name="email" placeholder="Enter your email"></input>
            <button type="submit" className="email__submit-btn">Get Started</button>
          </form>
          <ul className="trial__start-list">
            <li className="trial__start-item">30-Day Free Trial</li>
            <li className="trial__start-item">Starting at $99/month</li>
            <li className="trial__start-item">Credit Card Required</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FreeTrial;