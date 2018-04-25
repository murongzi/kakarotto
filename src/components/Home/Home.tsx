import * as React from 'react';

export interface IHWProps {
    compiler: string,
    framework: string
}

//let abc: Array<number> = [1, 2, 3];
/* console.log(abc.includes(2)); */


export default class Home extends React.Component {
    constructor(props){
        super(props)
    }

    onRedirectToList = () => {
        location.href = '#/ls';
    }

    render() {
        return (
            <div>
                <div>这是home页</div>
                <a onClick={this.onRedirectToList}>go list page</a>
            </div>
        )
    }
}
