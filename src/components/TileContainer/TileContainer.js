import React from 'react';

import './TileContainer.css';

import TileFront from '../TileFront/TileFront';
import TileBack from '../TileBack/TileBack';
import {tileData} from './tileData';

class TileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scoreCount: 0,
            level: undefined,
            levelSelected: 'true',
            tiles: tileData(16).map(tile => {
                return {
                    isActive: false,
                    tileId: tile.id,
                    tileNumber: tile.number,
                    isMatched: false,
                }
            })
            // tiles: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }

    resetBoard() {
        this.setState({
            scoreCount: 0,
            tiles: tileData(16).map(tile => {
                return {
                    isActive: false,
                    tileId: tile.id,
                    tileNumber: tile.number,
                    isMatched: false
                }
            })
        })
    }

    handleClick(tileId, tileNumber) {
        const tiles = [...this.state.tiles]; // The state object is copied in to the 'tiles' auxiliary object.
        let newScoreCount = this.state.scoreCount;

        if (tiles[tileId].isActive === true){
            return; // Meaning: cards already flipped cannot be flipped back.
        }

        if (this.state.tiles.filter(item => item.isActive === true && item.isMatched === false).length === 2) {
            return
        }

        tiles[tileId].isActive = !tiles[tileId].isActive; // Clicked tiles (identified basen on 'tileId') are made active (initial state is 'isActive: false').
        this.setState({tiles: tiles });

        const check = this.state.tiles.filter(item => item.isActive === true && item.isMatched === false);
        // Active (but unmatched) tiles are filtered out and are pushed into this new array.

        setTimeout(() => {
            if (check.length === 2 && check[0].tileNumber === check[1].tileNumber ) {
                tiles[check[0].tileId].isMatched = true;
                tiles[check[1].tileId].isMatched = true;
                newScoreCount += 2;
                this.setState({scoreCount: newScoreCount})
            // If the length of the 'check' array (i.e. number of active tiles) is 2, the two cards are being compared to see if they have the same image on. If so, their 'isMatched' state is set to true and the 'scoreCount' is increased.
            } else if (check.length === 2 && check[0].tileNumber !== check[1].tileNumber ) {
                tiles[check[0].tileId].isActive = false;
                tiles[check[1].tileId].isActive = false;
            // Unidentical tiles are flipped back upside down ('isActive' state is set back to 'false').
            }
            this.props.scoreCountUpdater(newScoreCount); // The scoreCountUpdate() function is invoked with the 'newScoreCount' passed in as an argument.
            this.setState({tiles: tiles }); // The 'tiles' object is being set as the state of the TileContainer component.
        }, 900)
    }

    selectLevel(level) {

    }

    render() {
        // The deck of tiles are being conditionally renderred depending on the tile component's 'matched' and 'active' properties.
        const deck = this.state.tiles.map((tile) => {

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
                        </div>
                )}
        });

        return (
            <div>
                <div className="TileContainer" scorecount={this.state.scoreCount} allmatched={this.state.scoreCount === 16 ? 'true' : 'false'} >
                    {deck}
                </div>
                <div className="youWon" allmatched={this.state.scoreCount === 16 ? 'true' : 'false'}>
                    <h1>Congrats! You've matched all the cards!</h1>
                    <h2>Click 'Play Again!' to start a new game!</h2>
                </div>
                <div className="levelSelector" levelSelected={this.state.levelSelected} level={this.state.level}>
                    <div>
                        <div className="levelEasy">Easy</div>
                        <div className="levelModerate">Moderate</div>
                        <div className="levelHard">Hard</div>
                    </div>
                </div>
            </div>
         );
    }
};

export default TileContainer;
