/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env : {
        INE_LIFF_ID: process.env.LINE_LIFF_ID
    },
    images: {
        domains: ['siamais.co.uk'],
    },
    
};

export default nextConfig;
