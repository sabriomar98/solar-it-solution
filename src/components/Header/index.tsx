'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, ChevronDown, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Link, locales, usePathname, useRouter } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

const Header = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()
    const router = useRouter()
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const t = useTranslations('Header')

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleLangMenu = () => setIsLangOpen(!isLangOpen)
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

    const currentLang = pathname.startsWith('/fr') ? 'FR' : 'EN'

    const switchLocale = (newLocale: string) => {
        router.push(pathname, { locale: newLocale })
        setIsLangOpen(false)
        setIsMobileMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-gray-800 dark:text-white">
                <Link href="/" className="text-2xl font-bold text-foreground">
                    {t('title')}
                </Link>
                <div className="flex items-center space-x-4">
                    <ul className="hidden md:flex space-x-4">
                        <li><Link href="/" className="text-foreground hover:text-primary">{t('home')}</Link></li>
                        <li><Link href="/services" className="text-foreground hover:text-primary">{t('services')}</Link></li>
                        <li><Link href="/contact" className="text-foreground hover:text-primary">{t('contact')}</Link></li>
                    </ul>
                    <div className="relative hidden md:block">
                        <button onClick={toggleLangMenu} className="flex items-center space-x-1 text-foreground">
                            <span>{currentLang}</span>
                            <ChevronDown size={20} />
                        </button>
                        {isLangOpen && (
                            <div className="absolute right-0 mt-2 py-2 w-24 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
                                {locales.map((locale) => (
                                    <button
                                        key={locale}
                                        onClick={() => switchLocale(locale)}
                                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                                    >
                                        {locale === 'en' ? t('english') : t('french')}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
                    </button>
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 py-2">
                    <ul className="flex flex-col items-center space-y-2">
                        <li><Link href="/" className="block py-2 px-4 text-foreground hover:text-primary" onClick={toggleMobileMenu}>{t('home')}</Link></li>
                        <li><Link href="/services" className="block py-2 px-4 text-foreground hover:text-primary" onClick={toggleMobileMenu}>{t('services')}</Link></li>
                        <li><Link href="/contact" className="block py-2 px-4 text-foreground hover:text-primary" onClick={toggleMobileMenu}>{t('contact')}</Link></li>
                        <li>
                            <div className="relative">
                                <button onClick={toggleLangMenu} className="flex items-center space-x-1 text-foreground py-2 px-4">
                                    <span>{currentLang}</span>
                                    <ChevronDown size={20} />
                                </button>
                                {isLangOpen && (
                                    <div className="absolute left-0 mt-2 py-2 w-24 bg-white dark:bg-gray-700 rounded-md shadow-xl z-20">
                                        {locales.map((locale) => (
                                            <button
                                                key={locale}
                                                onClick={() => switchLocale(locale)}
                                                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left"
                                            >
                                                {locale === 'en' ? t('english') : t('french')}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header

