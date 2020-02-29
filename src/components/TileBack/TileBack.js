import React from 'react';
import './TileBack.css';

function TileBack(props) {
    
    return (
        <div 
            className="TileBack"
            onClick={() => props.onClick(props.tileId, props.tileNumber)}
            matched={props.matched.toString()}
            active={props.active.toString()}
            >
            
        </div>
    )
    
};



export default TileBack;