import { FaImage } from 'react-icons/fa'
import { defineType } from 'sanity'
import { coalesceLabel } from '../../../../helpers/coalesceLabel'

export default defineType({
  name: 'VisualItem',
  description: 'Image content worthy of description as distinct entities, such as the image shown by a painting or drawing',
  type: 'document',
  title: 'Visual object',
  icon: FaImage,
  fields: [
    {
      name: 'label',
      title: 'Tittel',
      type: 'LocalizedString',
      validation: (Rule) => Rule.required(),
      options: {
        semanticSanity: {
          '@container': '@language',
        }
      },
    },
    {
      name: 'activityStream',
      title: 'Aktivitetsstrøm',
      description: 'Events and activities connected to this object',
      type: 'array',
      of: [{ type: 'Creation' }],
      options: {
        semanticSanity: {
          '@container': '@list',
          '@type': '@id'
        }
      },
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare(selection) {
      const { title } = selection

      return {
        title: coalesceLabel(title),
      }
    },
  },
})
