/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cyfolio-api.herokuapp.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
