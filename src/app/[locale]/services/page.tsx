import { AnimatedSection } from '@/components/AnimatedSection'
import { getTranslations } from 'next-intl/server'
import ServiceCard from '@/components/reusable/ServiceCard'
import { Link } from '@/i18n/routing'
import { Metadata } from 'next'


type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: 'Metadata' })
    console.log(locale);
    
    console.log(t("servicesTitle"));
    
    return {
        title: t('servicesTitle'),
        description: t('servicesDescription'),
    }
}

export default async function Services({ params }: Props) {
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: 'services' })

    const services = [
        { image: "/images/service1.png", title: 'solarPanelInstallation', description: 'solarPanelInstallationDesc' },
        { image: "/images/service2.png", title: 'energyManagementSystems', description: 'energyManagementSystemsDesc' },
        { image: "/images/service3.png", title: 'websiteDevelopment', description: 'websiteDevelopmentDesc' },
        { image: "/images/service4.png", title: 'customSoftwareSolutions', description: 'customSoftwareSolutionsDesc' },
        { image: "/images/service5.png", title: 'solarMaintenance', description: 'solarMaintenanceDesc' },
        { image: "/images/service6.png", title: 'cloudServices', description: 'cloudServicesDesc' },
    ]

    return (
        <div className="container mx-auto px-4 py-12">
            <AnimatedSection>
                <h1 className="text-4xl font-bold mb-12 text-center">{t('ourServices')}</h1>
                <p className="text-xl text-center mb-16">{t('servicesIntro')}</p>
            </AnimatedSection>

            <AnimatedSection className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">{t('solarEnergySolutions')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.slice(0, 3).map((service, index) => (
                        <ServiceCard key={index} image={service.image} title={t(service.title)} description={t(service.description)} />
                    ))}
                </div>
            </AnimatedSection>

            <AnimatedSection className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">{t('itServices')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.slice(3, 6).map((service, index) => (
                        <ServiceCard key={index} image={service.image} title={t(service.title)} description={t(service.description)} />
                    ))}
                </div>
            </AnimatedSection>

            <AnimatedSection className="mb-16">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-4">{t('consultingServices')}</h2>
                    <p className="mb-6">{t('consultingServicesDesc')}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            {t('energyAudits')}
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            {t('itInfrastructureAssessment')}
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            {t('sustainabilityPlanning')}
                        </li>
                        <li className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            {t('technologyRoadmapping')}
                        </li>
                    </ul>
                </div>
            </AnimatedSection>

            <AnimatedSection className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">{t('ourProcess')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {['consultation', 'planning', 'implementation', 'support'].map((step, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
                            <div className="text-4xl font-bold text-blue-500 mb-4">{index + 1}</div>
                            <h3 className="text-xl font-semibold mb-2">{t(`process${step.charAt(0).toUpperCase() + step.slice(1)}`)}</h3>
                            <p>{t(`process${step.charAt(0).toUpperCase() + step.slice(1)}Desc`)}</p>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            <AnimatedSection className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">{t('whyChooseUs')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">{t('expertise')}</h3>
                        <p className="mb-4">{t('expertiseDesc')}</p>
                        <h3 className="text-2xl font-semibold mb-4">{t('customizedSolutions')}</h3>
                        <p>{t('customizedSolutionsDesc')}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">{t('sustainabilityFocus')}</h3>
                        <p className="mb-4">{t('sustainabilityFocusDesc')}</p>
                        <h3 className="text-2xl font-semibold mb-4">{t('customerSupport')}</h3>
                        <p>{t('customerSupportDesc')}</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <h2 className="text-3xl font-bold mb-8 text-center">{t('getStarted')}</h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg p-8 text-center">
                    <p className="text-xl mb-6">{t('getStartedDesc')}</p>
                    <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        {t('contactUs')}
                    </Link>
                </div>
            </AnimatedSection>
        </div>
    )
}

