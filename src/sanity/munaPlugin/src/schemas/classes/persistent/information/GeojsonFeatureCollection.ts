import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../fieldsets/defaultFieldsets'
import { coalesceLabel } from '../../../../helpers/coalesceLabel'

export default defineType({
  name: 'GeojsonFeatureCollection',
  type: 'object',
  title: 'Feature Collection',
  fieldsets: defaultFieldsets,
  fields: [
    // Foreign member not in the GeoJSON schema
    {
      name: 'label',
      title: 'Tittel',
      description: '',
      fieldset: 'core',
      type: 'LocalizedString',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'GeojsonFeature' }],
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare(selection) {
      const { title } = selection
      const label = coalesceLabel(title)

      return {
        title: label || 'GeoJSON Feature Collection',
      }
    },
  },
})
