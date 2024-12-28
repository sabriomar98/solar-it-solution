import Image from "next/image";


export default function ServiceCard({ image, title, description }: { image: string; title: string; description: string }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div>
    )
}