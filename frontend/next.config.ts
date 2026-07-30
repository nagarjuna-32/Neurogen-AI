import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://neurogen-backend-c15o.onrender.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
