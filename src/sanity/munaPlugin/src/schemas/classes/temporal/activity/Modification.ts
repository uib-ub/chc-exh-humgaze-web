import { GiFactory } from 'react-icons/gi'
import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../fieldsets/defaultFieldsets'
import { timespanAsString } from '../../../../helpers'
import {
  featured
} from '../../../properties/datatype'
import {
  contributionAssignedBy, referredToBy, timespanSingleton, tookPlaceAt, usedGeneralTechnique, usedSpecificTechnique
} from '../../../properties/object'

export default defineType({
  name: 'Modification',
  type: 'document',
  title: 'Modification',
  icon: GiFactory,
  fieldsets: defaultFieldsets,
  fields: [
    featured,
    {
      name: 'consistsOf',
      title: 'Underaktiviteter',
      type: 'array',
      of: [{ type: 'Modification' }],
      options: {
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      },
    },
    {
      name: 'hasType',
      title: 'Klassifisert som',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'ActivityType' }],
        },
      ],
      options: {
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      },
    },
    contributionAssignedBy,
    timespanSingleton,
    tookPlaceAt,
    referredToBy,
    {
      name: 'hasModified',
      title: 'Har modifisert',
      description: 'A production can modify an existing object',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'HumanMadeObject' }] }],
      options: {
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      },
    },
    usedGeneralTechnique,
    usedSpecificTechnique,
    {
      name: 'employed',
      title: 'Benyttet',
      description: 'WIP, could be a API call to some source of authorities',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'Material' }] }],
      options: {
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      },
    },
  ],
  preview: {
    select: {
      contributor: 'contributionAssignedBy.0.assignedActor.label',
      contributorName: 'contributionAssignedBy.0.usedName.content',
      bb: 'timespan.beginOfTheBegin',
      eb: 'timespan.endOfTheBegin',
      date: 'timespan.date',
      be: 'timespan.beginOfTheEnd',
      ee: 'timespan.endOfTheEnd',
      type: '_type',
    },
    prepare(selection) {
      const { type, contributor, contributorName, bb, eb, date, be, ee } = selection
      const timespanString = timespanAsString(bb, eb, date, be, ee, 'nb')

      return {
        title: `${type}, by ${contributor || contributorName || 'unknown'}`,
        subtitle: timespanString,
      }
    },
  },
})
