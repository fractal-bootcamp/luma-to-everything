import { generateVideo } from "./src/replicate.ts";

async function main() {
    try {
        console.log("Starting video generation...");
        await generateVideo();
        console.log("Video generation completed.");
    } catch (error) {
        console.error("Error generating video:", error);
    }
}

main();
