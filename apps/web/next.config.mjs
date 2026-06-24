/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  transpilePackages: ['@portfolio/ui', '@portfolio/design-tokens', '@portfolio/content'],
  experimental: {
    optimizePackageImports: ['lucide-react', '@portfolio/ui'],
  },
};

export default nextConfig;