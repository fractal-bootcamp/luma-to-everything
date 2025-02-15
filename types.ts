

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