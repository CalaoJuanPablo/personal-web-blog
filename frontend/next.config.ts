import path from 'path'
import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '.')
  },
  async headers() {
    return [
      {
        // Only allow framing on preview routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? "frame-ancestors 'self' http://localhost:8055"
              : "frame-ancestors 'self'"
          }
        ]
      }
    ]
  }
}

export default nextConfig
