/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com', // 允许从 GitHub 加载图片
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com', // 允许从 Unsplash 加载图片
      },
      {
        protocol: 'http',
        hostname: '43.139.21.227', // 允许从你的服务器 IP 加载图片
      },
      {
        protocol: 'http',
        hostname: 'localhost', // 允许从本地加载图片
      },
    ],
  },
  // 添加 Edge TTS 服务的重写规则
  async rewrites() {
    return [
      {
        source: '/api/tts',
        destination: 'http://127.0.0.1:5001/api/tts', // 修改为完整的 API 路径
      },
    ]
  },
  // ... 其他配置
}

module.exports = nextConfig;