/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['5.imimg.com','unsplash.com','cdn2.hubspot.net'],
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        backendUrl: "http://localhost:5164/api/",
      },
};

export default nextConfig;
