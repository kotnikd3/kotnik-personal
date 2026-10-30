import { renderToString } from '@vue/server-renderer'
import portrait from './assets/denis_kotnik.webp'
import { createApplication } from './app'
import { getLocale } from './plugins/i18n'

const origin = 'https://kotnik.si'
const descriptions = {
    sl: 'Denis Kotnik, magister strojnega u\u010denja in specializant psihodinamske psihoterapije. O meni ter mojih zanimanjih za psihoanalizo in filozofijo.',
    en: 'Denis Kotnik holds a master\'s degree in machine learning and is a psychodynamic psychotherapy trainee with interests in psychoanalysis and philosophy.',
}

export async function prerender({ url }) {
    const locale = getLocale(new globalThis.URL(url, origin).pathname)
    const canonical = `${origin}${locale === 'en' ? '/en/' : '/'}`
    const title = locale === 'en' ? 'Denis Kotnik | About Me' : 'Denis Kotnik | O meni'
    const description = descriptions[locale]
    const image = new globalThis.URL(portrait, origin).href
    const person = {
        '@type': 'Person',
        '@id': `${origin}/#person`,
        name: 'Denis Kotnik',
        url: `${origin}/`,
        image,
        sameAs: [
            'https://github.com/kotnikd3',
            'https://www.linkedin.com/in/denis-kotnik/',
            'https://www.facebook.com/kotnikd3',
        ],
    }

    return {
        html: await renderToString(createApplication({ locale, hydrate: true })),
        links: new Set(['/', '/en/']),
        head: {
            lang: locale,
            title,
            elements: new Set([
                { type: 'link', props: { rel: 'canonical', href: canonical } },
                ...[['sl', '/'], ['en', '/en/'], ['x-default', '/']].map(([hreflang, path]) => ({
                    type: 'link', props: { rel: 'alternate', hreflang, href: `${origin}${path}` },
                })),
                { type: 'meta', props: { name: 'description', content: description } },
                ...Object.entries({
                    'og:type': 'profile',
                    'og:site_name': 'Denis Kotnik',
                    'og:title': title,
                    'og:description': description,
                    'og:url': canonical,
                    'og:image': image,
                    'og:image:alt': 'Denis Kotnik',
                    'og:locale': locale === 'en' ? 'en_GB' : 'sl_SI',
                    'og:locale:alternate': locale === 'en' ? 'sl_SI' : 'en_GB',
                }).map(([property, content]) => ({ type: 'meta', props: { property, content } })),
                { type: 'meta', props: { name: 'twitter:card', content: 'summary' } },
                {
                    type: 'script',
                    props: { type: 'application/ld+json' },
                    children: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ProfilePage',
                        '@id': `${canonical}#profile`,
                        url: canonical,
                        name: title,
                        description,
                        inLanguage: locale,
                        mainEntity: person,
                    }),
                },
            ]),
        },
    }
}