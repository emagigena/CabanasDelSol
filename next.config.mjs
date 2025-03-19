/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "youtube.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "react.semantic-ui.com", // ✅ Agregado para evitar el error
      },
    ],
  },
  publicRuntimeConfig: {
    staticFolder: "/public",
  },
  reactStrictMode: true,
};

export default nextConfig;
