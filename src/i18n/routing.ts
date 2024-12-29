import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['fr', 'en'] as const;
export const defaultLocale = 'fr' as const;

export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix:"always"
});

export type Locale = (typeof locales)[number];


export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

