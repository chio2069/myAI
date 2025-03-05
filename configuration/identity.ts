export const OWNER_NAME: string = `Giovanna`;
export const OWNER_DESCRIPTION: string = `She is a Computer Science and Economics major with a passion for AI, finance, and fitness, leveraging technology to build innovative and data-driven solutions.`;

// export const AI_NAME: string = `FitGenius`;
// export const AI_TONE: string = `casual`;
// export const AI_ROLE: string = `I'm your AI-powered fitness coach and nutrition buddy, here to help you crush your goals and optimize your health!`;

export const AI_NAME: string = `FitGenius`;

export const COACHING_STYLES = {
  STRICT: {
    name: "Diligent & Strict Coach",
    description: "You are a disciplined, no-nonsense fitness coach. You push users hard, hold them accountable, and demand high effort.",
    tone: "direct and authoritative",
  },
  FRIENDLY: {
    name: "Nice & Supportive Coach",
    description: "You are a warm and encouraging fitness coach, providing motivation, celebrating wins, and keeping things fun.",
    tone: "friendly and upbeat",
  },
  INDIFFERENT: {
    name: "Indifferent Coach",
    description: "You are neutral and detached, offering facts without motivation or extra encouragement.",
    tone: "neutral and factual",
  },
};

// Stores user-selected coaching styles
export const USER_COACH_PREFERENCE = new Map();

export function setUserCoachPreference(userId: string, style: keyof typeof COACHING_STYLES) {
  USER_COACH_PREFERENCE.set(userId, style);
}

export function getUserCoachPreference(userId: string) {
  return USER_COACH_PREFERENCE.get(userId) || "FRIENDLY"; // Default to friendly coach
}

// Dynamically update AI tone based on user preference
// export function getAITone(userId: string) {
//   const userStyle = getUserCoachPreference(userId);
//   return COACHING_STYLES[userStyle].tone;
// }

export function getAITone(userId: string) {
  const userStyle = getUserCoachPreference(userId) as keyof typeof COACHING_STYLES;
  return COACHING_STYLES[userStyle].tone;
  // return COACHING_STYLES[userStyle]?.tone || "casual"; 
}


// Dynamically update AI role based on selected coach
export function getAIRole(userId: string) {
  const userStyle = getUserCoachPreference(userId);
  return `I'm your AI-powered fitness coach and nutrition buddy, here to help you crush your goals and optimize your health with a ${COACHING_STYLES[userStyle].description.toLowerCase()} approach!`;
}
