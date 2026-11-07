import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Puzzle hunt pages are plain HTML in public/hunt/<page>/index.html.
  // This serves them at /hunt/<page> as well.
  async rewrites() {
    return [{ source: "/hunt/:page", destination: "/hunt/:page/index.html" }];
  },
};

export default nextConfig;
