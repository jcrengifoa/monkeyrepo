import { IComponentProps } from './component.types';

import componentStyles from './component.module.scss';

function Component(props: IComponentProps) {
  return <p className={componentStyles.card}>{props.text}</p>;
}

export default Component;
