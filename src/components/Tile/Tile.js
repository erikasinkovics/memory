import React from 'react';
import './Tile.css';
import Img from './img/019-jellyfish.png'


class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: 0,
            isActive: false,
            isMatched: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            cardNumber: Math.ceil(Math.random() * 8),
        })
    }

    handleClick(){
        this.setState({
            isActive: true
        })
        console.log('I was clicked.');
        console.log(this.state.isActive);
    }
    
    render() {
        return (
            <div className='Tile' onClick={this.handleClick}>
                <div className='image-container'>
                    <img src={Img}/>
                    <p>{this.state.cardNumber}</p>
                </div>
            </div>
        )
    }
};

export default Tile;