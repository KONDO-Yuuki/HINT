import React, {Component} from 'react';
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    card: {
        width: 275,
        height: 150
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});

class HintCard extends Component {

    render() {
        const { classes, title, text } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography type="headline" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography type="body1">
                            {text}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(HintCard);
;