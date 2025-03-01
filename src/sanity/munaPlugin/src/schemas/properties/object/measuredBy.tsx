import React from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import Link from 'next/link';


export const measuredBy = {
  name: 'measurement',
  title: 'Måling',
  description: (
    <span>
      <strong>Eksperimentel:</strong> Måling av objektet.{' '}
      <Link target="blank" href={'https://muna.xyz/docs/model/properties#measurement'}>
        <BsFillQuestionCircleFill />
      </Link>
    </span>
  ),
  descriptionEN: (
    <span>
      <strong>Experimental:</strong> Measurment of the object.{' '}
      <Link target="blank" href={'https://muna.xyz/docs/model/properties#measurement'}>
        <BsFillQuestionCircleFill />
      </Link>
    </span>
  ),
  type: 'array',
  of: [{ type: 'Measurement' }],
};
