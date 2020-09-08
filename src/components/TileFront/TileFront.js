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
            <img alt='animal' src={require(`../../../public/img/animal${props.tileNumber}.png`)} />
        </div>
    )

};


export default TileFront;
