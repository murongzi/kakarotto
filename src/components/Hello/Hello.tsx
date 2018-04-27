import * as React from 'react';
import './styles.scss';

export interface IHWProps {
    compiler: string,
    framework: string
}

export default class HelloWorldComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hello">
                <div className="hello-title">这是Hello页</div>
            </div>
        )
    }
}


/* export default class HelloWorld extends React.Component<IHWProps, {}> {
    constructor(props: IHWProps, context: any) {
        super(props, context);
    }

    onHandleClick = () => {
        //console.log('test');
    }

    render() {
        return (
            <div>
                <div>这是Hello页</div>
                <div onClick={this.onHandleClick}>{this.props.compiler} + {this.props.framework}</div>
            </div>
        )
    }
} */
