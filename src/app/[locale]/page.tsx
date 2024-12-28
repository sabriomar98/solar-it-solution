import HomeComponent from '@/components/Home';
import { setRequestLocale } from 'next-intl/server';

export default async function Home(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  setRequestLocale(locale)

  return (
    <>
      <HomeComponent />
    </>
  )
}

