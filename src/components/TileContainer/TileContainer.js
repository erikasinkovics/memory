import React from 'react';
import './TileContainer.css';

import TileFront from '../TileFront/TileFront';
import TileBack from '../TileBack/TileBack';
import tileData from './tileData'; 
// import Win from '../Win/Win';



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
        const tiles = [...this.state.tiles];
        let newScoreCount = this.state.scoreCount;
        
        if (tiles[tileId].isActive === true){
            return;
        }
        
        tiles[tileId].isActive = !tiles[tileId].isActive;
        
        const check = this.state.tiles.filter(item => item.isActive === true && item.isMatched === false);
        
        if (check.length === 2 && check[0].tileNumber === check[1].tileNumber ) {
            tiles[check[0].tileId].isMatched = true;
            tiles[check[1].tileId].isMatched = true;
            newScoreCount += 2;

        } else if (check.length === 2 && check[0].tileNumber !== check[1].tileNumber ) {
            tiles[check[0].tileId].isActive = false;
            tiles[check[1].tileId].isActive = false;
        }

        this.props.scoreCountUpdater(newScoreCount);
        this.setState({tiles: tiles });
        this.setState({scoreCount: newScoreCount})
        
    }

    render() {
        const deck = this.state.tiles.map((tile, index) => {
            if (tile.isActive === false) {
                return (
                <div>
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
                <div>
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
            <div className="TileContainer" scoreCount={this.state.scoreCount} allMatched={this.state.scoreCount === 16 ? 'true' : 'false'}>
               {deck}
               <div className="youWon">
                    
               </div>
            </div>
         );
    }
    
};

export default TileContainer;