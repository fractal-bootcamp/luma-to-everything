import Replicate from "replicate";
import fs from "node:fs";
import fetch from "node-fetch";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN
});

export async function generateVideo() {
const input = {
    prompt: "A woman with long brown hair and light skin smiles at another woman with long blonde hair. The woman with brown hair wears a black jacket and has a small, barely noticeable mole on her right cheek. The camera angle is a close-up, focused on the woman with brown hair's face. The lighting is warm and natural, likely from the setting sun, casting a soft glow on the scene. The scene appears to be real-life footage.",
    aspect_ratio: "16:9",
    negative_prompt: "low quality, worst quality, deformed, distorted, watermark"
};

// Run Replicate's AI model
const output = await replicate.run(
    "lightricks/ltx-video:8c47da666861d081eeb4d1261853087de23923a268a69b63febdf5dc1dee08e4",
    { input }
);

// Output will likely be a URL to the generated MP4 video
for (const [index, url] of Object.entries(output)) {
    console.log(`Downloading video from: ${url}`);
    
    // Fetch the video from the given URL
    const response = await fetch(url);
    const fileStream = fs.createWriteStream(`output_${index}.mp4`);

    if (!response.body) {
        throw new Error(`Failed to download video: ${url}`);
    }
    
    await new Promise<void>((resolve, reject) => {
        response.body?.pipe(fileStream);
        response.body?.on("error", reject);
        fileStream.on("finish", () => resolve()); // Fix here
    });

    console.log(`Saved as output_${index}.mp4`);
}
}