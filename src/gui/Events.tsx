import React, { useState, useEffect } from "react";
import Event from "./Event"
import { Event as MeetupEvent } from "../common/model"
import { MeetupAPIClient } from "../infrastructure/meetup-api-client";

type Props = {
    accessToken: string
}

export const Events :React.FunctionComponent<Props> = (props: Props) => {

    const [events, setEvents] = useState<MeetupEvent[]>([]);
    const [expanded, setExpanded] = useState<string | null>(null);

    const handleChange = (eventId: string) => (event: any, expanded: boolean) => setExpanded(expanded? eventId : null)
    

    useEffect(() => {
        MeetupAPIClient.of(props.accessToken)
            .getEvents()
            .then((events: MeetupEvent[]) => 
                setEvents(events? events : [])
            );
    }, [props.accessToken]);

    return (
        <div>
            {
                events.map(
                    (event: MeetupEvent) => 
                        <Event key={event.id} 
                            accessToken={props.accessToken} 
                            event={event} 
                            expanded={expanded} 
                            onChange={handleChange}>
                        </Event>
                    )
            }
        </div>
    )
}