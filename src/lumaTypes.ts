import type { lumaCalResponse } from "../examples/exampleLumaCalGet";
import type { lumaFullEventExample } from "./lumaFullEvent";

export type LumaCalendarResponse = typeof lumaCalResponse

export type LumaFullEventType = typeof lumaFullEventExample

export type LumaPostDTO = {
    title: string;
    image: string;
    plaintext_description: string;
    time: string;
    location: string;
    visibility: "private" | "public";
    keywords: string[];
    audience: string;
    total_rsvps: number;
    total_capacity: number;
    host: string;
    event_type: "Hackathon" | "Networking" | "Cozy" | "Entertainment/Fun" | "Lectures/Workshops" | "Coworking" | "Classes" | "Community Events";
}

export type LumaEventSummaryType ={
    api_id: string;
    calendar_api_id: string;
    cover_url: string;
    end_at: string;
    event_type: string;
    hide_rsvp: boolean;
    location_type: string;
    name: string;
    one_to_one: boolean;
    recurrence_id: string | null;
    show_guest_list: boolean;
    start_at: string;
    timezone: string;
    url: string;
    user_api_id: string;
    visibility: string;
    waitlist_enabled: boolean;
    virtual_info: {
        has_access: boolean;
    };
    geo_longitude: string;
    geo_latitude: string;
    geo_address_info: {
        mode: string;
        city_state: string;
    };
    geo_address_visibility: string;
    }
    