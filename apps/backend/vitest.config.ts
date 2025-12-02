import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

const src_paths = {
    alias: {
        "@seeds": resolve(__dirname, "./seeds"),
        "@test": resolve(__dirname, "./src/test"),
        "@db": resolve(__dirname, "./src/db"),
        "@v1": resolve(__dirname, "./src/v1"),
    },
};

export default defineConfig({
    test: {
        projects: [
            {
                test: {
                    alias: {
                        "@seeds": resolve(__dirname, "./seeds"),
                        "@test": resolve(__dirname, "./src/test"),
                        "@db": resolve(__dirname, "./src/db"),
                        "@v1": resolve(__dirname, "./src/v1"),
                    },
                    include: ["src/**/unit.test.ts"],
                    name: { label: "unit" },
                },
            },
            {
                test: {
                    name: { label: "dist" },
                    include: ["dist/**/*.test.js"],
                },
            },
        ],
    },
});
