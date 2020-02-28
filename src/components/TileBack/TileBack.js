import React from 'react';
import './TileBack.css';

function TileBack(props) {
    
    return (
        <div 
            className="TileBack"
            onClick={() => props.onClick(props.tileId, props.tileNumber)}>
           
        </div>
    )
    
};



export default TileBack;