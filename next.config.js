/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cyfolio-api.up.railway.app", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
