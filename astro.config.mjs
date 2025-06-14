// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";
import { astroExpressiveCode } from '@astrojs/starlight/expressive-code';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon(), astroExpressiveCode(), mdx(), starlight({
    title: "API Blog System",
    customCss: [
      "./src/styles/globals.css"
    ]
  })],
  markdown: {
    shikiConfig: {
      theme: "tokyo-night"
    }
  }
});