import * as React from "react";
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  CardActions
} from "@material-ui/core";
import cx from "classnames";
import { IRegularCard } from "./IRegularCard";

export default class RegularCard extends React.Component<IRegularCard> {
  static defaultProps = {
    headerColor: "purple",
    classes: {}
  }

  constructor(props: IRegularCard) {
    super(props);
  }

  render() {
    const {
      classes,
      headerColor,
      plainCard,
      cardTitle,
      cardSubtitle,
      content,
      footer
    } = this.props;
    const plainCardClasses = cx({
      [" " + classes.cardPlain]: plainCard
    });
    const cardPlainHeaderClasses = cx({
      [" " + classes.cardPlainHeader]: plainCard
    });
    return (
      <Card className={classes.card + plainCardClasses}>
        <CardHeader
          classes={{
            root:
              classes.cardHeader +
              " " +
              classes[headerColor + "CardHeader"] +
              cardPlainHeaderClasses,
            title: classes.cardTitle,
            subheader: classes.cardSubtitle
          }}
          title={cardTitle}
          subheader={cardSubtitle}
        />
        <CardContent>{content}</CardContent>
        {footer !== undefined ? (
          <CardActions className={classes.cardActions}>{footer}</CardActions>
        ) : null}
      </Card>
    );
  }
}