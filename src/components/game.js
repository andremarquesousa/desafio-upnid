import React from 'react';
import styles from './game.module.css';
import Init from './init';
import Scene from './scene';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            letsGo: false,
            count: 3
        }
        this.startGame = this.startGame.bind(this)
    }

    startGame() {
        this.setState({letsGo: !this.state.start})

        const counter = setInterval(()=>{
            if (this.state.count <= 0) {
                clearInterval(counter);
                this.setState({start: !this.state.start})
            } else {
                this.setState({count: this.state.count -= 1});
            }
        }, 1000);
    }

    render() {
        return (
            <div className={styles.game}>
                {!this.state.start &&
                    <Init start={this.startGame} letsGo={this.state.letsGo} count={this.state.count} />
                }
                {this.state.start &&
                    <Scene />
                }
                {this.state.letsGo &&
                    <p>{this.state.count}</p>
                }
            </div>
        )
    }
}

export default Game;
