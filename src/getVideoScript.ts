import { google } from '@ai-sdk/google';
import type { LumaPostDTO } from '../types';

const model = google('gemini-2.0-flash-latest');

// "ANDREW:"
// 1. make a mock LumaPostDTO that is actually valid by reading from the actual luma page
// 1b. prompt engineering work to make sure the video script is 98% JUICY!!!!
// OR generate 3-4 scripts and pick the best one maximizing JUICYNESS
// 2. use the vercel AI SDK to convert the LumaPostDTO to a video script
export const getVideoScript = (lumaPostDTO: LumaPostDTO): string => {
    return "mock video script"
}