import React from 'react';
import './App.css';

import TileContainer from '../TileContainer/TileContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {scoreCount: 0};
    this.updateScoreCount = this.updateScoreCount.bind(this);
  }

  updateScoreCount(newScoreCount) {
    this.setState({scoreCount: newScoreCount});
  }

  render() {
    return (
      <div className="App" >
      <Header />
      <TileContainer scoreCountUpdater={this.updateScoreCount}/>
      <Footer scoreCount={this.state.scoreCount}/>
      </div>

    )
  }

}


export default App;
