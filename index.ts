import { generateVideo } from "./src/replicate.ts";

async function main() {
    try {
        console.log("Starting video generation...");
        await generateVideo([
            "A mechanical keyboard clacks rhythmically as Noah, a young developer with short, tousled black hair and sharp blue eyes, types furiously. His glasses reflect lines of glowing code on the screen. The camera zooms in, capturing his intense focus before cutting to a wide-angle shot of a bustling loft, where small groups huddle around glowing monitors. Across the room, Lina, a designer with auburn hair tied in a loose ponytail, sketches UI concepts on a tablet. The camera glides between teams—engineers adjusting parameters, creators brainstorming wildly. Neon lights cast soft cyan and magenta hues, while the warm glow of old Edison bulbs flickers overhead. The loft hums with energy, the heartbeat of innovation pulsing through each keystroke.",  
        
            "The camera shifts to a close-up of Lina’s hand swiping a color gradient on her tablet, her stylus moving with precision. A flick of her wrist, and vibrant UI elements reshape in real-time. The shot tilts upward, revealing her thoughtful expression as she bites her lip, deep in concentration. In the background, Noah leans over a screen, analyzing shifting data visualizations. The camera follows his gaze—a dynamic pan across the room captures an AI model rendering lifelike animations on a massive monitor. Shadows shift with the soft glow of floating holograms, casting an ethereal light across the space. The energy is palpable—everywhere, hands move, faces glow with determination, ideas materialize at a dizzying speed.",  
        
            "A rapid montage unfolds: Lina rapidly sketches wireframes; Noah's fingers hover over his keyboard before executing a final, decisive command; a robotic arm assembles components with swift precision. The camera whips around to a side view of Ethan, a tall engineer with close-cropped silver hair, explaining something passionately, his hands animated as he gestures toward a sprawling system diagram on a holographic display. The screen flickers, shifting perspectives between layers of code and real-time AI-generated images morphing into intricate, evolving designs. A dramatic low-angle shot captures Ethan’s determined expression as the light from his display reflects in his sharp green eyes. The entire room is electric with intensity, the flow of creation never pausing.",  
        
            "The camera transitions into a slow, sweeping pan across the loft, revealing the deepening night. A time-lapse effect blurs figures in motion—Noah running simulations, Lina adjusting color schemes, Ethan deep in thought, his brow furrowed. The room, once bathed in neon vibrance, is now softly lit by the glow of scattered desk lamps and the occasional flicker of city lights beyond the loft’s expansive windows. The energy remains unwavering. A quiet moment—the camera lingers on Lina as she stretches her arms, exhaustion creeping into her face before she shakes it off, determined. The perspective shifts to Noah, who exhales slowly, rubbing his temples before cracking his knuckles and diving back into work. The countdown to completion begins.",  
        
            "A final burst of movement—the camera captures a series of triumphant moments. Lina steps back, satisfaction flashing across her face as she watches the final design come to life on her screen. Noah presses the enter key, his breath catching as the program executes flawlessly. A burst of excitement—Ethan claps a teammate on the back, grinning. The camera pulls back, capturing a wide-angle shot of the entire loft, filled with creators frozen in expressions of relief and exhilaration. The perspective shifts outward, past the window, revealing the city skyline bathed in the golden glow of early morning. The last frame lingers on Noah, Lina, and Ethan standing side by side, silhouetted against the rising sun, their journey far from over."
        ]);
                        console.log("Video generation completed.");
    } catch (error) {
        console.error("Error generating video:", error);
    }
}

main();
