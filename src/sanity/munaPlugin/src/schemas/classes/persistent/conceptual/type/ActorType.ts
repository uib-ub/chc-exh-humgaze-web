import { FaTag } from 'react-icons/fa'
import { defineType } from 'sanity'
import { defaultFieldsets } from '../../../../../fieldsets/defaultFieldsets'
import { coalesceLabel } from '../../../../../helpers/coalesceLabel'
import { accessState, altLabel, definition, editorialState, label } from '../../../../properties/datatype'

export default defineType({
  name: 'ActorType',
  title: 'Aktørtype',
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
  ],
  preview: {
    select: {
      title: 'label'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: coalesceLabel(title),
      }
    },
  },
})
