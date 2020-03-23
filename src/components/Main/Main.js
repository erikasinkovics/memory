import React from 'react';
import './Main.css';
import TileContainer from '../TileContainer/TileContainer';
import Scores from '../Scores/Scores';
import NewGameButton from '../NewGameButton/NewGameButton';


function Main() {
  return (
      <div className="Main">
          <Scores />
          <NewGameButton />
          <TileContainer />
      </div>
      
  );
}

export default Main;
