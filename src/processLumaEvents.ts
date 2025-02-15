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
    try {
        let processLog: Record<string, LumaEventProcess> = {};
        // Try to read existing log, if it exists
        try {
            const rawData = fs.readFileSync('data/processLog.json', 'utf-8');
            processLog = JSON.parse(rawData);
        } catch (error) {
            // File doesn't exist or is empty, start with empty object
        }
        
        // Update the log with new event
        processLog[lumaEventProcess.lumaEventId] = lumaEventProcess;
        
        // Ensure the data directory exists
        fs.mkdirSync('data', { recursive: true });
        
        // Write the updated log
        fs.writeFileSync('data/processLog.json', JSON.stringify(processLog, null, 2));
    } catch (error) {
        console.error("Error writing to processLog.json:", error);
    }
}

// update the process log for a given luma event id
function updateLumaEventProcess(lumaEventId: string, update: Partial<LumaEventProcess>): LumaEventProcess {
    const lumaEventProcess = getLumaEventProcess(lumaEventId) || {
        lumaEventId,
        status: "pending"
    };
    return {
        ...lumaEventProcess,
        ...update,
    }
}

export const processLumaEvent = async (lumaEventId: string): Promise<LumaEventProcess> => {
    // Check if event has already been processed successfully
    const existingProcess = getLumaEventProcess(lumaEventId);
    if (existingProcess && existingProcess.status === "success") {
        return existingProcess;
    }

    // Initialize process state
    let processState: LumaEventProcess = {
        lumaEventId,
        status: "pending",
    };
    
    try {
        // Write initial state
        writeLumaEventProcess(processState);
        
        // Fetch event details from Luma API
        const eventDetails = await fetch(`https://api.lu.ma/calendar/get?event_api_id=${lumaEventId}`)
            .then(res => res.json());
        processState = updateLumaEventProcess(lumaEventId, {
            status: "pending",
            videoFileUrl: eventDetails.video_url
        });
        
        // Step 2: Process video if available
        if (processState.videoFileUrl) {
            processState = updateLumaEventProcess(lumaEventId, {
                status: "pending",
            });
        }
        
        // Mark as complete
        processState = updateLumaEventProcess(lumaEventId, {
            status: "success",
            completedAt: new Date()
        });
        
    } catch (error) {
        // Handle any errors
        processState = updateLumaEventProcess(lumaEventId, {
            status: "error",
            errors: [error instanceof Error ? error.message : "Unknown error"],
            completedAt: new Date()
        });
    }
    
    // Write final state
    writeLumaEventProcess(processState);
    return processState;
}

// // Simple test

// const allEvents = await fetch('https://api.lu.ma/calendar/get-items?calendar_api_id=cal-RHI1LJC6K8JRBLI&period=future&pagination_limit=20')
//     .then(res => res.json());
// console.log(allEvents)

// const processResults = await Promise.all(
//     allEvents.entries.map((event: { api_id: string }) => processLumaEvent(event.api_id))
// );

// console.log('Processing complete:', processResults);