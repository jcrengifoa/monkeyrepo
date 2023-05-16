import React from 'react';

import Button from '@jcrengifoa/button';

import { ICardProps } from './card.types';

import cardStyles from './card.module.scss';

function Card(props: ICardProps) {
  return (
    <div>
      <h1 className={cardStyles.title}>{props.title}</h1>
      <Button onClick={() => alert('Everybody')} label='Alert Everybody!' />
    </div>
  );
}

export default Card;
