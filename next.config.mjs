/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable React 19 features
    reactCompiler: true,
  },
  // Enable TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable ESLint during builds
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
