
import React from 'react'
import {AboutItem} from './AboutCard.styles';

const AboutCard = ({aboutItem}) => {
    const {id,title,details,icon,iconName} = aboutItem;
  return (
    <AboutItem>
        <div className="about-card">
            <div className="card-number">{id}</div>
            <div className="card-icon"><img src={icon} alt={iconName} /></div>
            <h3 className="h3 about-card-title">{title}</h3>
            <p className='about-card-text'>{details}</p>
        </div>
    </AboutItem>
  )
}

export default AboutCard