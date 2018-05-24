import PropTypes from "prop-types";
import * as React from "react";

export interface IRegularCard{
    cardTitle: React.ReactNode;
    cardSubtitle: React.ReactNode;
    content: React.ReactNode;
    footer?: React.ReactNode;
    plainCard?: boolean;
    classes?: any;
    headerColor?: "orange"|"green"|"red"|"blue"|"purple";
}
