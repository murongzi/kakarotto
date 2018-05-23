import './style.scss';
import * as React from 'react';
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button
} from "@material-ui/core";

import { Person, Notifications, Dashboard, Search } from "@material-ui/icons";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <div className="app-main">
                    <section className="app-main-left">left</section>
                    <section className="app-main-bd">
                        <AppBar>
                            <Toolbar>
                                <div className="app-main-bd-tb">
                                    <Button className="app-main-bd-title">这是页面标题</Button>
                                </div>
                                <Hidden smDown implementation="css">
                                    <IconButton><Person/></IconButton>
                                </Hidden>
                            </Toolbar>
                        </AppBar>
                        <main>
                            {this.props.children}
                        </main>
                        <footer></footer>
                    </section>
                </div>
                <div className="custom-container"></div>
            </div>
        );
    }
}