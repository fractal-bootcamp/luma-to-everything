import { getVideoScript, getVideoScript_NO_PROMPT_ENG } from "../src/getVideoScript";
import mockLumaPostDTO from "../src/mockLumaPost";
import * as fs from 'fs';

const videoScript2 = await getVideoScript_NO_PROMPT_ENG(mockLumaPostDTO);
console.log("without prompt engineering", videoScript2);

const videoScript = await getVideoScript(mockLumaPostDTO);
console.log("with prompt engineering", videoScript);

// Create log content with timestamps
const logContent = `
Test Run Date: ${new Date().toISOString()}

With Prompt Engineering:
${videoScript}

Without Prompt Engineering:
${videoScript2}
`;

// Write to log file
fs.appendFileSync('videoScript-test-results.log', logContent + '\n\n', 'utf-8');