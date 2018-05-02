import * as React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

export interface IHWProps {
    compiler: string,
    framework: string
}

let abc: Array<number> = [1, 2, 3];

/* class Button extends React.Component {
    static contextTypes = {
        color: PropTypes.string,
        color2: PropTypes.string
    }

    constructor(props: IHCProps){super(props);}

    render() {
        return <button>{this.context.color}-{this.context.color2}</button>
    }
}

export interface IHCProps {
    theme?: string
}
class HC extends React.Component<IHCProps>{

    static childContextTypes = {
        color2: PropTypes.string
    }
    static contextTypes = {
        color: PropTypes.string
    }
    getChildContext() {
        return {
            color2: 'red2'
        }
    }

    constructor(props: IHCProps){super(props);}

    render() {
        return <div>HC<Button/></div>
    }
} */

export default class HomeComponment extends React.Component<IHWProps, {}> {
    private name: string = "123123";

    /* static childContextTypes = {
        color: PropTypes.string
    }

    getChildContext() {
        return {
            color: 'red'
        }
    } */

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
