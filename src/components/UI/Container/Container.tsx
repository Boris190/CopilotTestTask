import { FC, PropsWithChildren, HTMLAttributes } from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';

type IContainer = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const Container: FC<IContainer> = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
