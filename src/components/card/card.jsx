import React from 'react';
import './card.css';
import { SocialIcon } from 'react-social-icons'

const Card = ({ title, url }) => {
  return (
    <div>
        <a className='card' target='blank' href={url}>
            <SocialIcon bgColor='#ffffff10' fgColor='#F2F4FE' url={url} />
            <p>{title}</p>
        </a>
    </div>
  );
};

export default Card;
