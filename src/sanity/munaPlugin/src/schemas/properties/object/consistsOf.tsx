import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import Link from 'next/link';


export const consistsOf = {
  name: 'consistsOf',
  title: 'Laget av',
  description: (
    <span>
      Hvilket material objektet er laget av, for eksempel lær og/eller pergament.
      .{' '}
      <Link target="blank" href={'https://muna.xyz/docs/model/properties#consists-of'}>
        <BsFillQuestionCircleFill />
      </Link>
    </span>
  ),
  descriptionEN: (
    <span>
      The material the item is produced with, eg. leather and-or parchment.{' '}
      <Link target="blank" href={'https://muna.xyz/docs/model/properties#consists-of'}>
        <BsFillQuestionCircleFill />
      </Link>
    </span>
  ),
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [{ type: 'Material' }],
    },
  ],
  options: {
    semanticSanity: {
      '@container': '@list',
      '@type': '@id'
    }
  },
};
