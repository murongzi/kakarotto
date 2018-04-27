import * as React from 'react';
import './styles.scss';

export interface IHWProps {
    compiler: string,
    framework: string
}

let abc: Array<number> = [1, 2, 3];

export default class HomeComponment extends React.Component<IHWProps, {}> {
    private name: string = "123123";

    constructor(props: IHWProps, context){
        super(props, context)
    }

    onRedirectToList = () => {
        location.href = '#/ls';
    }

    render() {
        return (
            <div className="home">
                <div className="home-title">这是home页</div>
                <a onClick={this.onRedirectToList}>go list page</a>
                <div>{this.name}</div>
            </div>
        )
    }
}
