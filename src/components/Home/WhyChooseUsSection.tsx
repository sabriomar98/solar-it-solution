import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../AnimatedSection'
import { CheckCircle } from 'lucide-react'

export function WhyChooseUsSection() {
    const t = useTranslations('Home.whyChooseUs')

    const reasons = ['expertise', 'customizedSolutions', 'commitment', 'excellentSupport']

    return (
        <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 mr-2 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold mb-2">{t(`${reason}.title`)}</h3>
                            <p>{t(`${reason}.description`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    )
}

