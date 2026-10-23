import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  adapterPath: require.resolve("@opennextjs/cloudflare"),
  images: {
    loader: "custom",
    loaderFile: "./shopify-image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
