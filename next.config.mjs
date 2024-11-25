/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'localhost' }, { hostname: 'accessph.net' }],
  },
}

export default nextConfig
