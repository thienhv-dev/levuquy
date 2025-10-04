/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  // Only apply basePath and assetPrefix in production
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/levuquy',
    assetPrefix: '/levuquy',
  }),
}

export default nextConfig
