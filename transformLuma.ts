import type { LumaFullEventType } from "./lumaTypes";
import type { LumaPostDTO } from "./types";


// ERIC:
// grab the lumaDescriptionMirror
// use vercel AI sdk with deepseek or geminiflash (fastest, cheapest models)
// to convert the lumaDescriptionMirror to a plaintext description
// return the plaintext description
export const getLumaEventDescription = (lumaDescriptionMirror: LumaFullEventType["description_mirror"]): string => {
    return "This is a sample event description."
}

// ERIC:
// take in the lumaFullEvent
// MAYBE: strip the description_mirror from the lumaFullEvent to make a "SimplifiedLumaFullEventType"
// take in the plainTextDescription
// use vercel AI sdk with deepseek or geminiflash (fastest, cheapest models)
// to convert the plainTextDescription and the lumaFullEvent to a LumaPostDTO
// return the LumaPostDTO
export const transformLumaPostDTO = (lumaFullEvent: LumaFullEventType, plainTextDescription: string): LumaPostDTO => {

    return {
        title: "Sample Event",
        image: "https://example.com/sample-image.jpg",
        plaintext_description: plainTextDescription,
        time: "2025-03-06T23:00:00.000Z",
        location: "Sample Location",
        visibility: "private",
        keywords: ["sample", "event"],
        audience: "general",
        total_rsvps: 100,
        total_capacity: 200,
        host: "Sample Host",
        event_type: "Networking"
    }
}