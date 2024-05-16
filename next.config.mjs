import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    async redirects() {
        return [
            {
                source: '/start',
                destination: '/docs/get-started',
                permanent: true,
            },
        ];
    }
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
