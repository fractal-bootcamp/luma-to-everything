import { createRevidVideo, defaultCreationParams, getVideoStatus } from "../src/video/revidExample";

async function testRevid() {
    const webhook = 'https://example.com/webhook';

    try {
        const video = await createRevidVideo(webhook, defaultCreationParams);
        if (!video) {
            throw new Error("Video creation failed");
        }
        if (!video.pid) {
            throw new Error("Video PID is undefined");
        }

        console.log("Video created successfully with PID:", video.pid);

        // Wait for a short time to allow the video to start processing
        await new Promise(resolve => setTimeout(resolve, 5000));

        const status = await getVideoStatus(video.pid);
        if (!status) {
            throw new Error("Video status retrieval failed");
        }
        if (!status.status) {
            throw new Error("Video status is undefined");
        }

        console.log("Video created successfully with status:", status.status);
    } catch (error: any) {
        console.error("Test failed:", error);
    }
}

await testRevid();

