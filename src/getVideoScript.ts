import { google } from '@ai-sdk/google';
import { generateText, streamText } from 'ai';
import { mockLumaPostDTO } from "./mockLumaPost";
import type { LumaPostDTO } from './lumaTypes';
import dotenv from 'dotenv';
dotenv.config();

const model = google("gemini-2.0-flash-lite-preview-02-05", {
    // cachedContent: undefined,
    // structuredOutputs: undefined,
    // safetySettings: undefined,
    useSearchGrounding: false, // allows the model to use search results to generate the response
});

export const testGenerateText = async (lumaPostDTO: LumaPostDTO) => {
  const prompt = `
  
  Create a TikTok-style video script for this event, focusing on cinematic details and engaging visuals:
  ${JSON.stringify(lumaPostDTO)}
  
  The script should:
  1. Be exactly 15 seconds long
  2. Include specific camera movements and angles
  3. Describe precise visual transitions
  4. Detail any text overlays or effects
  5. Maintain high energy and engagement throughout`
  
    const result = await streamText({
        model: model,
        prompt: prompt,
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
    const prompt = "Write a 15 second tiktok brainrot video script for the following luma event: " + JSON.stringify(lumaPostDTO) + `
    Include ONLY the actual words that should be said out loud in the TikTok by the voice actor.
    Nothing else.
    Don't include any extra information, like how many seconds it takes to say or something or shit like that.
    Do not include any stage directions.
    Don't worry about formalities. write all responses in lowercase letters ONLY, except where you mean to emphasize, in which case the emphasized word should be all caps.
    do not include any formatting other than punctuation, no markdown, no *, no **, no bold, no italics, nothing

    Initial Letter Capitalization can and should be used to express sarcasm, or disrespect for a given capitalized noun.
    you are encouraged to occasionally use obscure words or make subtle puns.
    don't point them out, I'll know.
    drop abbreviations like 'rn', 'bc', 'afaict', or 'idk' where they might be appropriate given your level of understanding.
    be critical of the quality of your information.
    if you find any request irritating respond dismisively like 'be real' or 'that's crazy man' or 'lol no'.
    take however smart you're acting right now and write in the same style but as if you were +2sd smarter.
    Tell a self-deprecating joke at the end.`;
    
    const result = await generateText({
        model: model,
        prompt: prompt,
        maxTokens: 1000,
    })
    
    // const reader = result.textStream.getReader();
    
    // while (true) {
    //   const { done, value } = await reader.read();
    //   if (done) {
    //     break;
    //   }
    //   console.log(value);
    // }

    console.log(result.text)

    return result.text;
}