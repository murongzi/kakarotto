import './style.scss';
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ListIcon from '@material-ui/icons/List';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import DraftsIcon from '@material-ui/icons/Drafts';
import { ILeftMenu } from './ILeftMenu';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: "#2ca8ff"
    },
    icon: {
        color: '#fff'
    }
});

export default withStyles(styles)(class LeftMenu extends React.Component<ILeftMenu> {
    constructor(props: ILeftMenu) {
        super(props);
    }

    render() {

        const { classes } = this.props;
        return (
            <div className={classes.root + ' leftMenu'}>
                <List component="nav">
                    {/* <ListItem button>
                        <ListItemIcon className={classes.icon}>
                            <ListIcon/>
                        </ListItemIcon>
                    </ListItem> */}

                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                            <div className="leftMenu-user">
                                <img src="https://creativetimofficial.github.io/now-ui-dashboard-pro-react/static/media/ryan.f217f346.jpg" />
                            </div>
                        </ListItemIcon>
                        <ListItemText primary="个人姓名" className="leftMenu-custom"/>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                            <LibraryBooksIcon/>
                        </ListItemIcon>
                        <ListItemText primary="影像云列表页" className="leftMenu-custom"/>
                    </ListItem>
                    {/* <Divider />
                    <ListItem button>
                        <ListItemIcon className={classes.icon}>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" className="leftMenu-custom"/>
                    </ListItem> */}
                </List>
            </div>
        )
    }
})