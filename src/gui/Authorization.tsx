import React from "react";
import { config } from "../infrastructure/config";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme:any) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export const Authorization: React.FunctionComponent = (props: any) => {

    const { classes } = props;

    const callBackURL: string = window.location.href;
    const meetupClientId: string = config.meetupClientID;
    const meetupURL: string = `https://secure.meetup.com/oauth2/authorize?client_id=${meetupClientId}&response_type=token&redirect_uri=${callBackURL}`;
  
    return (
      <Button variant="contained" href={meetupURL} className={classes.button}>
        Link
      </Button>
    )
}


export default withStyles(styles)(Authorization);