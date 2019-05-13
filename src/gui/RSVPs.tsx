import React, { useState, useEffect }from "react";
import { RSVP, RSVPResponse } from "../common/model";
import { MeetupAPIClient } from "../infrastructure/meetup-api-client";
import { Chip, Typography, withStyles, WithStyles } from "@material-ui/core";

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '30px',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

interface Props extends WithStyles<typeof styles> {
    accessToken: string;
    eventId: string;
}

const getCountByResponse = (response: RSVPResponse, rsvps: RSVP[]): number => {
  return rsvps
    .filter((rsvp: RSVP) => rsvp.response === response)
    .map((rsvp: RSVP) => rsvp.guests + 1)
    .reduce(
        (accumulator, currentValue) => accumulator + currentValue
        , 0
    );
}

const RSVPs :React.FunctionComponent<Props> = (props: Props) => {

    const { classes } = props;

    const [ rsvps, setRsvps ] = useState<RSVP[]>([]);

    const [yesCount, setYesCount] = useState<number>(0);
    const [noCount, setNoCount] = useState<number>(0);
    const [waitlistCount, setWaitlistCount] = useState<number>(0);

    useEffect(() => {
      MeetupAPIClient.of(props.accessToken)
        .getRSVPs(props.eventId)
        .then((rsvps: RSVP[]) => {
            console.log("All RSVPs" + JSON.stringify(rsvps))
            const yesRSVPs = getCountByResponse("yes", rsvps);
            const noRSVPs = getCountByResponse("no", rsvps);
            const waitlistRSVPs = getCountByResponse("waitlist", rsvps);
            setYesCount(yesRSVPs);
            setNoCount(noRSVPs);
            setWaitlistCount(waitlistRSVPs);
            return setRsvps(rsvps);
        });
    }, [props.accessToken]);

    return (
        <div className={classes.root}>
            <Typography variant="h5">RSVPs:</Typography>
            <Chip label={`Yes (${yesCount})`}></Chip>
            <Chip label={`No (${noCount})`}></Chip>
            <Chip label={`Waitlist (${waitlistCount})`}></Chip>
        </div>
    )
}

export default withStyles(styles)(RSVPs);