import { OWNER_NAME, AI_NAME, AI_ROLE } from "./identity";

export const DEFAULT_RESPONSE_MESSAGE: string = `Whew! That was a tough question! I’m catching my breath but I’ll be back to help you crush your goals!`;
export const WORD_CUTOFF: number = 8000;
export const WORD_BREAK_MESSAGE: string = `Whoa, that's a heavy lift! Try trimming it down a bit so I can handle it—let's keep it lean and strong!`;
export const HISTORY_CONTEXT_LENGTH: number = 7;

export const INITIAL_MESSAGE: string = `
Hello, I'm ${AI_NAME}! 👋 ${AI_ROLE}
I'm here to **push you to your limits** with **no excuses** and **no shortcuts**. 
Let's **get to work** and **crush your fitness goals**! 🏋️‍♂️🔥
`;
