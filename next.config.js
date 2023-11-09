/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'perenual.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'bs.plantnet.org',
                port: '',
                pathname: '**',
            },
        ],
    },
}
module.exports = nextConfig
