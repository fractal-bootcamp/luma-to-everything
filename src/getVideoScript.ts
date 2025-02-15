import { google } from '@ai-sdk/google';
import { generateText, streamText } from 'ai';
import type { LumaPostDTO } from './lumaTypes';
import dotenv from 'dotenv';
dotenv.config();

const model = google('gemini-2.0-flash-lite-preview-02-05', {
    // cachedContent: undefined,
    // structuredOutputs: undefined,
    // safetySettings: undefined,
    useSearchGrounding: false, // allows the model to use search results to generate the response
});

export const testGenerateText = async () => {
    const result = await streamText({
        model: model,
        prompt: "Write a tiktok brainrot video script for the following luma event: AI Agents Hackathon: Building for Social and Marketing Use Cases",
    })
    for await (const textPart of result.textStream) {
        console.log(textPart);
    }
    return result.text
}



// "ANDREW:"
// 1. make a mock LumaPostDTO that is actually valid by reading from the actual luma page
// 1b. prompt engineering work to make sure the video script is 98% JUICY!!!!
// OR generate 3-4 scripts and pick the best one maximizing JUICYNESS
// 2. use the vercel AI SDK to convert the LumaPostDTO to a video script

export const getVideoScript = async (lumaPostDTO: LumaPostDTO): Promise<string> => {
    const prompt = "Write a tiktok brainrot video script for the following luma event: " + JSON.stringify(lumaPostDTO);

    const stream = await streamText({
        model: model,
        prompt: prompt,
        maxTokens: 100,
    });

    if (!stream) {
        throw new Error("Could not create stream");
    }

    // example: use textStream as an async iterable
    for await (const textPart of stream.textStream) {
        console.log(textPart);
    }
    return stream.text;
}