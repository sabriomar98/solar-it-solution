import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../AnimatedSection'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { SunIcon as Solar, Cpu } from 'lucide-react'

export function ServicesSection() {
    const t = useTranslations('Home.services')

    const services = [
        { icon: Solar, title: 'solarEnergySolutions', description: 'solarEnergyDesc' },
        { icon: Cpu, title: 'itServices', description: 'itServicesDesc' },
    ]

    return (
        <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <service.icon className="w-12 h-12 mb-4 text-blue-600" />
                            <CardTitle>{t(service.title)}</CardTitle>
                            <CardDescription>{t(service.description)}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </AnimatedSection>
    )
}

