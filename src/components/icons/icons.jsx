import React from "react";
import { SocialIcon } from "react-social-icons";
import "./icons.css";

const Icons = () => {
  // Define your social media URLs here
  const socialMediaLinks = [
    { url: "https://www.instagram.com/arnabroy__", network: "instagram" },
    { url: "https://www.twitter.com/ArnabRoy25", network: "twitter" },
    { url: "https://discord.com/users/879653127333228564", network: "discord" },
    { url: "https://www.reddit.com/user/ArnabRoy25/", network: "reddit" },
    // { url: "https://www.threads.net/@arnabroy__", network: "threads" },
    // { url: "https://diamondapp.com/u/Arnab", network: "diamond" },
  ];

  return (
    <div className="socialIconWrapper">
      {socialMediaLinks.map((link, index) => (
        <SocialIcon
          key={index}
          url={link.url}
          network={link.network}
          target="_blank"
          rel="noopener noreferrer"
          bgColor="transparent"
          fgColor="#F2F4FE"
          className="socialIcon"
          style={{ height: link.network == "reddit" ? 40 :  50, width: link.network == "reddit" ? 40 : 50 }}
        />
      ))}
    </div>
  );
};

export default Icons;
