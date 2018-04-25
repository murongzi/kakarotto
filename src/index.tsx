import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Router, Route, Switch } from 'react-router-dom'

import HelloWorld from './components/Hello/Hello';
import Home from './components/Home/Home';
import List from './components/List/List';

/* let dom: JSX.Element = <HelloWorld compiler="TypeScript" framework="React"/> */

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/hw' component={HelloWorld} />
            <Route path='/ls' component={List} />
        </Switch>
    </HashRouter>,
    document.getElementById('root'));


/* class Hello {
    private str: string = "hahah";
    constructor() {}

}

new Hello; */
