import * as React from 'react';
import * as IA from './interface'

interface IProps {
    list: IA.IList[]
}

export default class List extends React.Component<IProps> {
    static defaultProps = {
        list: []
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {
                    this.props.list.map((v, i) => <li key={i}>name:{v.name} --- age: {v.age}</li>)
                }
            </ul>
        )
    }
}