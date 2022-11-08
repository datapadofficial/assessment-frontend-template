import nextTranspileModules from "next-transpile-modules";

const withTM = nextTranspileModules([
  "../core",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  experimental: {
    esmExternals: true,
  },
};

export default withTM(nextConfig);
