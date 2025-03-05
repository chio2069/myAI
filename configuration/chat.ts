import { OWNER_NAME, AI_NAME } from "./identity";
import { getUserCoachPreference, COACHING_STYLES } from "@/configuration/identity";

// export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}! How can I help you hit your fitness goals today?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Whew! That was a tough question! I’m catching my breath but I’ll be back to help you crush your goals!`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Whoa, that's a heavy lift! Try trimming it down a bit so I can handle it—let's keep it lean and strong!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response

export function generateCoachResponse(userId: string, message: string, intent: string) {
  const userStyle = getUserCoachPreference(userId);
  const coachPersona = COACHING_STYLES[userStyle];

  const baseResponse = `(${coachPersona.name}): `;

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
