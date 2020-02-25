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
    }

    render() {

        const cards = this.state.tiles.map((tile, index) => {
            if (tile.isActive === false) {
                return <TileBack tileId={tile.tileId} onClick={this.handleClick} tileNumber={tile.tileNumber}/>
            } else {
                return <TileFront tileId={tile.tileId} onClick={this.handleClick} tileNumber={tile.tileNumber}/>
            }
        });

        return (
            <div className="TileContainer">
               {cards}
            </div>
         );
    }
};

export default TileContainer;