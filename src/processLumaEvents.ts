
import fs from "fs";

type LumaEventProcess = {
    lumaEventId: string,
    videoFileUrl?: string,
    errors?: string[],
    status: "pending" | "success" | "error",
    completedAt?: Date,
}

function getLumaEventProcess(lumaEventId: string): LumaEventProcess | undefined {

    try {
        const rawData = fs.readFileSync('data/processLog.json', 'utf-8');
        const processLog = JSON.parse(rawData);
        if (processLog && processLog[lumaEventId]) {
            return processLog[lumaEventId];
        }
    } catch (error) {
        console.warn("Error reading processLog.json or entry not found:", error);
    }

    // If processLog.json is not found, or entry is not found, or any error occurs, return a default pending state
    return undefined
}

function writeLumaEventProcess(lumaEventProcess: LumaEventProcess): void {
    const pastEvent = getLumaEventProcess(lumaEventProcess.lumaEventId)
    if (pastEvent) {
        try {
            const rawData = fs.readFileSync('data/processLog.json', 'utf-8');
            const processLog = JSON.parse(rawData);
            processLog[lumaEventProcess.lumaEventId] = lumaEventProcess;
            fs.writeFileSync('data/processLog.json', JSON.stringify(processLog, null, 2));
        } catch (error) {
            console.error("Error writing to processLog.json:", error);
        }
    }
}

function updateLumaEventProcess(lumaEventId: string, update: Partial<LumaEventProcess>): LumaEventProcess {
    const lumaEventProcess = getLumaEventProcess(lumaEventId)
    return {
        ...lumaEventProcess,
        ...update,
    }
}

export const processLumaEvent = (lumaEventId: string): LumaEventProcess => {
    const lumaEventProcess = {
        lumaEventId,
        status: "pending",
    }
    return {
        lumaEventId,
        status: "pending",
    }
}