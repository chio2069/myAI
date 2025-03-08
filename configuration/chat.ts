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

export function processUserInput(message: string) {
  if (message.trim() === "1") {
    globalThis.COACHING_PERSONALITY = "DRILL_SERGEANT"; // ✅ No TypeScript error
    return `Got it! I'll be your tough Drill Sergeant. No excuses—let’s get to work!`;
  } else if (message.trim() === "2") {
    globalThis.COACHING_PERSONALITY = "BEST_FRIEND"; // ✅ No TypeScript error
    return `Awesome! I'm your motivational best friend. Let's crush your goals together!`;
  }
  return generateCoachResponse(message, "fitness_related");
}

export function generateCoachResponse(message: string, intent: string) {
  const personality = globalThis.COACHING_PERSONALITY || "BEST_FRIEND"; // Default to Best Friend

  const personalityReinforcement = {
    DRILL_SERGEANT: "No excuses! Push harder and stay disciplined. 💀",
    BEST_FRIEND: "You're doing awesome! Keep going, and don't forget—progress is what matters most! 💪",
  };

  return `${personalityReinforcement[personality]}

Now, here’s your response for "${message}" based on your fitness and nutrition goals.`;
}

