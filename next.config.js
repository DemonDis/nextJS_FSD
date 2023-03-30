/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  // pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  reactStrictMode: true,
  assetPrefix: "./",
  output: 'export',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
