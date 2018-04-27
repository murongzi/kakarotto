import * as React from 'react';
import './styles.scss';

export default class App extends React.Component {
    constructor(props) {super(props)}

    render() {
        return (
            <div className="app-container">
                <header className="app-container-header">header</header>
                <main className="app-container-main">
                    <div className="app-container-main-menu">menu</div>
                    <div className="app-container-main-bd">
                    {this.props.children}
                    </div>
                </main>
                {/* <footer>footer</footer> */}
            </div>
        )
    }
}