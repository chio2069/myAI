import { OWNER_NAME, AI_NAME } from "./identity";
import { getUserCoachPreference, COACHING_STYLES } from "@/configuration/identity";

// export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}! How can I help you hit your fitness goals today?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Whew! That was a tough question! I’m catching my breath but I’ll be back to help you crush your goals!`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Whoa, that's a heavy lift! Try trimming it down a bit so I can handle it—let's keep it lean and strong!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response

import { setUserCoachPreference } from "@/configuration/identity";

export const INITIAL_MESSAGE: string = `
Hello, I'm ${AI_NAME}! 👋 Before we get started, please choose the type of coach you’d like me to be:

1️⃣ **Diligent & Strict** - Pushes you hard, keeps you accountable, and sets high expectations.
2️⃣ **Nice & Supportive** - Encouraging, positive, and helps you stay motivated.
3️⃣ **Indifferent & Neutral** - Just gives straight facts without any motivation.

Type the number of your choice (1, 2, or 3) to continue.
`;

export function handleUserChoice(userId: string, choice: string) {
  let selectedStyle: keyof typeof COACHING_STYLES;

  if (choice === "1") {
    selectedStyle = "STRICT";
  } else if (choice === "2") {
    selectedStyle = "FRIENDLY";
  } else if (choice === "3") {
    selectedStyle = "INDIFFERENT";
  } else {
    return "Invalid choice. Please select 1, 2, or 3.";
  }

  setUserCoachPreference(userId, selectedStyle);
  return `Got it! I'll be your ${COACHING_STYLES[selectedStyle].name}. Let's get started! 💪`;
}

export function processUserInput(userId: string, message: string) {
  if (!USER_COACH_PREFERENCE.has(userId)) {
    return handleUserChoice(userId, message.trim()); // ✅ First message must select a tone
  }

  return generateCoachResponse(userId, message, "fitness_related"); // ✅ Continue normal conversation
}

export function generateCoachResponse(userId: string, message: string, intent: string) {
  const userStyle = getUserCoachPreference(userId) as keyof typeof COACHING_STYLES;
  const coachPersona = COACHING_STYLES[userStyle];

  const baseResponse = `${coachPersona.name}: `; // ✅ Fixed syntax

  if (intent === "fitness_related") {
    return baseResponse + (userStyle === "STRICT"
      ? "No excuses! Stay disciplined and push harder. Your body won't change unless you commit fully."
      : userStyle === "FRIENDLY"
      ? "You're doing amazing! Keep pushing yourself, and remember, every step counts! 💪"
      : "Here’s the information you need: Proper training and consistency are key. Stick to the plan.");
  }

  if (intent === "nutrition_related") {
    return baseResponse + (userStyle === "STRICT"
      ? "Stick to your meal plan! No junk food—discipline is key to success."
      : userStyle === "FRIENDLY"
      ? "Eating healthy is all about balance! You're making great choices—keep it up. 🍎"
      : "Your nutrition should be based on macros and calorie intake. Follow the guidelines for best results.");
  }

  return baseResponse + "Here’s my response: " + message;
}


