import React from 'react';
import './App.css';
import TileContainer from '../TileContainer/TileContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TileContainer />
      <Footer />
    </div>
  );
}

export default App;
