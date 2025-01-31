import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

// Add these exports to bypass i18n middleware and ensure dynamic rendering
export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
