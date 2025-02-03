import { defineType } from 'sanity';

const languages = [
  {
    id: "no",
    title: "Norwegian (Bokmål)",
    isDefault: true
  },
  {
    id: "en",
    title: "English",
  },
  {
    id: "ar",
    title: "Arabic"
  },
]

export const baseLanguage = languages.find(l => l.isDefault)

export default defineType({
  name: 'LocalizedString',
  type: 'object',
  title: 'Localized string',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {
        collapsible: true,
      },
    },
  ],
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? undefined : 'translations'
  })),
})
