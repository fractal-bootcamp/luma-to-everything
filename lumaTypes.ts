import type { lumaFullEventExample } from "./src/lumaFullEvent";

export type LumaFullEventType = typeof lumaFullEventExample

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
    