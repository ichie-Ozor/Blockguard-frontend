/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com/**",
      },
    ],
    unoptimized: true, // Disable the default image optimization
  },
  output: "export",
  distDir: "build",
};

export default nextConfig;
