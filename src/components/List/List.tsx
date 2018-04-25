import * as React from 'react'
import Config from './config'

export default class extends React.Component {
   /*  private str: string;
    private config = Config;
 */
    constructor(props) {
        super(props)

        let str: string = "hahahha"
    }

    onClick = () => {
        location.href = '#/hw';
    }

    renderList() {
        return Config['results'].map((v, i) => <li key={i} onClick={this.onClick}>{v.name} ---- {v.age}</li>);
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