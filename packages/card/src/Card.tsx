import Button from '@jcrengifoa/button';
import { ICardProps } from './card.types';

function Card(props: ICardProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Button onClick={() => alert('Everybody')} label='Alert Everybody!' />
    </div>
  );
}

export default Card;
