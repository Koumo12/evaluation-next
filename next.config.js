/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    deviceSizes: [320, 420, 768, 1024, 1200],
    domains: [process.env.NEXT_PUBLIC_API_DOMAIN,process.env.NEXT_PUBLIC_STRAPI_DOMAIN , "res.cloudinary.com"]    
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: { presets: ['@babel/env','@babel/preset-react'] },
    })
    return config
  },
}

module.exports = nextConfig
