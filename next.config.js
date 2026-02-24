/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['sanity', 'next-sanity'],
  },
}

module.exports = nextConfig
