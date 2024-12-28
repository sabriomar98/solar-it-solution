import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    // Specify the locales you want to support
    locales: ['en', 'fr'],
    // Specify the default locale
    defaultLocale: 'fr',
};

export default withNextIntl(nextConfig);