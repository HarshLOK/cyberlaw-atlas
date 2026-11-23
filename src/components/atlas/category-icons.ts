import {
  AudioLines,
  CreditCard,
  DatabaseZap,
  Eye,
  Fingerprint,
  LockKeyhole,
  ScanFace,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import type { CategoryId } from "@/data/types";

export const CATEGORY_ICONS: Record<CategoryId, LucideIcon> = {
  hacking: Terminal,
  "identity-theft": Fingerprint,
  "online-fraud": CreditCard,
  ransomware: LockKeyhole,
  cyberstalking: Eye,
  "data-breaches": DatabaseZap,
  "ai-deepfakes": ScanFace,
  "ai-impersonation": AudioLines,
};
