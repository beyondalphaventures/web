import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['@beyondalpha/ui', '@beyondalpha/types', '@beyondalpha/portfolio'],
}

export default nextConfig
