import { GiTransform } from 'react-icons/gi'
import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../fieldsets/defaultFieldsets'
import { featured } from '../../../properties/datatype'
import { carriedOutBy, referredToBy, timespanSingleton, tookPlaceAt } from '../../../properties/object'

export default defineType({
  name: 'Transformation',
  type: 'document',
  title: 'Transformasjon',
  icon: GiTransform,
  fieldsets: defaultFieldsets,
  fields: [
    featured,
    {
      name: 'hasType',
      title: 'Klassifisert som',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'EventType' }],
        },
      ],
      options: {
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      },
    },
    carriedOutBy,
    timespanSingleton,
    tookPlaceAt,
    referredToBy,
  ],
  preview: {
    select: {
      date: 'timespan',
    },
    prepare(selection) {
      const { date } = selection
      return {
        title: 'Transformasjon' + (date ? ', datert ' + date : ''),
      }
    },
  },
})
