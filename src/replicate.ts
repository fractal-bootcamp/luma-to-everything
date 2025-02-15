import Replicate from "replicate";
import fs from "fs";
import { exec } from "child_process";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN
});

// Fixes __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSingleVideo(prompt: string, index: number): Promise<string> {
    const input = {
        prompt,
        aspect_ratio: "16:9",
        frames: 97,
        negative_prompt: "low quality, worst quality, deformed, distorted, watermark"
    };

    console.log(`Generating video ${index + 1}...`);

    const output = await replicate.run(
        "lightricks/ltx-video:8c47da666861d081eeb4d1261853087de23923a268a69b63febdf5dc1dee08e4",
        { input }
    );

    if (!Array.isArray(output) || !output[0]) {
        throw new Error("Expected output to be an array of video URLs");
    }

    const videoUrl = output[0]; // Get the MP4 URL
    console.log(`Downloading video ${index + 1} from: ${videoUrl}`);

    const response = await fetch(videoUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch video from URL: ${videoUrl}`);
    }

    const fileName = `output_${index}.mp4`;
    const filePath = path.resolve(__dirname, fileName);
    const fileStream = fs.createWriteStream(filePath);

    await new Promise<void>((resolve, reject) => {
        response.body?.pipe(fileStream);
        response.body?.on("error", reject);
        fileStream.on("finish", resolve);
    });

    console.log(`Saved as ${fileName}`);
    return filePath;
}

export async function generateVideo(prompts: string[]): Promise<string> {
    const videoFiles: string[] = [];

    // Generate videos sequentially (to avoid overloading API)
    for (let i = 0; i < prompts.length; i++) {
        try {
            const videoPath = await generateSingleVideo(prompts[i], i);
            videoFiles.push(videoPath);
        } catch (error) {
            console.error(`Failed to generate video for prompt ${i + 1}:`, error);
        }
    }

    if (videoFiles.length === 0) {
        throw new Error("No videos were generated successfully.");
    }

    console.log("All videos downloaded. Stitching them together...");

    const outputFileName = "final_video.mp4";
    const outputFilePath = path.resolve(__dirname, outputFileName);

    // Create an input text file for ffmpeg
    const ffmpegInputFile = path.resolve(__dirname, "video_list.txt");
    fs.writeFileSync(ffmpegInputFile, videoFiles.map(file => `file '${file}'`).join("\n"));

    // Run ffmpeg to concatenate the videos
    await new Promise<void>((resolve, reject) => {
        exec(`ffmpeg -f concat -safe 0 -i "${ffmpegInputFile}" -c copy "${outputFilePath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error stitching videos: ${stderr}`);
                reject(error);
            } else {
                console.log(`Final video saved as ${outputFileName}`);
                resolve();
            }
        });
    });

    console.log("Process complete.");
    return outputFilePath;
}
