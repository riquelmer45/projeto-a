import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "bcrypt"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: 'ignore-loader',
    });
    return config;
  },
};

export default nextConfig;