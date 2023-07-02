import { IBasePackageProps } from './basePackage.types';

import basePackageStyles from './basePackage.module.scss';

function BasePackage(props: IBasePackageProps) {
  return <p className={basePackageStyles.package}>{props.text}</p>;
}

export default BasePackage;
