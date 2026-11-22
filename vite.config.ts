// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import path from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv } from "vite";
import { paymentsToken } from "./src/lib/payments-mode";

const mode = process.env["NODE_ENV"] === "production" ? "production" : "development";
Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
const buildPaymentsToken = paymentsToken(
  loadEnv(mode, process.cwd(), "VITE_")["VITE_PAYMENTS_CLIENT_TOKEN"], mode,
);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    // Preview uses managed test payments; production uses managed live payments.
    // Never substitute an unrelated account's publishable or private key.
    define: {
      "import.meta.env.VITE_PAYMENTS_CLIENT_TOKEN": JSON.stringify(buildPaymentsToken),
    },
    resolve: {
      alias: {
        "entities/lib/decode.js": path.resolve(__dirname, "node_modules/entities/lib/decode.js"),
        "entities/lib/encode.js": path.resolve(__dirname, "node_modules/entities/lib/encode.js"),
      },
    },
  },
});
