/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
// module.exports = {
//     reactStrictMode: true,
//     images: {
//         domains: ['https://i.ibb.co'],
//     }
// }
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ibb.co",
                // ...
            },
            {
                protocol: "https",
                hostname: "https://www.pexels.com/",
                // ...
            },
            {
                protocol: "https",
                hostname: "https://www.fradaksa.com",
                // ...
            },


        ],
        domains: ['127.0.0.1'],
        domains: ['fradaksa.com'],
    },
};