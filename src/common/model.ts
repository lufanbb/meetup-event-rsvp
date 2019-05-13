import { MemberExpression } from "@babel/types";

export interface Event {
    id: string;
    name: string;
    duration: number;
    status: string;
    time: number;
    local_date: string;
    local_time: string;
    description: string;
    venue: Venue;
}

export interface Venue {
    id: string;
    name: string;
    address_1: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export type RSVPResponse = "yes" | "no" | "waitlist";

interface Photo {
    id: number;
    thumb_link: string;
}

interface Member {
    id: number;
    name: string;
    photo: Photo;
}

export interface RSVP {
    response: RSVPResponse;
    guests: number;
    member: Member;
}