import { FaTruckLoading } from 'react-icons/fa'
import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../fieldsets/defaultFieldsets'
import { accessState, editorialState, label } from '../../../properties/datatype'
import {
  carriedOutBy, motivatedBy, referredToBy, timespanSingleton, tookPlaceAt
} from '../../../properties/object'

export default defineType({
  name: 'Move',
  title: 'Move',
  type: 'document',
  initialValue: {
    editorialState: 'review',
    accessState: 'secret',
  },
  icon: FaTruckLoading,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
    carriedOutBy,
    timespanSingleton,
    tookPlaceAt,
    referredToBy,
    {
      name: 'moved',
      title: 'Flyttet',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'HumanMadeObject' },
            { type: 'Exhibition' },
            { type: 'Actor' }
          ],
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
      name: 'movedFrom',
      title: 'Flyttet fra',
      type: 'reference',
      to: [
        { type: 'Place' },
        { type: 'Storage' }
      ],
      options: {
        semanticSanity: {
          '@type': '@id'
        }
      },
    },
    {
      name: 'movedTo',
      title: 'Flyttet til',
      type: 'reference',
      to: [
        { type: 'Place' },
        { type: 'Storage' }
      ],
      options: {
        semanticSanity: {
          '@type': '@id'
        }
      },
    },
    motivatedBy,
  ],
  preview: {
    select: {
      type: '_type',
      published: 'accessState',
    },
    prepare(selection) {
      const { type, published } = selection
      const secret = published === 'secret' ? '🔒' : ''

      return {
        title: `${type}`,
        subtitle: secret,
      }
    },
  },
})
