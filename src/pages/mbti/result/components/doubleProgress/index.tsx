import React, { CSSProperties } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
type DoubleProgressProps = {
  leftConfig: {
    title: string;
    sum?: number | string;
  };
  rightConfig?: {
    title: string;
    sum?: number | string;
  };
  color: CSSProperties['color'];
};
const DoubleProgress: React.FC<DoubleProgressProps> = ({
  color,
  leftConfig = {},
  rightConfig = {},
}) => {
  return (
    <div className={styles.double_progress}>
      <div className={styles.double_progress_line}>
        <div className="flex-one text-right">
          <span
            className={classNames(styles.double_progress_line_left, {
              ['pl-10']: leftConfig.sum && leftConfig.sum < 10,
              ['pr-4']: rightConfig.sum && rightConfig.sum < 15,
            })}
            style={{ background: color, width: `${leftConfig.sum}%` }}
          >
            <span className="pl-10">{leftConfig.sum || ''}</span>
          </span>
        </div>
        <div className={styles.double_progress_line_driver} />
        <div className="flex-one">
          <span
            className={classNames(styles.double_progress_line_right, {
              ['pr-10']: rightConfig.sum && rightConfig.sum < 10,
              ['pl-4']: rightConfig.sum && rightConfig.sum < 15,
            })}
            style={{ background: color, width: `${rightConfig.sum}%` }}
          >
            <span className="pr-10">{rightConfig.sum || ''}</span>
          </span>
        </div>
      </div>
      <div className={styles.double_progress_text}>
        <span className="flex-one">{leftConfig.title}</span>
        <span>0</span>
        <span className="flex-one text-right">{rightConfig.title}</span>
      </div>
    </div>
  );
};
export default DoubleProgress;
