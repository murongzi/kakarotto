import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';


import App from './components/Layer/App';
import HelloWorld from './container/Hello/Hello';
import Home from './container/Home/Home';
import List from './container/List/List';
import './styles/main.scss';

/* let dom: JSX.Element = <HelloWorld compiler="TypeScript" framework="React"/> */

ReactDOM.render(
    <Provider store={store}>
        <App>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/hw' component={HelloWorld} />
                    <Route path='/ls' component={List} />
                </Switch>
            </HashRouter>
        </App>
    </Provider>,
    document.getElementById('root'));


/* class Hello {
    private str: string = "hahah";
    constructor() {}

}

new Hello; */
