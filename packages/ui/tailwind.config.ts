// tailwind config is required for editor support

import { resolve } from "node:path";
import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: [resolve(__dirname, "./src/**/*.tsx")],
  presets: [sharedConfig],
};

export default config;
