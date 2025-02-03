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
  name: 'LocalizedText',
  type: 'object',
  title: 'Localized text',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'text',
    fieldset: lang.isDefault ? undefined : 'translations',
  })),
})
