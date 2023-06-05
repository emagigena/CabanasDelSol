module.exports = {
    reactStrictMode: true,
    images: {
      domains: [],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          module: false,
        };
      }
      return config;
    },
  }
