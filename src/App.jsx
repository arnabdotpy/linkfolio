import React from 'react';
import './App.css';
import Card from './components/card/card';
import Icons from './components/icons/icons';
import Header from './components/header/header';

const App = () => {
  const cardData = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/arnabroy25/' },
    { title: 'Github', url: 'https://www.github.com/arnabdotpy' },
    // {title: 'Instagram', url: 'https://www.instagram.com/arnabroy__'},
    // {title: 'Twitter', url: 'https://www.x.com/ArnabRoy25'},
  ];

  return (
    <div className="app">
      <Header />
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <Icons />
    </div>
  );
};

export default App;
