const sveltePreprocess = require("svelte-preprocess");
const adapter = require("@sveltejs/adapter-node");
const pkg = require("./package.json");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["theme"],
    },
  }),
  kit: {
    adapter: adapter(),

    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
