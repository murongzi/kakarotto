import * as React from 'react';

export interface IHWProps {
    compiler: string,
    framework: string
}

//let abc: Array<number> = [1, 2, 3];
/* console.log(abc.includes(2)); */


export default class HelloWorld extends React.Component<IHWProps, {}> {
    constructor(props: IHWProps, context: any) {
        super(props, context);
    }

    onHandleClick = () => {
        //console.log('test');
    }

    render() {
        return <div onClick={this.onHandleClick}>{this.props.compiler} + {this.props.framework}</div>
    }
}
