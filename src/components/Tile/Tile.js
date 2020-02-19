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
        // this.setState ({
        //     isActive: false,
        //     isMatched: false
        // })
        
        
        // this.setState({
        //     cardNumber: Math.ceil(Math.random() * 8),
        // })
    }

    handleClick(){
        
        
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }


    
    render() {
        return (
            <div className="Tile" onClick={this.handleClick}>
                <div className="image-container">
                    <img src={`./img/animal${this.props.cardNumber}.png`} alt="card"/>
                    <p>{this.props.cardNumber} Active: {this.state.isActive ? 'true' : 'false'} Matched: {this.state.isMatched ? 'true' : 'false'}</p>
                </div>
            </div>
        )
    }
};

export default Tile;