import React from 'react';
import './Footer.css';
import Scores from '../Scores/Scores';
import NewGameButton from '../NewGameButton/NewGameButton';


function Footer() {
    return (
        <div className="Footer">
            <Scores />
            <NewGameButton />
        </div>
    
    )

};


export default Footer;