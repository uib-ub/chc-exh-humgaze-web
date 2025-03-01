import { FaTag } from 'react-icons/fa'
import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../../fieldsets/defaultFieldsets'
import { coalesceLabel } from '../../../../../helpers/coalesceLabel'
import { accessState, altLabel, definition, editorialState, homepage, label } from '../../../../properties/datatype'
import { identifiedBy, inDataset, sameAs, wasOutputOf } from '../../../../properties/object'

export default defineType({
  name: 'TextType',
  title: 'Teksttype',
  type: 'document',
  initialValue: {
    editorialState: 'published',
    accessState: 'open',
  },
  icon: FaTag,
  fieldsets: defaultFieldsets,
  fields: [
    editorialState,
    accessState,
    label,
    altLabel,
    definition,
    homepage,
    identifiedBy,
    {
      name: 'exactMatch',
      title: 'Exact match',
      type: 'array',
      of: [{ type: 'string' }]
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
    sameAs,
    inDataset,
    wasOutputOf
  ],
  preview: {
    select: {
      title: 'label',
      imported: 'wasOutputOf'
    },
    prepare(selection) {
      const { title, imported } = selection
      return {
        title: coalesceLabel(title),
        subtitle: imported ? `Importert fra ${imported.hasSender.label}` : 'Lokal'
      }
    },
  },
})
