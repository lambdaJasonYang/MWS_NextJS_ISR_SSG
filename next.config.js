/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      reactStrictMode: true,
      // assetPrefix: "",
      // basePath: "",
      experimental: {
        images: {
          unoptimized: true,
        },
      }
    }
  }
  return {
    /* config options for all phases except development here */
    reactStrictMode: true,
    assetPrefix: "/out", //static assets are in the /out folder
    basePath: "/out",
    experimental: {
      images: {
        unoptimized: true,
      },
    }
  }
}
