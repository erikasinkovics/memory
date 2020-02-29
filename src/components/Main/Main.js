import React from 'react';
import './Main.css';
import TileContainer from '../TileContainer/TileContainer';
import Scores from '../Scores/Scores';


function Main() {
  return (
      <div className="Main">
          <Scores />
          <TileContainer />
      </div>
      
  );
}

export default Main;
