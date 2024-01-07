import IconTitle from '@/pages/mbti/result/components/iconTitle';
import React, { CSSProperties } from 'react';
import styles from './index.module.scss';
import { TPersonalityConfig } from '@/pages/mbti/result/config';
import MBTI_PNG from '@/assets/mbti';

type TabFiveProps = {
  color: CSSProperties['color'];
  emotion?: string;
};
const TabFive: React.FC<TabFiveProps> = ({ color, emotion }) => {
  return (
    <div className={styles.tabFive}>
      <IconTitle title="情感分析" titleColor={color} />
      <img
        src={MBTI_PNG.img_illustration_emotion01}
        alt=""
        className="px-24 w-full border-box my-16"
      />
      <div dangerouslySetInnerHTML={{ __html: emotion! }} className={styles.tabFive_desc} />
    </div>
  );
};
export default TabFive;
