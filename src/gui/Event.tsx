import React, {useState, useEffect} from "react";

interface Props{
    accessToken: string
}

interface Event {
    id: string;
    name: string;
    duration: number;
    rsvp_limit: number;
    status: string;
    time: number;
}

const EventURL = `https://api.meetup.com/reactjs-dallas/events`;
const CORS: RequestMode = "cors";


export const Event :React.FunctionComponent<Props> = (props: Props) => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
            mode: CORS,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.accessToken}`
            }
        }
        window.fetch(EventURL, options)
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error(`Error fetching evnets`);
                }
            })
            .then(events => {
                console.log(JSON.stringify(events))
                return setEvents(events)
            });
    }, [props.accessToken]);

    return (
        <div>
            <p>
                {JSON.stringify(events)}
            </p>
        </div>
    )
}