export const dynamic = 'force-static'

import { Footer } from '@/src/components/Footer'
import SanityImage from '@/src/components/SanityImage'
import { Link } from '@/src/i18n/navigation'
import { sanityFetch } from '@/src/sanity/lib/fetch'
import { items } from '@/src/sanity/lib/queries/fragments'
import { getTranslations, setRequestLocale } from 'next-intl/server'

const getItems = async (lang: string) => {
  const data = await sanityFetch({
    query: items,
    params: { language: lang },
    perspective: 'published',
    stega: false
  })
  return data
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  // Enable static rendering
  setRequestLocale(lang);

  const t = await getTranslations({ locale: lang, namespace: 'Bla' })

  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function BlaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const items = (await getItems(lang)).filter((item: any) => item.preferredIdentifier.startsWith('ubb'))
  // Enable static rendering
  setRequestLocale(lang);
  const t = await getTranslations('Bla')

  return (
    <div>
      <div className="container mx-auto p-5">
        <h1 className='text-2xl font-bold mb-5'>{t('title')}</h1>
        <h2 className='text-xl mb-5'>{t('description')}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 min-h-screen'>
          {items && items.map((item: any) => {
            const cardTitle = item.label[lang] || item.label.en || item.label.no || 'Missing title'
            return (
              <div key={item._id} className="overflow-hidden">
                <div className="w-full relative">
                  {item.image ? (
                    <Link href={`/id/${item._id}`} className="block h-full">
                      <SanityImage
                        image={item.image}
                        className="object-contain w-full h-full"
                      />
                    </Link>
                  ) : (
                    <div className="w-full h-full bg-gray-100 dark:bg-gray-800" />
                  )}
                </div>
                <div className="p-5 bg-white dark:bg-black grid-rows-subgrid">
                  <h5 className="text-xl font-medium mb-2">
                    <Link href={`/id/${item._id}`}>{cardTitle}</Link>
                  </h5>
                  <p className="text-base mb-4">
                    {item.referredToBy?.[lang || '']}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer locale={lang} className='mx-auto flex justify-center items-center h-screen' />
    </div>
  )
}
