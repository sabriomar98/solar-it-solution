'use client'

import { useState } from 'react'
import Link from "next/link"
import { useTranslations } from 'next-intl'
import {  Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from '@/hooks/use-toast'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const t = useTranslations('Footer')
    const { toast } = useToast()
    const [email, setEmail] = useState('')

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the email to your server or a third-party service
        console.log('Subscribed:', email)
        toast({
            title: t('subscribeSuccess'),
            description: t('subscribeMessage'),
        })
        setEmail('')
    }

    return (
        <footer className="bg-gradient-to-r from-blue-900 to-green-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">{t('companyName')}</h3>
                        <p className="text-sm">{t('companyDescription')}</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">{t('home')}</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">{t('services')}</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">{t('about')}</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">{t('contact')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('contactUs')}</h4>
                        <ul className="space-y-2">
                            <li>{t('address')}</li>
                            <li>{t('email')}: info@solaritsolutions.com</li>
                            <li>{t('phone')}: +1 (555) 123-4567</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('newsletter')}</h4>
                        <p className="mb-4 text-sm">{t('newsletterDescription')}</p>
                        <form onSubmit={handleSubscribe} className="flex">
                            <Input
                                type="email"
                                placeholder={t('emailPlaceholder')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-r-none"
                                required
                            />
                            <Button type="submit" className="rounded-l-none">
                                <Send size={20} />
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                    <p>&copy; {new Date().getFullYear()} SolarIT Solutions. {t('allRightsReserved')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

