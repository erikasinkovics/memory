import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group'; // ES6


import './TileContainer.css';

import TileFront from '../TileFront/TileFront';
import TileBack from '../TileBack/TileBack';
import tileData from './tileData'; 


class TileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scoreCount: 0,
            tiles: tileData.map(tile => {
                return {
                    isActive: false,
                    tileId: tile.id,
                    tileNumber: tile.number,
                    isMatched: false
                }
            })
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(tileId, tileNumber) {
        const tiles = [...this.state.tiles]; // The state object is copied in to the 'tiles' auxiliary object.
        let newScoreCount = this.state.scoreCount;
        
        if (tiles[tileId].isActive === true){
            return; // Meaning: cards already flipped cannot be flipped back.
        }
        
        tiles[tileId].isActive = !tiles[tileId].isActive; // Clicked tiles (identified basen on 'tileId') are made active (initial state is 'isActive: false').
        
        const check = this.state.tiles.filter(item => item.isActive === true && item.isMatched === false);
        
        // Active (but unmatched) tiles are filtered out and are pushed into this new array.

        if (check.length === 2 && check[0].tileNumber === check[1].tileNumber ) {
            tiles[check[0].tileId].isMatched = true;
            tiles[check[1].tileId].isMatched = true;
            newScoreCount += 2;
        
        // If the length of the 'check' array (i.e. number of active tiles) is 2, the two cards are being compared to see if they have the same image on. If so, their 'isMatched' state is set to true and the 'scoreCount' is increased.  

        } else if (check.length === 2 && check[0].tileNumber !== check[1].tileNumber ) {
            tiles[check[0].tileId].isActive = false;
            tiles[check[1].tileId].isActive = false;
       
        // Unidentical tiles are flipped back upside down ('isActive' state is set back to 'false').

        }

        this.props.scoreCountUpdater(newScoreCount); // The scoreCountUpdate() function is invoked with the 'newScoreCount' passed in as an argument.
        this.setState({tiles: tiles }); // The 'tiles' object is being set as the state of the TileContainer component.
        this.setState({scoreCount: newScoreCount})
        

    }

    render() {
        // The deck of tiles are being conditionally renderred depending on the tile component's 'matched' and 'active' properties.
        const deck = this.state.tiles.map((tile, index) => {
            if (tile.isActive === false) {
                return (
                <div key={tile.tileId}>
                    <TileBack 
                        key={tile.tileId}
                        tileId={tile.tileId}
                        onClick={this.handleClick}
                        tileNumber={tile.tileNumber}
                        matched={tile.isMatched}
                        active={tile.isActive} />

                <p>ID: {tile.tileId} || num: {tile.tileNumber} <br/> active: {tile.isActive ? 'true' : 'false'} <br/> matched: {tile.isMatched ? 'true' : 'false'}</p>
                </div>
                )
            } else {
                return (
                <div key={tile.tileId}>
                    <TileFront 
                        key={tile.tileId}
                        tileId={tile.tileId}
                        onClick={this.handleClick}
                        tileNumber={tile.tileNumber}
                        matched={tile.isMatched}
                        active={tile.isActive}/>

                    <p>ID: {tile.tileId} || num: {tile.tileNumber} <br/> active: {tile.isActive ? 'true' : 'false'} <br/> matched: {tile.isMatched ? 'true' : 'false'}</p>
                </div>
                )
            }
        });


        return (
            <div>
                <div className="TileContainer" scorecount={this.state.scoreCount} allmatched={this.state.scoreCount === 16 ? 'true' : 'false'}>
                    {deck}
                </div>
                <div className="youWon" allmatched={this.state.scoreCount === 16 ? 'true' : 'false'}>
                    <h1>Congrats! You've matched all the cards!</h1>
                    <h2>Click 'Play Again!' to start a new game!</h2>
                </div> 
            </div>
         );
    }
    
};

export default TileContainer;