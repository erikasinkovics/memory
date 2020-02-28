import React from 'react';
import './TileContainer.css';

import TileFront from '../TileFront/TileFront';
import TileBack from '../TileBack/TileBack';
import tileData from './tileData'; 


class TileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
        tiles[tileId].isActive = !tiles[tileId].isActive;
            this.setState({
                tiles: tiles
            })
       
        const check = this.state.tiles.filter(item => item.isActive === true);
        
        if (check.length === 2 && check[0].tileNumber === check[1].tileNumber ) {
            console.log('matched');
            tiles[check[0].tileId].isMatched = true;
            tiles[check[1].tileId].isMatched = true;
            tiles[check[0].tileId].isActive = false;
            tiles[check[1].tileId].isActive = false;
            console.log(this.state.tiles[check[0].tileId]);
            console.log(this.state.tiles[check[1].tileId]);
        } 
        
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
            <div className="TileContainer">
               {deck}
            </div>
         );
    }
};

export default TileContainer;