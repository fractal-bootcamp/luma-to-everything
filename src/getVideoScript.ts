import { google } from '@ai-sdk/google';
import { generateText, streamText } from 'ai';
import type { LumaPostDTO } from './lumaTypes';
import dotenv from 'dotenv';
dotenv.config();


const videoPromptingTips = `
📝 Prompt Engineering

When writing prompts, focus on detailed, chronological descriptions of actions and scenes. Include specific movements, appearances, camera angles, and environmental details - all in a single flowing paragraph. Start directly with the action, and keep descriptions literal and precise. Think like a cinematographer describing a shot list. Keep within 200 words. For best results, build your prompts using this structure:

Start with main action in a single sentence
Add specific details about movements and gestures
Describe character/object appearances precisely
Include background and environment details
Specify camera angles and movements
Describe lighting and colors
Note any changes or sudden events
See examples for more inspiration.

🎮 Parameter Guide

Resolution Preset: Higher resolutions for detailed scenes, lower for faster generation and simpler scenes
Seed: Save seed values to recreate specific styles or compositions you like
Guidance Scale: 3-3.5 are the recommended values
Inference Steps: More steps (40+) for quality, fewer steps (20-30) for speed`

const model = google('gemini-2.0-flash-lite-preview-02-05', {
    // cachedContent: undefined,
    // structuredOutputs: undefined,
    // safetySettings: undefined,
    useSearchGrounding: false, // allows the model to use search results to generate the response
});

export const testGenerateText = async (lumaPostDTO: LumaPostDTO) => {
  const prompt = `Using these video prompting guidelines:
  ${videoPromptingTips}
  
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
    const prompt = `Using these video prompting guidelines:
    ${videoPromptingTips}
    
    Create a TikTok-style video script for this event, focusing on cinematic details and engaging visuals:
    ${JSON.stringify(lumaPostDTO)}
    
    The script should:
    1. Be exactly 15 seconds long
    2. Include specific camera movements and angles
    3. Describe precise visual transitions
    4. Detail any text overlays or effects
    5. Maintain high energy and engagement throughout`


    const result = streamText({
        model: model,
        prompt: prompt,
        maxTokens: 1000,
        // onChunk({ chunk }) {
        //     console.log(chunk); // new chunk of text
        //   },
        onFinish({ finishReason }) {
            console.log(finishReason); // your error logging logic here
          },
        onError({ error }) {
            console.error(error); // your error logging logic here
          },
    })
    
    const reader = result.textStream.getReader();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      console.log(value);
    }

    return result.text;
}

export const getVideoScript_NO_PROMPT_ENG = async (lumaPostDTO: LumaPostDTO): Promise<string> => {
    const prompt = "Write a 15 second tiktok brainrot video script for the following luma event: " + JSON.stringify(lumaPostDTO);
    
    const result = streamText({
        model: model,
        prompt: prompt,
        maxTokens: 1000,
        onFinish({ finishReason }) {
            console.log(finishReason); // your error logging logic here
          },
        onError({ error }) {
            console.error(error); // your error logging logic here
          },
    })
    
    const reader = result.textStream.getReader();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      console.log(value);
    }

    return result.text;
}