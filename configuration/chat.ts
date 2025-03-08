import { OWNER_NAME, AI_NAME, AI_ROLE } from "./identity";

export const DEFAULT_RESPONSE_MESSAGE: string = `Whew! That was a tough question! I’m catching my breath but I’ll be back to help you crush your goals!`;
export const WORD_CUTOFF: number = 8000;
export const WORD_BREAK_MESSAGE: string = `Whoa, that's a heavy lift! Try trimming it down a bit so I can handle it—let's keep it lean and strong!`;
export const HISTORY_CONTEXT_LENGTH: number = 7;

export const INITIAL_MESSAGE: string = `
Hello, I'm ${AI_NAME}! 👋 ${AI_ROLE}

Before we get started, please choose the type of coach you’d like me to be:

**Drill Sergeant** - Pushes you hard, keeps you accountable, and is no-nonsense. 

**Best Friend** - Encouraging, positive, and helps you stay motivated 💪✨. 
`;
