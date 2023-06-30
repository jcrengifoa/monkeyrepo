import Button from '@monkeyrepo/button';

import { ICardProps } from './card.types';

import cardStyles from './card.module.scss';

function Card(props: ICardProps) {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.card__title}>
        <h1>{props.title}</h1>
      </div>
      <div className={cardStyles.card__content}>
        <Button onClick={() => alert('Everybody')} label='Alert Everybody!' />
      </div>
    </div>
  );
}

export default Card;
