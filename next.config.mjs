/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/industries',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/industries/:slug',
        destination: '/case-studies',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
