import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  external: ["react"],
  format: "esm",
  clean: true,
  dts: true,
  sourcemap: true,
  ...options,
}));
