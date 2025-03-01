import { defineType } from 'sanity'

export default defineType({
  type: 'object',
  name: 'IllustrationWithCaption',
  title: 'Illustrasjon med bildetekst',
  fields: [
    {
      name: 'disabled',
      title: 'Avslått?',
      type: 'boolean',
    },
    {
      name: 'view',
      title: 'Visningsvalg',
      description: 'Velg om bildet skal vises i sin helhet eller dekke et område. "Vis hele bildet" er standard.',
      type: 'string',
      initialValue: 'contain',
      options: {
        list: [
          { title: 'Vis hele bildet', value: 'contain' },
          { title: 'Dekk områder (kan føre til beskjæring)', value: 'cover' },
        ],
      },
    },
    {
      name: 'label',
      title: 'Tittel',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Tekst',
      type: 'simpleBlockContent',
    },
    {
      name: 'source',
      title: 'Kilde',
      description: 'Legg til kilde eller kreditering',
      type: 'simpleBlockContent',
    },
    {
      name: 'illustration',
      title: 'Illustrasjonsbilde',
      type: 'Illustration',
    },
  ],
  preview: {
    select: {
      title: 'label',
      media: 'illustration',
      disabled: 'disabled',
    },
    prepare({ title, media, disabled }) {
      return {
        title: title,
        subtitle: `${disabled ? 'Avslått: ' : ''}Illustrasjon`,
        media: media?.image,
      }
    },
  },
})
