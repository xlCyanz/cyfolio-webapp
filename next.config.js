/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cyfolio-api.herokuapp.com", "localhost", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
