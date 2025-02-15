import mockLumaPostDTO from '../src/mockLumaPost';
import { getVideoScript } from '../src/getVideoScript';
import {test, expect} from "vitest"

test('getVideoScript generates a video script for the mock Luma event', async () => {
    const videoScript = await getVideoScript(mockLumaPostDTO);
    console.log(videoScript);
    expect(videoScript).toBeDefined();
    expect(typeof videoScript).toBe('string');
    expect(videoScript.length).toBeGreaterThan(0);
});
