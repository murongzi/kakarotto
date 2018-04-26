import * as React from 'react'
import Config from './config'

export default class ListComponment extends React.Component {
    private config = Config;

    constructor(props) {
        super(props)
    }

    onClick = () => {
        location.href = '#/hw';
    }

    renderList() {
        return this.config['results'].map((v, i) => <li key={i} onClick={this.onClick}>{v.name} ---- {v.age}</li>);
    }

    render() {
        return (
            <ul>
                {
                    this.renderList()
                }
            </ul>
        );
    }
}