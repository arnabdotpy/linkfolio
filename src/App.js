import React from 'react';
import './App.css';
import Card from './card/card';

const App = () => {
  const cardData = [ 
    {title: 'Github', url: 'https://www.github.com/arnabdotpy'},
    {title: 'LinkedIn', url: 'https://www.linkedin.com/in/arnabroy25/'},
    // {title: 'Instagram', url: 'https://www.instagram.com/arnabroy__'},
    // {title: 'Twitter', url: 'https://www.x.com/ArnabRoy25'},
  ];

  return (
    <div className="app">
      <div>
        <p className='nameText'>Arnab Roy</p>
      </div>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;
