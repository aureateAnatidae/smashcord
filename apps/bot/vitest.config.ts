import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    resolve: {
        alias: {
            "@event": resolve(__dirname, "./src/interaction/event"),
            "@command": resolve(__dirname, "./src/interaction/command"),
            "@package": resolve(__dirname, "./package.json"),
        },
    },
});
