/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "bafybeih3w6jc3tnw4lrok5ewtgcnoxer76ef5tdxkj773fyhzvyk2x3tgq.ipfs.nftstorage.link",
        port: "",
      },
    ],
  },
};

export default nextConfig;
