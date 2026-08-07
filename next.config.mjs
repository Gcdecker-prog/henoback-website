/** @type {import('next').NextConfig} */
const isPrivateExport = process.env.HENOS_PRIVATE_EXPORT === '1';

const nextConfig = {
  ...(isPrivateExport
    ? {
        output: 'export',
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
  async redirects() {
    // Redirects are ignored during `output: 'export'` builds.
    if (isPrivateExport) return [];
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
