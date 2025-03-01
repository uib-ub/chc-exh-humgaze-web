import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import Link from 'next/link';

export const hasCurrentOwner = {
  name: 'hasCurrentOwner',
  title: 'Nåværende eier',
  titleEN: 'Current owner',
  description: (
    <span>
      Nåværende eier av dette objektet.{' '}
      <Link target="blank" href={'https://muna.xyz/docs/model/properties#current-owner'}>
        <BsFillQuestionCircleFill />
      </Link>
    </span>
  ),
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        { type: 'Actor' },
      ],
    },
  ],
};
