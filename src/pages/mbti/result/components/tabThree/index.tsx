import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import IconTitle from '@/pages/mbti/result/components/iconTitle';
import { TPersonalityConfig } from '@/pages/mbti/result/config';
import styles from './index.module.scss';
type TabThreeProps = {
  color: CSSProperties['color'];
  characters?: TPersonalityConfig['characters'];
  similar: string;
};
const TabThree: React.FC<TabThreeProps> = ({ color, similar, characters = {} }) => {
  const { name, image, description } = characters;
  return (
    <div className={styles.tabThree}>
      <IconTitle title="代表人物" titleColor={color} />
      <div className={classNames('gap-16 flex-justify-start mt-16')}>
        <img src={image} alt="" className={styles.tabThree_image} />
        <div>
          <b className="font-14">{name}</b>
          <article className={styles.tabThree_desc}>{description}</article>
        </div>
      </div>
      <div className="font-14 my-6 font-bold">其他代表人物</div>
      <div className={styles.tabThree_desc} dangerouslySetInnerHTML={{ __html: similar }} />
    </div>
  );
};
export default TabThree;
