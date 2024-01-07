import IconTitle from '@/pages/mbti/result/components/iconTitle';
import React, { CSSProperties } from 'react';
import styles from './index.module.scss';
import { TPersonalityConfig } from '@/pages/mbti/result/config';
import MBTI_PNG from '@/assets/mbti';
import classNames from 'classnames';

type TabSixProps = {
  color: CSSProperties['color'];
  career?: string;
  work?: string;
};
const TabSix: React.FC<TabSixProps> = ({ color, work, career }) => {
  return (
    <div className={styles.tabSix}>
      <IconTitle title="职业规划" titleColor={color} />
      <img
        src={MBTI_PNG.img_illustration_work_habits01}
        alt=""
        className="px-24 w-full border-box my-16"
      />
      <div
        dangerouslySetInnerHTML={{ __html: work! }}
        className={classNames(styles.tabSix_desc, 'mb-48')}
      />

      <IconTitle title="偏好职业" titleColor={color} className="mb-12" />
      <div dangerouslySetInnerHTML={{ __html: career! }} className={styles.tabSix_desc} />
    </div>
  );
};
export default TabSix;
