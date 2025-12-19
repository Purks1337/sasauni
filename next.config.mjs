/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Включаем режим статического экспорта
  output: 'export',
  
  // 2. Отключаем оптимизацию картинок (сервера нет, сжимать некому)
  images: {
    unoptimized: true, 
  },

  // Остальные ваши настройки можно оставить, если они не мешают
  experimental: {
    reactCompiler: true,
  },
  // typescript и eslint настройки тоже можно оставить
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;