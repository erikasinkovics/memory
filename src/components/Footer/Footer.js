import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="Scores">
                    <h2>Matches</h2>
                    <h3>{this.props.scoreCount}</h3>
                </div>
                <div className="NewGameButton" onClick={this.props.resetBoard}>
                    <h2>Play Again!</h2>
                </div>
            </div>
        )
    }
}

export default Footer;