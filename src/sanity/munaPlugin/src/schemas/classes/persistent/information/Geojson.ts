import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../fieldsets/defaultFieldsets'
import { label } from '../../../properties/datatype'
import { referredToBy } from '../../../properties/object'

export default defineType({
  name: 'Geojson',
  type: 'object',
  title: 'geoJSON',
  fieldsets: defaultFieldsets,
  fields: [
    label,
    referredToBy,
    {
      name: 'data',
      title: 'Data',
      description:
        'Besøk geojson.io/ og konstruér din geoJSON. Lag punkt, linjer, rekangler eller polygon for å fortelle din historie.',
      type: 'code',
      options: {
        language: 'json',
        theme: 'monokai',
      },
    },
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare(selection) {
      const { type } = selection
      return {
        title: type,
      }
    },
  },
})
