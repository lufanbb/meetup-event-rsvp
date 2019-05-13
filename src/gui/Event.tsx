import React from "react";
import {Event as MeetupEvent} from "../common/model";
import { Card, CardContent, Divider, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, withStyles, WithStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RSVPs from "./RSVPs";
import { FlexDirectionProperty } from "csstype";

const FLEX_ROW: FlexDirectionProperty = "row";

const styles = (theme: any) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column70: {
      flexBasis: '70%',
    },
    column30: {
      flexBasis: '30%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardContent: {
        display: "flex",
        flexDirection: FLEX_ROW,
        justifyContent: 'space-evenly'
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
                <Typography className={classes.column70} variant="body1" align="left" dangerouslySetInnerHTML={{__html: props.event.description}}>
                </Typography>
                <Card className={classes.column30}>
                    <CardContent >
                        <div> className={classes.cardContent}
                            <div className={classes.pos}>
                                <Typography variant="h5" component="h2">
                                    Venue: {props.event.venue.name}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {`${props.event.venue.address_1}, ${props.event.venue.city}, ${props.event.venue.state}, ${props.event.venue.zip}`}
                                </Typography>
                            </div>
                            <Divider/>
                            <RSVPs accessToken={props.accessToken} eventId={props.event.id}></RSVPs>
                        </div>
                    </CardContent>
                </Card>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default withStyles(styles)(Event);