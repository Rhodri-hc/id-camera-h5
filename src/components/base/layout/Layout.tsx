import classNames from 'classnames';
import React, { forwardRef } from 'react';
import styles from './index.module.scss';
interface ILayoutProps {
  className: string;
  children: React.ReactNode;
}
const Layout = forwardRef<HTMLDivElement, ILayoutProps>(
  ({ className, children, ...other }, ref) => {
    return (
      <div ref={ref} className={classNames(styles.page, className)} {...other}>
        {children}
      </div>
    );
  },
);

export default Layout;
