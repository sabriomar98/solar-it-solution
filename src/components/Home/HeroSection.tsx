import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../AnimatedSection'
import { Button } from '../ui/button'

export function HeroSection() {
    const t = useTranslations('Home.hero')

    return (
        <AnimatedSection className="mb-16 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                {t('title')}
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t('subtitle')}</p>
            <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transition-all duration-300">
                    {t('cta')}
                </Button>
            </Link>
        </AnimatedSection>
    )
}

