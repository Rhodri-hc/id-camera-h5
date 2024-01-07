import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

const IconTitle: React.FC<{
  title: React.ReactNode;
  titleColor?: CSSProperties['color'];
  className?: string;
}> = ({ title, className, titleColor }) => {
  return (
    <div className={classNames(styles.icon_title, className)}>
      <span className={styles.icon_title_first} style={{ background: titleColor }} />
      <span className={styles.icon_title_second} style={{ background: titleColor }} />
      <div style={{ color: titleColor }}>{title}</div>
    </div>
  );
};
export default IconTitle;
