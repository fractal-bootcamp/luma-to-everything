import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import mockLumaPostDTO from './mockLumaPost';
import type { LumaPostDTO } from './lumaTypes';
const model = google('gemini-1.5-flash-latest', {
    // cachedContent: undefined,
    // structuredOutputs: undefined,
    // safetySettings: undefined,
    useSearchGrounding: false, // allows the model to use search results to generate the response
});



// "ANDREW:"
// 1. make a mock LumaPostDTO that is actually valid by reading from the actual luma page
// 1b. prompt engineering work to make sure the video script is 98% JUICY!!!!
// OR generate 3-4 scripts and pick the best one maximizing JUICYNESS
// 2. use the vercel AI SDK to convert the LumaPostDTO to a video script
export const getVideoScript = async (lumaPostDTO: LumaPostDTO): Promise<string> => {

    const result = await generateText({
        model: model,
        prompt: "Write a tiktok brainrot video script for the following luma event: " + JSON.stringify(lumaPostDTO)
    })
    console.log(result)
    return result.text
}