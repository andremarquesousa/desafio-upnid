import React from 'react';
import styles from './init.module.css';

class Init extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {start, letsGo, count} = this.props;

        return (
            <div className={styles.block}>
                {!letsGo &&
                    <div>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit augue, pulvinar id faucibus quis, vulputate eget ipsum. Morbi ornare condimentum purus, viverra iaculis nunc vehicula eget. Integer a felis blandit, porta massa consectetur, vestibulum nunc. Phasellus at erat egestas, sollicitudin tortor eget, efficitur augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque ac massa ultrices, fermentum ligula vel, consequat dui. Mauris a dapibus elit. Proin orci massa, condimentum vel augue eget, pharetra rhoncus leo. Phasellus nec arcu eu ligula ullamcorper mattis ut at mauris. Nunc elementum lorem magna, eu fringilla sapien porttitor et. Nulla volutpat rutrum ipsum, nec interdum diam. Suspendisse viverra lacinia ultricies. Pellentesque ornare hendrerit vestibulum. Fusce arcu ipsum, convallis eget dictum a, maximus in dui. Aliquam erat volutpat.</p>
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
