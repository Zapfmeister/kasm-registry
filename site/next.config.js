/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Zapfmeisters KASM Registry',
    description: 'An unofficial store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://zapfmeister.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Zapfmeister/kasm-registry',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
