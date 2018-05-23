import './style.scss';
import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <IconButton
                    aria-label="First Page"
                >
                    {<FirstPageIcon />}
                </IconButton>
                <IconButton
                    aria-label="Previous Page"
                >
                    {<KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    aria-label="Next Page"
                >
                    {<KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    aria-label="Last Page"
                >
                    {<LastPageIcon />}
                </IconButton>
            </div>
        );
    }
}