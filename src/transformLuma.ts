import type { LumaFullEventType, LumaPostDTO } from "./lumaTypes";
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { generateObject } from 'ai';
import { z } from 'zod';
import { lumaFullEventExample } from './lumaFullEvent'

// ERIC:
// grab the lumaDescriptionMirror
// use vercel AI sdk with deepseek or geminiflash (fastest, cheapest models)
// to convert the lumaDescriptionMirror to a plaintext description
// return the plaintext description
export const getLumaEventDescription = async (lumaDescriptionMirror: LumaFullEventType["description_mirror"]): Promise<string> => {
    const { text } = await generateText({
        model: google('gemini-1.5-flash'),
        prompt: `Convert this event description to clear, concise plaintext, preserving all important details: ${JSON.stringify(lumaDescriptionMirror)}`,
    });

    return text;
}

// ERIC:
// take in the lumaFullEvent
// MAYBE: strip the description_mirror from the lumaFullEvent to make a "SimplifiedLumaFullEventType"
// take in the plainTextDescription
// use vercel AI sdk with deepseek or geminiflash (fastest, cheapest models)
// to convert the plainTextDescription and the lumaFullEvent to a LumaPostDTO
// return the LumaPostDTO
export const transformLumaPostDTO = async (lumaFullEvent: LumaFullEventType, plainTextDescription: string): Promise<LumaPostDTO> => {
    const { object } = await generateObject({
        model: google('gemini-1.5-flash'),
        schema: z.object({
            title: z.string(),
            image: z.string(),
            plaintext_description: z.string(),
            time: z.string(),
            location: z.string(),
            visibility: z.enum(['private', 'public']),
            keywords: z.array(z.string()),
            audience: z.string(),
            total_rsvps: z.number(),
            total_capacity: z.number(),
            host: z.string(),
            event_type: z.enum([
                'Hackathon',
                'Networking',
                'Cozy',
                'Entertainment/Fun',
                'Lectures/Workshops',
                'Coworking',
                'Classes',
                'Community Events'
            ])
        }),
        prompt: `Based on this event information, generate a structured event object:
            Full Event: ${JSON.stringify(lumaFullEvent)}
            Description: ${plainTextDescription}`,
    });

    return object;
}
