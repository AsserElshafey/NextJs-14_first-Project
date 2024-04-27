/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', // The protocol of the external images
        hostname: 'lh3.googleusercontent.com', // The hostname of the external images
        pathname: '/**', // The pathname, '**' allows all paths
      },
      // ... Add more patterns as needed
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig