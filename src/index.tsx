import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HelloWorld from './components/Hello';

let dom: JSX.Element = <HelloWorld compiler="TypeScript" framework="React"/>

debugger;

const a = {a:"fadsf", b: 'fasdfasdfasdf', c:"asdfasdfasdfasdf"};

console.log({...a});

ReactDOM.render(dom, document.getElementById('root'))