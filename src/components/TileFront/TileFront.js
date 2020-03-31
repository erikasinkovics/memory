import React from 'react';
import './TileFront.css';


function TileFront(props) {
    
    return (
        <div 
            className="TileFront"
            onClick={() => props.onClick(props.tileId, props.tileNumber)}
            matched={props.matched.toString()}
            active={props.active.toString()}
            >
            <img src={`./img/animal${props.tileNumber}.png`} alt='animal'/>
            
        </div>
    )
    
};


export default TileFront;