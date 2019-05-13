import React from "react";
import { Event as MeetupEvent } from "../common/model";
import { Card, CardContent, Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Grid, Typography, withStyles, WithStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RSVPs from "./RSVPs";

const styles = (theme: any) => ({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  });

interface Props extends WithStyles<typeof styles> {
    accessToken: string;
    event: MeetupEvent;
    expanded: string | null;
    onChange: (eventId: string) => (event: any, expanded: boolean) => void; 
}

const Event: React.FunctionComponent<Props> = (props: Props) => {
    
    const { classes } = props;
    
    return (
        <ExpansionPanel expanded={props.expanded === props.event.id} onChange={props.onChange(props.event.id)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{`Event Name: ${props.event.name}`}</Typography>
            <Typography className={classes.secondaryHeading}>{`Time: ${props.event.local_date} - ${props.event.local_time}`}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {/* Meetup event API return event description as HTML, so need to use "dangerouslySetInnerHTML to display it as HTML*/}
            <Grid container spacing={24}>

              <Grid item xs={8}>
                <Card>
                  <CardContent >
                    <Typography variant="body1" align="left" dangerouslySetInnerHTML={{__html: props.event.description}}>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={4}>
                <Grid container spacing={24}>
                  <Grid item xs={12}>
                    <Card >
                      <CardContent >
                        <Typography variant="h5" component="h2">
                            Venue: {props.event.venue.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {`${props.event.venue.address_1}, ${props.event.venue.city}, ${props.event.venue.state}, ${props.event.venue.zip}`}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Divider/>
                  <Grid item xs={12}>
                    <Card >
                      <CardContent >
                        <RSVPs accessToken={props.accessToken} eventId={props.event.id}></RSVPs>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default withStyles(styles)(Event);