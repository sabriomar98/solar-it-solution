import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { AnimatedSection } from '@/components/AnimatedSection'
import ContactForm from '@/components/contact'

type PageProps = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contact' })
    return {
        title: t('title'),
        description: t('contactDescription'),
    }
}

export default async function Contact({ params }: PageProps) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'contact' })

    const translations = {
        title: t('title'),
        getInTouch: t('getInTouch'),
        contactDescription: t('contactDescription'),
        ourOffice: t('ourOffice'),
        country: t('country'),
        contactInfo: t('contactInfo'),
        phone: t('phone'),
        name: t('name'),
        email: t('email'),
        message: t('message'),
        sendMessage: t('sendMessage'),
        namePlaceholder: t('namePlaceholder'),
        emailPlaceholder: t('emailPlaceholder'),
        messagePlaceholder: t('messagePlaceholder'),
        sending: t('sending'),
        send: t('send'),
        successTitle: t('successTitle'),
        successMessage: t('successMessage'),
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <AnimatedSection>
                <h1 className="text-4xl font-bold mb-8 text-center">{translations.title}</h1>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedSection>
                    <h2 className="text-2xl font-semibold mb-4">{translations.getInTouch}</h2>
                    <p className="mb-4">{translations.contactDescription}</p>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">{translations.ourOffice}</h3>
                        <p>123 Solar Street</p>
                        <p>Tech City, TC 12345</p>
                        <p>{translations.country}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{translations.contactInfo}</h3>
                        <p>Email: info@solaritsolutions.com</p>
                        <p>{translations.phone}: +1 (555) 123-4567</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <ContactForm translations={translations} />
                </AnimatedSection>
            </div>
        </div>
    )
}

