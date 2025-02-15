import { getVideoScript } from "../src/getVideoScript";
import mockLumaPostDTO from "../src/mockLumaPost";

const videoScript = await getVideoScript(mockLumaPostDTO);
console.log(videoScript);