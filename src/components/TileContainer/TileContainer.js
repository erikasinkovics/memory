import React from 'react';
import './TileContainer.css';

import TileFront from '../TileFront/TileFront';
import TileBack from '../TileBack/TileBack';
import tileData from './tileData'; 
import Win from '../Win/Win';



class TileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matchedCount: 0,
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
        let matchedCount = this.state.matchedCount;
        
        if (tiles[tileId].isActive === true){
            return;
        }
        
        tiles[tileId].isActive = !tiles[tileId].isActive;
        
        const check = this.state.tiles.filter(item => item.isActive === true && item.isMatched === false);
        
        if (check.length === 2 && check[0].tileNumber === check[1].tileNumber ) {
            tiles[check[0].tileId].isMatched = true;
            tiles[check[1].tileId].isMatched = true;
            matchedCount += 2;

        } else if (check.length === 2 && check[0].tileNumber !== check[1].tileNumber ) {
            tiles[check[0].tileId].isActive = false;
            tiles[check[1].tileId].isActive = false;
        }

        this.setState({matchedCount: matchedCount, tiles: tiles });
        
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
            <div className="TileContainer" matchedCount={this.state.matchedCount}>
               {deck}
            </div>
         );
    }
    
};

export default TileContainer;