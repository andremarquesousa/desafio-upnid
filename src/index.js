import React from 'react';
import ReactDOM from 'react-dom';
import './general/base.css';
import * as serviceWorker from './serviceWorker';
import Game from './components/game';

const Layout = (
    <Game />
);

ReactDOM.render(Layout, document.getElementById('general'));
serviceWorker.unregister();