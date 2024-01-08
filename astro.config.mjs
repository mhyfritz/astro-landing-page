import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { defineConfig, squooshImageService } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
