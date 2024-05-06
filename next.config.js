/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: '*.googleusercontent.com'
          },
          {
            hostname: 'res.cloudinary.com'
          }
        ]
}
}

module.exports = nextConfig
