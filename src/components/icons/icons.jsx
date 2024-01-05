import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Icons = () => {
  // Define your social media URLs here
  const socialMediaLinks = [
    // { url: 'https://www.facebook.com/example', network: 'facebook' },
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
    // { url: 'https://www.snapchat.com/example', network: 'snapchat' },
    // { url: 'https://www.reddit.com/example', network: 'reddit' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '300px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {socialMediaLinks.map((link, index) => (
        <SocialIcon
          key={index}
          url={link.url}
          network={link.network}
          style={{
            width: '40px',
            height: '40px',
            // margin: '0.5rem',
          }}
          target="_blank"
          rel="noopener noreferrer"
          bgColor="transparent"
          fgColor='#F2F4FE'
        />
      ))}
    </div>
  );
};

export default Icons;
