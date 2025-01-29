import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

// Add these exports to bypass i18n middleware and ensure dynamic rendering
export const dynamic = "force-dynamic";
export const runtime = "edge";
export const preferredRegion = "home";

// Add middleware bypass
export const middleware = {
  skipMiddleware: true,
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
