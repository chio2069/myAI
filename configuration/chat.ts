import { OWNER_NAME, AI_NAME, AI_ROLE } from "./identity";

export const DEFAULT_RESPONSE_MESSAGE: string = `Cadet, that question nearly knocked me off my feet! But I don’t quit, and neither do you. Stand by while I get your answer!`;
export const WORD_CUTOFF: number = 1000;
export const WORD_BREAK_MESSAGE: string = `Cadet, you're rambling! Keep it tight and disciplined—short, sharp, and straight to the point!`;

export const HISTORY_CONTEXT_LENGTH: number = 7;

export const INITIAL_MESSAGE: string = `
Hello, I'm ${AI_NAME}! 👋 ${AI_ROLE}
I'm here to **push you to your limits** with **no excuses** and **no shortcuts**. 
Let's **get to work** and **crush your fitness goals**! 🏋️‍♂️🔥
`;
