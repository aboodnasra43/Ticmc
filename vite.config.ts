import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import { youwareVitePlugin } from "youware/vite-plugin";

export default defineConfig({
    // ADD THIS NEW LINE TO FIX THE 404:
    base: '/TICMCWEBSITE/',
    plugins: [youwareVitePlugin(), react()],
    server: {
        host: "127.0.0.1",
        port: 5173,
    },
    build: {
        sourcemap: true,
    },
});