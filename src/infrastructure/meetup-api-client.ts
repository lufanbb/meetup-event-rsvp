import {Event, RSVP} from "../common/model";

const CORS: RequestMode = "cors";
const EventURL = (accessToken: string) => `https://api.meetup.com/reactjs-dallas/events?access_token=${accessToken}`;
const RSVPURL = (accessToken: string, eventId: string) => `https://api.meetup.com/reactjs-dallas/events/${eventId}/rsvps?access_token=${accessToken}`;
const OPTIONS = {
    method: "GET",
    mode: CORS
}

export class MeetupAPIClient {

    static of(accessToken: string): MeetupAPIClient {
        return new MeetupAPIClient(accessToken);
    }

    private constructor(private accessToken: string) {}

    private options = () => { 
        return 
    }

    getEvents(): PromiseLike<Event[]> {
        return window.fetch(EventURL(this.accessToken), OPTIONS)
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
        return window.fetch(RSVPURL(this.accessToken,eventId), OPTIONS)
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