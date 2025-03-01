import { FaCrown } from 'react-icons/fa'
import { defineType } from 'sanity'
import { accessState, editorialState, labelSingleton } from '../../../properties/datatype'
import { identifiedBy } from '../../../properties/object'

export default defineType({
  name: 'Work',
  type: 'document',
  title: 'Work',
  icon: FaCrown,
  fieldsets: [
    {
      name: 'state',
      title: 'Status',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    editorialState,
    accessState,
    {
      name: 'hasType',
      title: 'Klassifisert som',
      description: '',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'WorkType' }],
        },
      ],
      validation: (Rule) => Rule.required(),
      options: {
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      },
    },
    labelSingleton,
    identifiedBy,
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
        title: title,
      }
    },
  },
})
