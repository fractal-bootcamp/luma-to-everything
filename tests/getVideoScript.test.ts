import mockLumaPostDTO from '../src/mockLumaPost';
import { getVideoScript, testGenerateText } from '../src/getVideoScript';
import {test, expect} from "vitest"


test('testGenerateText', async () => {
    const text = await testGenerateText();
    console.log(text);
    expect(text).toBeDefined();
    expect(typeof text).toBe('string');
    expect(text.length).toBeGreaterThan(0);
});

test.skip('getVideoScript generates a video script for the mock Luma event', async () => {
    const videoScript = await getVideoScript(mockLumaPostDTO);
    console.log(videoScript);
    expect(videoScript).toBeDefined();
    expect(typeof videoScript).toBe('string');
    expect(videoScript.length).toBeGreaterThan(0);
});
