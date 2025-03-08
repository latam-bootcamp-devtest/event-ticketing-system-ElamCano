/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "https://placehold.co/600x400",
        search: "",
      },
    ],
  },
};

export default nextConfig;
