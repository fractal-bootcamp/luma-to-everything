const REVID_API_KEY = "0f1f92b7-bc8c-4e83-acaa-75835cafcec5"
interface CreationParams {
    inputText: string; // The text or URL to take as main input
    hasToGenerateVoice: boolean; // Generate a voiceover to speak the inputText
    selectedVoice?: string; // Optional: An elevenLabs voice id, required if hasToGenerateVoice is true
    hasToSearchMedia: boolean; // Ask the AI to add media on the video
    mediaType?: "stockVideo" | "movingImage" | "aiVideo"; // Optional: Type of media to add, required if hasToSearchMedia is true
    generationPreset?: "DEFAULT" | "LEONARDO" | "ANIME" | "REALISM" | "ILLUSTRATION" | "SKETCH_COLOR" | "SKETCH_BW" | "PIXAR" | "INK" | "RENDER_3D" | "LEGO" | "SCIFI" | "RECRO_CARTOON" | "PIXEL_ART" | "CREATIVE" | "PHOTOGRAPHY" | "RAYTRACED" | "ENVIRONMENT" | "FANTASY" | "ANIME_SR" | "MOVIE" | "STYLIZED_ILLUSTRATION" | "MANGA"; // Optional: A preset for media generation, required if hasToSearchMedia is true
    generationUserPrompt?: string; // Optional: A simple prompt to give indications to the media generation model, required if hasToSearchMedia is true
    hasEnhancedGeneration?: boolean; // Optional: Set to true to use the best performing AI model, required if hasToSearchMedia is true
    audioUrl?: string; // Optional: The audio track to play in the background
    captionPresetName?: "Basic" | "Revid" | "Hormozi" | "Ali" | "Wrap 1" | "Wrap 2" | "Faceless"; // Optional: A caption preset, default is "Wrap 1"
    hasAvatar?: boolean; // Optional: Add a talking avatar
    selectedAvatar?: string; // Optional: An image or video to drive the talking avatar generation, required if hasAvatar is true
    origin: string;
    flowType: string;
    slug: string;
    hasToTranscript: boolean;
    hasWebsiteRecorder: boolean;
    hasTextSmallAtBottom: boolean;
    ratio: string;
    sourceType: string;
    selectedStoryStyle: {
        value: string;
        label: string;
    };
    hasToGenerateVideos: boolean;
}

interface RevidRequest {
    webhook: string;
    creationParams: CreationParams;
}

export const defaultCreationParams: CreationParams = {
    inputText: "this is a test",
    hasToGenerateVoice: true,
    selectedVoice: "SAz9YHcvj6GT2YYXdXww",
    hasToSearchMedia: true,
    mediaType: "movingImage",
    generationPreset: "DEFAULT",
    generationUserPrompt: "Dragonball universe",
    hasEnhancedGeneration: true,
    audioUrl: "https://cdn.tfrv.xyz/audio/observer.mp3",
    captionPresetName: "Wrap 1",
    hasAvatar: false,
    selectedAvatar: undefined,
    origin: "/create",
    flowType: "text-to-video",
    slug: "create-tiktok-video",
    hasToTranscript: false,
    hasWebsiteRecorder: false,
    hasTextSmallAtBottom: false,
    ratio: "9 / 16",
    sourceType: "contentScraping",
    selectedStoryStyle: {
        value: "custom",
        label: "Custom"
    },
    hasToGenerateVideos: true,
};


export async function createRevidVideo(webhook: string, creationParams: CreationParams): Promise<any> {
    const data: RevidRequest = {
        webhook: webhook,
        creationParams: creationParams
    };

    try {
        const response = await fetch('https://www.revid.ai/api/public/v2/render', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'key': REVID_API_KEY,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Revid API request failed with status ${response.status}: ${JSON.stringify(errorData)}`);
        }
        const video = await response.json();
        console.log(video)
        return video;
    } catch (error: any) {
        console.error('Error calling Revid API:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export async function getVideoStatus(videoPid: string): Promise<any> {
    const response = await fetch(`https://www.revid.ai/api/public/v2/status?pid=${videoPid}`, {
        headers: {
            'key': REVID_API_KEY,
        },
    });
    const status = await response.json();
    console.log(status)
    return status;
}