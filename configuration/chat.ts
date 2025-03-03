import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}! How can I help you hit your fitness goals today?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Whew! That was a tough question! I’m catching my breath but I’ll be back to help you crush your goals!`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Whoa, that's a heavy lift! Try trimming it down a bit so I can handle it—let's keep it lean and strong!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
