import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import Link from 'next/link';


export const subjectOfManifest = {
  name: 'subjectOfManifest',
  title: 'Hovedmanifest',
  type: 'url',
  description: (
    <span>
      Hovedmanifestet til objektet.{' '}
      <Link target="blank" href={'https://muna.xyz/docs/model/properties#main-representation'}>
        <BsFillQuestionCircleFill />
      </Link>
    </span>
  ),
};
