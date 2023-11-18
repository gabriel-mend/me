/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.media.licdn.com',
      },
    ],
    domains: [
      "raw.githubusercontent.com",
      "media.licdn.com"
    ]
  }
}

module.exports = nextConfig 
