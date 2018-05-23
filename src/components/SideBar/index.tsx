import './style.scss';
import * as React from 'react';


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        const {className} = document.body;

        if (className.indexOf('sidebar-mini') !== -1) {
            document.body.className = '';
        } else {
            document.body.className = 'sidebar-mini';
        }
    }

    render() {
        return (
            <section className="siderbar">
                <button onClick={this.onClick}>btn</button>
            {
                this.props.children
            }
            </section>
        );
    }
}