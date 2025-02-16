import { getLumaEventDescription } from "../src/transformLuma";
import { lumaFullEventExample } from "../src/lumaFullEvent";
import { transformLumaPostDTO } from "../src/transformLuma";
import dotenv from 'dotenv';
dotenv.config();

// Test both functions together
const lumaEventDescription = await getLumaEventDescription(lumaFullEventExample.description_mirror)
console.log(lumaEventDescription)

const lumaPostDTO = await transformLumaPostDTO(lumaFullEventExample, lumaEventDescription)
console.log(lumaPostDTO)