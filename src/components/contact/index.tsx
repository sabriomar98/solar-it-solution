'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatedSection } from '@/components/AnimatedSection'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, Mail, Phone, MapPin, Facebook, Twitter, LinkedinIcon as LinkedIn } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useToast } from '@/hooks/use-toast'


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactComponent() {
    const t = useTranslations('contact')
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values)
        setIsSubmitting(false)
        form.reset()
        toast({
            title: t('successTitle'),
            description: t('successMessage'),
        })
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <AnimatedSection>
                <h1 className="text-4xl font-bold mb-8 text-center">{t('contactUs')}</h1>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <AnimatedSection>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">{t('getInTouch')}</h2>
                        <p className="mb-8">{t('contactDescription')}</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <MapPin className="w-6 h-6 mr-4 text-green-600" />
                                <div>
                                    <h3 className="font-semibold">{t('ourOffice')}</h3>
                                    <p>123 Solar Street</p>
                                    <p>Tech City, TC 12345</p>
                                    <p>{t('country')}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-6 h-6 mr-4 text-green-600" />
                                <div>
                                    <h3 className="font-semibold">{t('email')}</h3>
                                    <p>info@solaritsolutions.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-6 h-6 mr-4 text-green-600" />
                                <div>
                                    <h3 className="font-semibold">{t('phone')}</h3>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">{t('followUs')}</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-green-600">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-green-600">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-green-600">
                                    <LinkedIn className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-8 h-64 rounded-lg overflow-hidden">
                        <MapComponent />
                    </div> */}
                </AnimatedSection>
                <AnimatedSection>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">{t('sendMessage')}</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('name')}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t('namePlaceholder')} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('email')}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t('emailPlaceholder')} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('message')}</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder={t('messagePlaceholder')}
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {isSubmitting ? t('sending') : t('send')}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}

