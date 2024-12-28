import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../AnimatedSection'
import { Card, CardHeader, CardDescription, CardContent } from '../ui/card'
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
    const t = useTranslations('Home.testimonials')

    const testimonials = [
        { content: 'testimonial1', author: 'testimonial1Author' },
        { content: 'testimonial2', author: 'testimonial2Author' },
    ]

    return (
        <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                            <Quote className="w-8 h-8 text-blue-600 mb-4" />
                            <CardContent>
                                <p className="italic mb-4">{t(testimonial.content)}</p>
                            </CardContent>
                            <CardDescription>
                                <p className="font-semibold">{t(testimonial.author)}</p>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </AnimatedSection>
    )
}

