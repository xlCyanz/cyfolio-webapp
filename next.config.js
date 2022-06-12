/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cyfolio-api.herokuapp.com", "localhost"],
  },
};

module.exports = nextConfig;
