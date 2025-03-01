import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../fieldsets/defaultFieldsets'
import { carriedOutBy, referredToBy, timespan, tookPlaceAt, usedGeneralTechnique, usedObjectOfType, usedSpecificObject, usedSpecificTechnique } from '../../../properties/object'

// Se https://link.springer.com/article/10.1007/s00799-016-0199-x for eksempel på modellering

export default defineType({
  name: 'Sampling',
  title: 'Prøvetaking',
  type: 'object',
  fieldsets: defaultFieldsets,
  fields: [
    carriedOutBy,
    timespan,
    tookPlaceAt,
    referredToBy,
    usedGeneralTechnique,
    usedSpecificTechnique,
    usedObjectOfType,
    usedSpecificObject,
  ],
  preview: {
    select: {
      date: 'timespan',
    },
    prepare(selection) {
      const { date } = selection
      return {
        title: 'Prøvetaking' + (date ? ', datert ' + date : ''),
      }
    },
  },
})
