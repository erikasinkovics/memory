import React from 'react';
import './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isMatched: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
    }

    handleClick(){
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }


    
    render() {
        const inactiveStyle = {
           
            
        };

        const activeStyle = {
            backgroundColor: "red",
            
        
        };

        const matchedStyle = {

            
        };


        return (
            <div className="Tile" onClick={this.handleClick} style={this.state.isActive ? activeStyle : inactiveStyle} >
                <div className="image-container">
                    <img src={`./img/animal${this.props.cardNumber}.png`} alt="card" style={this.state.isActive ? {display: "inline-block"} : {display: "none"}}/>
                    <p>{this.props.cardNumber} Active: {this.state.isActive ? 'true' : 'false'} Matched: {this.state.isMatched ? 'true' : 'false'}</p>
                </div>
            </div>
        )
    }
};

export default Tile;