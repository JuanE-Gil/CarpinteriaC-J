import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';


import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
   }),
  server: {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 4321,
  },
  integrations: [tailwind(), react()]
});