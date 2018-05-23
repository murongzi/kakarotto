import './styles/main.scss';
import Home from './container/Home/';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './container/App';

ReactDOM.render(
    <App>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </HashRouter>
    </App>,
    document.getElementById('root')
);