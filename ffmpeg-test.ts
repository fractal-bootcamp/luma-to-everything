import { exec } from "node:child_process";

exec("ffmpeg -version", (error, stdout, stderr) => {
    if (error) {
        console.error("Error executing ffmpeg:", error);
    } else {
        console.log("FFmpeg is available:\n", stdout);
    }
});
