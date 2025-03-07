import { OWNER_NAME, AI_NAME } from "./identity";
import { getUserCoachPreference, setUserCoachPreference, COACHING_STYLES } from "@/configuration/identity";

export const DEFAULT_RESPONSE_MESSAGE: string = `Whew! That was a tough question! I’m catching my breath but I’ll be back to help you crush your goals!`;
export const WORD_CUTOFF: number = 8000;
export const WORD_BREAK_MESSAGE: string = `Whoa, that's a heavy lift! Try trimming it down a bit so I can handle it—let's keep it lean and strong!`;
export const HISTORY_CONTEXT_LENGTH: number = 7;

export const INITIAL_MESSAGE: string = `
Hello, I'm ${AI_NAME}! 👋 Before we get started, please choose the type of coach you’d like me to be:

1️⃣ **Drill Sergeant** - Pushes you hard, keeps you accountable, and sets high expectations.
2️⃣ **Best Friend** - Encouraging, positive, and helps you stay motivated.
3️⃣ **Neutral** - Just gives straight facts without any motivation.

Type the number of your choice (1, 2, or 3) to continue.
`;

export function handleUserChoice(userId: string, choice: string) {
  const styleMap: Record<string, keyof typeof COACHING_STYLES> = {
    "1": "STRICT",
    "2": "FRIENDLY",
    "3": "INDIFFERENT"
  };

  const selectedStyle = styleMap[choice.trim()];
  if (!selectedStyle) return "Invalid choice. Please select 1, 2, or 3.";

  setUserCoachPreference(userId, selectedStyle);
  return `Got it! I'll be your ${COACHING_STYLES[selectedStyle].name}. Let's get started! 💪`;
}

export function processUserInput(userId: string, message: string) {
  const userPreference = getUserCoachPreference(userId);
  if (!userPreference) return handleUserChoice(userId, message.trim());
}
