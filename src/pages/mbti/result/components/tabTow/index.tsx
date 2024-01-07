import React, { CSSProperties } from 'react';
import IconTitle from '@/pages/mbti/result/components/iconTitle';
import natureOne from '@/assets/mbti/img_illustration_character01.png';
import natureTow from '@/assets/mbti/img_illustration_character02.png';
import styles from './index.module.scss';
import classNames from 'classnames';
type TabTowProps = {
  color: CSSProperties['color'];
  disposition?: string;
  personality?: string;
};
const TabTow: React.FC<TabTowProps> = ({ color, disposition, personality }) => {
  return (
    <div className={styles.tabTow}>
      <IconTitle title="性格简介" titleColor={color} />
      <img src={natureOne} alt="" className="px-24 w-full border-box my-16" />
      <div
        className={classNames('flex column font-14 px-24 mb-48', styles.tabTow_desc)}
        dangerouslySetInnerHTML={{ __html: disposition! }}
      />
      <IconTitle title="人格特征" titleColor={color} />
      <img src={natureTow} alt="" className="px-24 w-full border-box my-16" />
      <div
        className={classNames('flex column font-14 px-24 mb-48', styles.tabTow_desc)}
        dangerouslySetInnerHTML={{ __html: personality! }}
      />
    </div>
  );
};
export default TabTow;
