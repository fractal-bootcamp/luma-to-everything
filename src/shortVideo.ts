import type { LumaPostDTO } from "../types"


export type VideoFrame = {
    image: string;
    script: string;
    duration: number;
}

export type VideoFile = {
    file: string;
    duration: number;
}

export type AudioFile = {
    file: string;
    duration: number;
}


// RESEARCH 1: Which text -> video process?
// test a bunch of text -> video models
// test a bunch of text -> frame and text -> audio models
// identify the best model for converting luma events into brainrot videos and/or hype videos


// 1. make a mock LumaPostDTO that is actually valid by reading from the actual luma page
// 1b. prompt engineering work to make sure the video script is 98% JUICY!!!!
// OR generate 3-4 scripts and pick the best one maximizing JUICYNESS
// 2. use the vercel AI SDK to convert the LumaPostDTO to a video script
export const getVideoScript = (lumaPostDTO: LumaPostDTO): string => {
    return "mock video script"
}

// ERI:
// RESEARCH 2: Get Royalty Free Music via API
// IDEALLY: find some way to get "tags" or "the vibe" of the music and a lot of random options
// then use the vercel AI SDK to choose which music is the most appropriate for that event.
export const getRoyaltyFreeMusic = (lumaPostDTO: LumaPostDTO): string => {
    return "mock royalty free music"
}



export const getNarrationAudioFile = (videoFrames: VideoFrame[]): AudioFile => {
    // take in the video frames
    // somehow get a perfect narration for each frame
    // stitch them together
    // return a audio file with an exact duration matching the video duration
    return {
        file: "mock_narration.mp3",
        duration: 10
    }
}

// use the Luma Event Image
// figure out how to animate the images or whatever
// maybe put in an AI actor? who is talking in front of the event image?
// maybe the AI actor is also like a Fractal Tech mascot or something non-human??
export const getFrames = (lumaPostDTO: LumaPostDTO, videoScript: string): VideoFrame[] => {
    return []
}

export const animateFrames = (frames: VideoFrame[]): VideoFile => {
    return {
        file: "mock_animation.mp4",
        duration: 10
    }
}

export const stitchVideo = (videoFrames: VideoFrame[], narrationAudioFile: AudioFile): VideoFile => {
    return {
        file: "mock_stitched_video.mp4",
        duration: 10
    }
}

export const narrateVideo