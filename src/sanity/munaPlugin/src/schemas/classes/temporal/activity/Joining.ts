import { BiDoorOpen } from 'react-icons/bi'
import { defineType } from 'sanity'
import { coalesceLabel, timespanAsString } from '../../../../helpers'
import { featured } from '../../../properties/datatype'
import { referredToBy, timespanSingleton, tookPlaceAt } from '../../../properties/object'

export default defineType({
  name: 'Joining',
  type: 'document',
  title: 'Innlemmelse',
  icon: BiDoorOpen,
  fieldsets: [
    {
      name: 'core',
      title: 'coresregistrering',
      options: { collapsible: true, collapsed: false },
    },
  ],
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
    timespanSingleton,
    tookPlaceAt,
    {
      name: 'joinedWith',
      title: 'Innlemmet i gruppe',
      description: 'Group that actor(s) joined with',
      type: 'reference',
      to: [
        { type: 'Actor' }
      ],
      options: {
        filter: '_type == "Actor" && references($id)',
        filterParams: { id: 'd4ad3e47-1498-4b95-9b7f-c25be386691a' },
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      }
    },
    {
      name: 'joined',
      title: 'Innlemmet aktør(er)',
      description: 'Actor(s) that joined this group',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'Actor' },
          ]
        }
      ],
      options: {
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      },
    },
    referredToBy,
  ],
  preview: {
    select: {
      type: '_type',
      joinedWith: 'joinedWith.label',
      bb: 'timespan.beginOfTheBegin',
      eb: 'timespan.endOfTheBegin',
      date: 'timespan.date',
      be: 'timespan.beginOfTheEnd',
      ee: 'timespan.endOfTheEnd',
    },
    prepare(selection) {
      const { type, joinedWith, bb, eb, date, be, ee } = selection
      const timespanString = timespanAsString(bb, eb, date, be, ee, 'nb')
      return {
        title: `${type}: ${joinedWith ? coalesceLabel(joinedWith) : ''}`,
        subtitle: timespanString ?? '',
      }
    },
  },
})
