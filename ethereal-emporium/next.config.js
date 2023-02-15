/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ethereal-emporium-api.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
