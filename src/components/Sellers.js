import React from 'react';

import techArmor from '../assets/sellers/tech-armor.svg';
import markCuban from '../assets/sellers/mark-cuban.svg';
import greenGobbler from '../assets/sellers/green-gobbler.svg';
import kissMyKeto from '../assets/sellers/kiss-my-keto.svg';
import hyperikon from '../assets/sellers/hyperikon.svg';
import tipseyElves from '../assets/sellers/tipsey-elves.svg';
import nutpods from '../assets/sellers/nutpods.svg';
import marathonSports from '../assets/sellers/marathon-sports.svg';
import powerPractical from '../assets/sellers/power-practical.svg';
import elizabethMott from '../assets/sellers/elizabeth-mott.svg';
import pavoi from '../assets/sellers/pavoi.svg';
import thursdayBoots from '../assets/sellers/thursday-boots.svg';

const Sellers = () => {
  return (
    <div className="sellers">
      <div className="sellers__container">
        <small class="sellers__label">
          Meet our customers
        </small>
        <h3 class="sellers__headline">
          A few of our growing list of successful Amazon sellers
        </h3>
        <ul className="sellers__list">
          <li className="sellers__item">
            <img src={techArmor} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={markCuban} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={greenGobbler} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={kissMyKeto} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={hyperikon} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={tipseyElves} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={nutpods} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={marathonSports} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={powerPractical} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={elizabethMott} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={pavoi} alt=""/>
          </li>
          <li className="sellers__item">
            <img src={thursdayBoots} alt=""/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sellers;