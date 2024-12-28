import { useTranslations } from 'next-intl'
import { AnimatedSection } from '../AnimatedSection'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'

export function ProjectsSection() {
    const t = useTranslations('Home.projects')

    const projects = [
        { image: '/images/project1.png', title: 'project1Title', description: 'project1Desc' },
        { image: '/images/project2.png', title: 'project2Title', description: 'project2Desc' },
        { image: '/images/ecomplat.png', title: 'project3Title', description: 'project3Desc' },
    ]

    return (
        <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                            <Image src={project.image} alt={t(project.title)} width={400} height={300} className="w-full h-48 object-cover" />
                        </CardContent>
                        <CardHeader>
                            <CardTitle>{t(project.title)}</CardTitle>
                            <CardDescription>{t(project.description)}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </AnimatedSection>
    )
}

