import { createRevidVideo, getVideoStatus, type CreationParams, defaultCreationParams } from "./revidExample";
import { getVideoScript } from "../getVideoScript";
import { type LumaPostDTO } from "../lumaTypes";
import { mockLumaPostDTO } from "../mockLumaPost";

// when it is done, store the video in a .txt log
// title:
// event title:
// url:
// createdAt:

const POLL_INTERVAL = 5000; // Check status every 5 seconds
const MAX_ATTEMPTS = 60; // Timeout after ~5 minutes

export async function useRevid(creationParams: CreationParams) {
    const webhook = "https://example.com/webhook";

    try {
        // Step 1: Request video creation
        const video = await createRevidVideo(webhook, creationParams);
        if (!video || !video.pid) {
            throw new Error("❌ Video creation failed or PID is undefined.");
        }

        console.log(`🎬 Video created successfully with PID: ${video.pid}`);

        // Step 2: Poll until video is ready
        const videoUrl = await waitForVideo(video.pid);
        if (!videoUrl) {
            throw new Error("❌ Video did not complete successfully.");
        }

        console.log(`✅ Final Video URL: ${videoUrl}`);
        return videoUrl;
    } catch (error: any) {
        console.error("❌ Test failed:", error.message);
    }
}

// Function to poll video status
async function waitForVideo(videoPid: string): Promise<string | null> {
    let attempts = 0;

    while (attempts < MAX_ATTEMPTS) {
        const status = await getVideoStatus(videoPid);

        if (!status || !status.status) {
            console.error("❌ Error retrieving video status.");
            return null;
        }

        if (status.videoUrl) {
            return status.videoUrl; // Video is ready!
        }

        console.log(`⏳ Still waiting, although status is "${status.status}"...`);

        // Wait before polling again
        await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL));
        attempts++;
    }

    console.error("❌ Video generation took too long.");
    return null;
}

// Run the function
await useRevid({...defaultCreationParams, inputText: getVideoScript(mockLumaPostDTO) + "See you at your friendly, neighborhood tech hub, fractaltech.xyz"});
