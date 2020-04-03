import React from 'react';
import './App.css';

import TileContainer from '../TileContainer/TileContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {scoreCount: 0};
    this.boardRef = React.createRef();
    this.resetBoard = this.resetBoard.bind(this);
    this.updateScoreCount = this.updateScoreCount.bind(this);
    
  }

  updateScoreCount(newScoreCount) {
    this.setState({scoreCount: newScoreCount});
  }

  resetBoard() {
    this.boardRef.current.resetBoard();
    this.setState({scoreCount: 0});
  }

  render() {
    return (
      <div className="App" >
      <Header />
      <TileContainer ref={this.boardRef} scoreCountUpdater={this.updateScoreCount}/>
      <Footer scoreCount={this.state.scoreCount} resetBoard={this.resetBoard}/>
      </div>

    )
  }
}

export default App;
