import React from 'react';
import styles from './scene.module.css';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveValue: 0
        }
    }

    componentDidMount() {
        const actions = {
            moveLeft: () => {
                this.setState({moveValue: this.state.moveValue - 40});
                document.querySelector(`.${styles.car}`)
                document.querySelector(`.${styles.car}`).setAttribute('style', `transform: translateX(${this.state.moveValue}px)`);
            },
            moveRight: () => {
                this.setState({moveValue: this.state.moveValue + 40});
                document.querySelector(`.${styles.car}`).setAttribute('style', `transform: translateX(${this.state.moveValue}px)`);
            },
            moveCenter: () => {
                if (this.state.moveValue !== 0) {
                    if (this.state.moveValue >= 0 && this.state.moveValue >= 40) {
                        this.setState({moveValue: this.state.moveValue - 40});
                    } else  {
                        this.setState({moveValue: this.state.moveValue + 40});
                    }
                    document.querySelector(`.${styles.car}`).setAttribute('style', `transform: translateX(${this.state.moveValue}px)`);
                }
            }
        }

        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 65 || e.keyCode === 37) {
                actions.moveLeft();
            } else if (e.keyCode === 68 || e.keyCode === 39) {
                actions.moveRight();
            } else if (e.keyCode === 83 || e.keyCode === 40) {
                actions.moveCenter();
            }
        }); 
    }

    render() {
        const {player} = this.props;

        return (
            <div className={styles.scene}>
                <div className={styles.car}></div>
                <p className={styles.player}>{player}</p>
            </div>
        )
    }
}

export default Car;
