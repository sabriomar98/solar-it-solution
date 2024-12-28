import { getRequestConfig } from 'next-intl/server';
import { routing, isValidLocale, Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale: Locale = routing.defaultLocale;

    if (typeof requestLocale === 'string' && isValidLocale(requestLocale)) {
        locale = requestLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});

