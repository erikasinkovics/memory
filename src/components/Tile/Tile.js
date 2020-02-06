import React from 'react';
import './Tile.css';
import Img from './img/019-jellyfish.png'


function Tile() {
    return (
        <div className='Tile'>
            <div className='image-container'>
                <img src={Img}/>
            </div>
        </div>
    )
};

export default Tile;