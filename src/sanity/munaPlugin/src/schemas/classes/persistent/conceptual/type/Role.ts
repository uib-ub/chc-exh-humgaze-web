import { FaTag } from 'react-icons/fa'
import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../../fieldsets/defaultFieldsets'
import { coalesceLabel } from '../../../../../helpers'
import { accessState, altLabel, definition, editorialState, homepage, label } from '../../../../properties/datatype'
import { identifiedBy, inDataset, sameAs, wasOutputOf } from '../../../../properties/object'

export default defineType({
  name: 'Role',
  title: 'Rolle',
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
    identifiedBy,
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
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: coalesceLabel(title),
      }
    },
  },
})
