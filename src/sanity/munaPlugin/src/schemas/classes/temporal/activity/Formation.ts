import { GiStarFormation } from 'react-icons/gi'
import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../fieldsets/defaultFieldsets'
import { featured } from '../../../properties/datatype'
import { motivatedBy, referredToBy, timespanSingleton, tookPlaceAt } from '../../../properties/object'

// Implisit 'wasFormedBy' to parent actor

export default defineType({
  name: 'Formation',
  type: 'document',
  title: 'Opprettelse',
  icon: GiStarFormation,
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
    {
      name: 'formedFrom',
      title: 'Opprettet fra',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'Actor' }
          ],
          options: {
            filter: '_type == "Actor" && references($id)',
            filterParams: { id: 'd4ad3e47-1498-4b95-9b7f-c25be386691a' }
          }
        }
      ],
    },
    timespanSingleton,
    tookPlaceAt,
    motivatedBy,
    referredToBy,
  ],
  preview: {
    select: {
      type: '_type',
    },
    prepare(selection) {
      const { type } = selection
      return {
        title: `${type}`,
      }
    },
  },
})
