import React from 'react';
import './App.css';

import TileContainer from '../TileContainer/TileContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App (props) {
  return (
    <div className="App" >
      <Header />
      <TileContainer key={'1'} matchedCount={props.matchedCount}/>
      <Footer />
    </div>
  );
}

export default App;
