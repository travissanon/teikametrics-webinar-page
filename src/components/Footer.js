import React from 'react';
import logo from '../logo.svg';
import logoMobile from '../logo-mobile.svg';

import facebook from '../assets/social/facebook.svg';
import twitter from '../assets/social/twitter.svg';
import linkedin from '../assets/social/linkedin.svg';
import youtube from '../assets/social/youtube.svg';
import angelco from '../assets/social/angelco.svg';
import heart from '../assets/icons/heart.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__nav-wrapper">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="/" class="footer__nav-subitem-category">Optimize for</a>
              <ul className="footer__nav-sublist">
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Teikametrics Flywhel</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Sponsored Products</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Insite for FBA</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Expert Partner Services</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Expert Campaign Launch</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">SPO Managed Services</a>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <a href="/" class="footer__nav-subitem-category">Sellers</a>
            </li>
            <li className="footer__nav-item">
              <a href="/" class="footer__nav-subitem-category">Agencies</a>
            </li>
            <li className="footer__nav-item">
              <a href="/" class="footer__nav-subitem-category">Company</a>
              <ul className="footer__nav-sublist">
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Who We Are</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Careers</a>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <a href="/" class="footer__nav-subitem-category">Resources</a>
              <ul className="footer__nav-sublist">
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Blogs</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Webinars</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Ebooks</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">TeikaTV</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">SP Optimizer - Help Center</a>
                </li>
                <li className="footer__nav-subitem">
                  <a href="/" class="footer__nav-subitem-link">Insite - Help Center</a>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <button className="footer__submit-btn">Get a free demo</button>
            </li>
          </ul>
        </div>
        <div className="footer__closure-wrapper">
          <div className="footer__logo-group">
            <a href="/" class="footer__logo-link">
              <img src={logo} className="app-logo" alt="logo" />
              <img src={logoMobile} className="app-logo-mobile" alt="logo-mobile" />
            </a>
            <div class="footer__copyrights">
              Copyright © 2015-17 teikametrics
            </div>
          </div>
          <div className="footer__closure-group">
            <div className="footer__terms-group">
              <ul class="footer__terms-list">
                <li className="footer__terms-item">
                  <a href="/contact-us" class="footer__terms-link">Privacy Policy</a>
                </li>
                <li className="footer__terms-item">
                  <a href="/contact-us" class="footer__terms-link">Terms & Conditions</a>
                </li>
              </ul>
              <strong className="footer__author">
                Made with
                <img src={heart} className="footer__author-icon" alt="heart"/>
                in Boston
              </strong>
            </div>
            <ul className="footer__social-group">
              <li className="footer__social-item">
                <a className="footer__social-link" href="/" target="_blank">
                  <i className="footer__social-icon-wrapper">
                    <img src={facebook} className="footer__social-icon-wrapper" alt="facebook"/>
                  </i>
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="/" target="_blank">
                  <i className="footer__social-icon-wrapper">
                    <img src={twitter} className="footer__social-icon-wrapper" alt="twitter"/>
                  </i>
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="/" target="_blank">
                  <i className="footer__social-icon-wrapper">
                    <img src={linkedin} className="footer__social-icon-wrapper" alt="linkedin"/>
                  </i>
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="/" target="_blank">
                  <i className="footer__social-icon-wrapper">
                    <img src={youtube} className="footer__social-icon-wrapper" alt="youtube"/>
                  </i>
                </a>
              </li>
              <li className="footer__social-item">
                <a className="footer__social-link" href="/" target="_blank">
                  <i className="footer__social-icon-wrapper">
                    <img src={angelco} className="footer__social-icon-wrapper" alt="angelco"/>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;