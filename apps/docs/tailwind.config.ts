// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import uiConfig from "@repo/ui/tailwind-config";
import sharedConfig from "@repo/tailwind-config";

const uiContent = Array.isArray(uiConfig.content) ? uiConfig.content : [];

const config: Config = {
  content: ["./src/app/**/*.tsx", ...uiContent],
  presets: [uiConfig, sharedConfig],
};

export default config;
