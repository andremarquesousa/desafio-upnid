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
                this.state.moveValue -= 40;
                document.querySelector(`.${styles.car}`)
                document.querySelector(`.${styles.car}`).setAttribute('style', `transform: translateX(${this.state.moveValue}px)`);
            },
            moveRight: () => {
                this.state.moveValue += 40;
                document.querySelector(`.${styles.car}`).setAttribute('style', `transform: translateX(${this.state.moveValue}px)`);
            },
            moveCenter: () => {
                if (this.state.moveValue != 0) {
                    if (this.state.moveValue >= 0 && this.state.moveValue >= 40) {
                        this.state.moveValue -= 40;
                    } else  {
                        this.state.moveValue += 40;
                    }
                    document.querySelector(`.${styles.car}`).setAttribute('style', `transform: translateX(${this.state.moveValue}px)`);
                }
            }
        }

        document.addEventListener('keydown', function(e) {
            console.log(e.keyCode);

            if (e.keyCode == 65) {
                actions.moveLeft();
            } else if (e.keyCode == 68) {
                actions.moveRight();
            } else if (e.keyCode == 83) {
                actions.moveCenter();
            }
        }); 
    }

    render() {
        return (
            <div className={styles.scene}>
                <div className={styles.car}>
                </div>
            </div>
        )
    }
}

export default Car;
