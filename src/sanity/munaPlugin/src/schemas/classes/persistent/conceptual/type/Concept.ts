import { FaTag } from 'react-icons/fa'
import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../../fieldsets/defaultFieldsets'
import { coalesceLabel } from '../../../../../helpers/coalesceLabel'
import { accessState, altLabel, editorialState, label, definition, homepage } from '../../../../properties/datatype'
import { identifiedBy, inDataset, sameAs, wasOutputOf } from '../../../../properties/object'

export default defineType({
  name: 'Concept',
  title: 'Concept',
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
    identifiedBy,
    definition,
    homepage,
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
