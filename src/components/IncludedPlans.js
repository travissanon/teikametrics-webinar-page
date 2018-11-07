import React from 'react';

import dashboard from '../assets/icons/dashboard.svg';
import campaign from '../assets/icons/campaign.svg';
import keyword from '../assets/icons/keyword.svg';
import support from '../assets/icons/support.svg';
import bidding from '../assets/icons/bidding.svg';
import calendar from '../assets/icons/calendar.svg';

const IncludedPlans = () => {
  return (
    <div className="included">
      <div className="included__container">
        <h2 className="included__title">Included in all plans</h2>
        <div className="included__wrapper">
          <div className="included__plan">
            <img src={dashboard} className="included__icon" alt="dashboard icon" />
            <h3>Powerful Dashboard</h3>
            <p>All-in-one dashboard with essential key performance metrics and next-gen graphing capabilities.</p>
          </div>
          <div className="included__plan">
            <img src={campaign} className="included__icon" alt="campaign icon" />
            <h3>Unlimited SP Campaigns</h3>
            <p>No limits or maximums. Run as many Sponsored Products campaigns as you’d like.</p>
          </div>
          <div className="included__plan">
            <img src={keyword} className="included__icon" alt="keyword icon" />
            <h3>Targeted Keyword Suggestions</h3>
            <p>Easy to execute keyword actions make reducing wasted ad spend and increasing profitability simple</p>
          </div>
          <div className="included__plan">
            <img src={support} className="included__icon" alt="support icon" />
            <h3>Expert Support</h3>
            <p>Never go alone again. Take advantage of online, expert chat with our Customer Success team.</p>
          </div>
          <div className="included__plan">
            <img src={bidding} className="included__icon" alt="bidding icon" />
            <h3>Value-based Bidding</h3>
            <p>With our value-based bidding automation you’ll never pay too much (or too little) for a bid again.</p>
          </div>
          <div className="included__plan">
            <img src={calendar} className="included__icon" alt="calender icon" />
            <h3>Your Data, Your Way</h3>
            <p>Our calendar allows you to see your data in a daily, weekly, monthly, yearly, or even custom view.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncludedPlans;