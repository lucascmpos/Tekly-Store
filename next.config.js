/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lctechstore.s3.amazonaws.com", "fsw-store.s3.sa-east-1.amazonaws.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
