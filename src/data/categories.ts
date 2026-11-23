import type { CrimeCategory } from "./types";

export const CATEGORIES: CrimeCategory[] = [
  {
    id: "hacking",
    name: "Hacking",
    shortDescription: "Unauthorised access to computers, networks or data.",
    description:
      "Gaining access to, or interfering with, a computer system, network or data without authorisation. Laws commonly distinguish basic unauthorised access from access with intent to commit further offences and from acts that damage or impair systems.",
    aiRelated: false,
  },
  {
    id: "identity-theft",
    name: "Identity theft",
    shortDescription: "Misusing someone's identifying information.",
    description:
      "Obtaining, possessing or using another person's identifying information — such as passwords, electronic signatures or ID documents — to impersonate them or commit fraud.",
    aiRelated: false,
  },
  {
    id: "online-fraud",
    name: "Online financial fraud",
    shortDescription: "Deception online to obtain money or property.",
    description:
      "Scams and deception carried out through electronic communications, including phishing, investment and payment fraud, to obtain money, property or a financial advantage.",
    aiRelated: false,
  },
  {
    id: "ransomware",
    name: "Ransomware",
    shortDescription: "Encrypting or locking systems to extort payment.",
    description:
      "Malicious software that encrypts or locks data or systems with a demand for payment. Usually prosecuted under unauthorised modification, damage and extortion offences; some countries add incident or payment reporting duties.",
    aiRelated: false,
  },
  {
    id: "cyberstalking",
    name: "Cyberstalking",
    shortDescription: "Harassment or stalking through electronic means.",
    description:
      "A course of conduct using email, social media, messaging or tracking technology that harasses, monitors, threatens or causes fear or distress to a person.",
    aiRelated: false,
  },
  {
    id: "data-breaches",
    name: "Data breaches",
    shortDescription: "Unauthorised exposure of personal data and notification duties.",
    description:
      "Unauthorised access to, or disclosure of, personal data. Laws cover both offences by attackers and obligations on organisations to secure data and notify regulators or affected people.",
    aiRelated: false,
  },
  {
    id: "ai-deepfakes",
    name: "AI-generated deepfakes",
    shortDescription: "Synthetic images, video or audio depicting real people.",
    description:
      "Content created or altered with AI to realistically depict a person saying or doing something they did not. Legal responses focus on non-consensual intimate imagery, election integrity and platform duties.",
    aiRelated: true,
  },
  {
    id: "ai-impersonation",
    name: "AI impersonation & fraud",
    shortDescription: "Voice clones and AI personas used to deceive.",
    description:
      "Using AI-generated voices, videos or chat personas to impersonate a real person or organisation, typically to commit fraud. Usually addressed through existing fraud and personation offences.",
    aiRelated: true,
  },
];

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  CrimeCategory["id"],
  CrimeCategory
>;
