/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost', '2025.accessph.net'],
  },
}

export default nextConfig
