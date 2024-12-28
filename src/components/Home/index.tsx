import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { ServicesSection } from "./ServicesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { WhyChooseUsSection } from "./WhyChooseUsSection";


export default function HomeComponent() {
    return (
        <div className="container mx-auto px-4 py-12">
            <HeroSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <ProjectsSection />
            <TestimonialsSection />
        </div>
    )
}

