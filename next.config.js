/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/programme.html', destination: '/programme', permanent: true },
      { source: '/speakers.html', destination: '/speakers', permanent: true },
      { source: '/register.html', destination: '/register', permanent: true },
      {
        source: '/speaker-olusanya-samuel.html',
        destination: '/speakers/olusanya-samuel',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
