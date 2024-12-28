import ContactComponent from '@/components/contact'
import { setRequestLocale } from 'next-intl/server'

export default async function Contact(params: Promise<{ locale: string }>) {
    const { locale } = await params
    setRequestLocale(locale)

    return (
        <>
            <ContactComponent />
        </>
    )
}

