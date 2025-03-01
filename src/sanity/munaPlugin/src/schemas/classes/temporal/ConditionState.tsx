import Link from 'next/link'
import React from "react"
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { defineType } from 'sanity'
import { coalesceLabel } from "../../../helpers"
import { valueSlider } from '../../properties/datatype'

export default defineType({
  name: 'ConditionState',
  type: 'object',
  title: 'Tilstandsstatus',
  fields: [
    {
      name: 'hasType',
      title: 'Klassifisert som',
      type: 'reference',
      to: [{ type: 'ConditionType' }],
      validation: (Rule) => Rule.required(),
      options: {
        semanticSanity: {
          '@type': '@id'
        }
      },
    },
    valueSlider,
    {
      name: 'attributes',
      title: 'Egenskaper',
      description: 'Eksempel på custom felt for spesialistvurderinger',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Missing', value: 'missing' },
          { title: 'Partial remains', value: 'partialRemains' },
        ],
        semanticSanity: {
          '@container': '@set',
        }
      },
    },
    {
      name: 'images',
      title: 'Dokumentasjonsfotografi',
      description: (
        <span>
          Bilder knyttet til rapporten som dokumentere det rapporten omhandler.{' '}
          <Link
            target="blank"
            href={'https://muna.xyz/docs/model/properties#documentation-images'}
          >
            <BsFillQuestionCircleFill />
          </Link>
        </span>
      ),
      type: 'array',
      of: [{ type: 'DigitalObjectImage' }],
      options: {
        layout: 'grid',
        semanticSanity: {
          '@container': '@set',
          '@type': '@id'
        }
      },
    },
  ],
  preview: {
    select: {
      type: 'hasType.label',
      value: 'value',
    },
    prepare(selection) {
      const { type, value } = selection
      return {
        title: `${coalesceLabel(type)}: ${value} / 100`,
      }
    },
  },
})
