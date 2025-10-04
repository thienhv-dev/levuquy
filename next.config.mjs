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
  out: "export",
  basePath: '/levuquy',
  assetPrefix: '/levuquy',
}

export default nextConfig
