import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { config } from "../infrastructure/config"

const styles = (theme:any) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

interface Props extends WithStyles<typeof styles> {}

const Authorization: React.FunctionComponent<Props> = (props: Props) => {

    const { classes } = props;

    const callBackURL: string = window.location.href;
    const meetupClientId: string = config.meetupClientID;
    const meetupURL: string = `https://secure.meetup.com/oauth2/authorize?client_id=${meetupClientId}&response_type=token&redirect_uri=${callBackURL}`;
  
    return (
      <Button variant="contained" color="secondary" href={meetupURL} className={classes.button}>
        Authenticate with Meetup to see the events
      </Button>
    )
}

export default withStyles(styles)(Authorization);