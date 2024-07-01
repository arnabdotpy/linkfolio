import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './icons.css';

const Icons = () => {
  // Define your social media URLs here
  const socialMediaLinks = [
    { url: 'https://www.instagram.com/arnabroy__', network: 'instagram' },
    { url: 'https://www.twitter.com/ArnabRoy25', network: 'twitter' },
    // { url: 'https://www.youtube.com/example', network: 'youtube' },
    // { url: 'https://www.linkedin.com/in/example', network: 'linkedin' },
    // { url: 'https://www.github.com/example', network: 'github' },
    // { url: 'https://www.pinterest.com/example', network: 'pinterest' },
    // { url: 'https://www.medium.com/example', network: 'medium' },
    // { url: 'https://www.soundcloud.com/example', network: 'soundcloud' },
    // { url: 'https://www.stackoverflow.com/example', network: 'stackoverflow' },
    // { url: 'https://www.vimeo.com/example', network: 'vimeo' },
    // { url: 'https://www.snapchat.com/epic.arnab', network: 'snapchat' },
    // { url: 'https://www.reddit.com/user/ArnabRoy25', network: 'reddit' },
  ];

  return (
    <div className='socialIconWrapper'>
      {socialMediaLinks.map((link, index) => (
        <SocialIcon
          key={index}
          url={link.url}
          network={link.network}
          target="_blank"
          rel="noopener noreferrer"
          bgColor="transparent"
          fgColor='#F2F4FE'
          className='socialIcon'
          style={{ height: 40, width: 40 }}
        />
      ))}
    </div>
  );
};

export default Icons;
