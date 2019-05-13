import {Event, RSVP} from "../common/model";

const CORS: RequestMode = "cors";
const EventURL = `https://api.meetup.com/reactjs-dallas/events`;
const RSVPURL = (eventId: string) => `https://api.meetup.com/reactjs-dallas/events/${eventId}/rsvps`;

export class MeetupAPIClient {

    static of(accessToken: string): MeetupAPIClient {
        return new MeetupAPIClient(accessToken);
    }

    private constructor(private accessToken: string) {}

    private options = (accessToken: string) => { 
        return {
            method: "GET",
            mode: CORS,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            }
        } 
    }

    getEvents(): PromiseLike<Event[]> {
        return window.fetch(EventURL, this.options(this.accessToken))
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error(`Error fetching evnets: ${response.statusText}`);
                }
            }).catch(error => {
                console.error(error);
            }
        );
    }

    getRSVPs(eventId: string): PromiseLike<RSVP[]> {
        return window.fetch(RSVPURL(eventId), this.options(this.accessToken))
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error(`Error fetching RSVPs: ${response.statusText}`);
                }
            }).catch(error => {
                console.error(error);
            }
        );
    }
}