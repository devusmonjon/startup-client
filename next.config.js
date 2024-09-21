/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "localhost", "startup.moontv.uz"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
