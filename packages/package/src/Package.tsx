import { IPackageProps } from './package.types';

import packageStyles from './package.module.scss';

function Package(props: IPackageProps) {
  return <p className={packageStyles.package}>{props.text}</p>;
}

export default Package;
