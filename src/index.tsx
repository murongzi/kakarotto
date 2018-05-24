import './styles/main.scss';
import Home from './container/Home/';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import store from './store'

import App from './container/App';

ReactDOM.render(
    <Provider store={store}>
        <App>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </HashRouter>
        </App>
    </Provider>,
    document.getElementById('root')
);