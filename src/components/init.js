import React from 'react';
import styles from './init.module.css';

class Init extends React.Component {
    render() {
        const {start, letsGo, count, player} = this.props;

        return (
            <div className={styles.block}>
                {!letsGo &&
                    <div>
                        <p className={styles.namePlayer}>Nome do jogador</p>
                        <input className={styles.player} type="text" onChange={(e) => {player(e)}} />
                        <button className={styles.button} type="button" onClick={start}>Começar</button>
                    </div>
                }

                {letsGo &&
                    <p className={styles.counter}>{count}</p>
                }
            </div>
        )
    }
}

export default Init;
