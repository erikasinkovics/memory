import React from 'react';
import './TileFront.css';


function TileFront(props) {
    
    return (
        <div className="TileFront" onClick={() => props.onClick(props.tileId, props.tileNumber)}>
             <img src={`./img/animal${props.tileNumber}.png`}/>
        </div>
    )
    
};


export default TileFront;