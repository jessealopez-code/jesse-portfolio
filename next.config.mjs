/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Old Vercel address → custom domain (keeps any path)
        source: "/:path*",
        has: [{ type: "host", value: "jesselopez-portfolio.vercel.app" }],
        destination: "https://jessealopez.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
