import IconTitle from '@/pages/mbti/result/components/iconTitle';
import React, { CSSProperties } from 'react';
import styles from './index.module.scss';
import { TPersonalityConfig } from '@/pages/mbti/result/config';
type TabFourProps = {
  color: CSSProperties['color'];
  analyse: TPersonalityConfig['analyse'];
  merit?: string;
  weakness?: string;
};
const TabFour: React.FC<TabFourProps> = ({ color, analyse, weakness, merit }) => {
  const { advantage, disadvantage } = analyse;
  return (
    <div className={styles.tabFour}>
      <IconTitle title="优点" titleColor={color} />
      <img src={advantage} alt="" className="px-24 w-full border-box my-16" />
      <div dangerouslySetInnerHTML={{ __html: merit as string }} className={styles.tabFour_desc} />
      <IconTitle title="弱点" titleColor={color} className="mt-24" />
      <img src={disadvantage} alt="" className="px-24 w-full border-box my-16" />
      <div
        dangerouslySetInnerHTML={{ __html: weakness as string }}
        className={styles.tabFour_desc}
      />
    </div>
  );
};
export default TabFour;
