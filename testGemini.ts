import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import dotenv from 'dotenv';
dotenv.config();



const model = google('gemini-2.0-flash-lite-preview-02-05', {
    // cachedContent: undefined,
    // structuredOutputs: undefined,
    // safetySettings: undefined,
    useSearchGrounding: false, // allows the model to use search results to generate the response
});

const result = streamText({
    model: google('gemini-2.0-flash-001'),
    prompt: "Write a tiktok brainrot video script for the following luma event: AI Agents Hackathon: Building for Social and Marketing Use Cases",
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

