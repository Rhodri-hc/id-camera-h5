import IconTitle from '@/pages/mbti/result/components/iconTitle';
import styles from './index.module.scss';
import DoubleProgress from '@/pages/mbti/result/components/doubleProgress';
import { OSS_URL_IMG } from '@/constants/global';
import CardTopIcon from '@/pages/mbti/result/components/cardTopIcon';
import classNames from 'classnames';
import React, { CSSProperties, useCallback } from 'react';
import MBTI_PNG from '@/assets/mbti';

type TabOneProps = {
  color: CSSProperties['color'];
  baseData: Partial<{
    alias: string;
    name: string;
    proportion: string;
    enName: string;
    dimensionScore: Record<string, string>;
  }>;
};
const TabOne: React.FC<TabOneProps> = ({ color, baseData = {} }) => {
  const getValue = useCallback((left: string | number, right: string | number, unit = '%') => {
    const leftString = typeof left === 'string';
    const rightString = typeof right === 'string';
    if (leftString && rightString) {
      const leftCount = Number(left.split(unit)[0]);
      const rightCount = Number(right.split(unit)[0]);
      return {
        max: Math.max(leftCount, rightCount),
        min: Math.min(leftCount, rightCount),
        direction: leftCount > rightCount ? 'left' : 'right',
      };
    }
    return {
      max: Math.max(left as number, right as number),
      min: Math.min(left as number, right as number),
      direction: left > right ? 'left' : 'right',
    };
  }, []);
  return (
    <div className={styles.tabOne}>
      <div className="mb-24">
        <IconTitle title="基础信息" titleColor={color} />
        <ul className="mt-16 mx-22">
          <li className={styles.tabOne_base}>
            <span className={styles.tabOne_base_color}>中文名称</span>
            <span>{baseData.name}</span>
          </li>
          <li className={styles.tabOne_base}>
            <span className={styles.tabOne_base_color}>其他别名</span>
            <span>{baseData.alias}</span>
          </li>
          <li className={styles.tabOne_base}>
            <span className={styles.tabOne_base_color}>外文名称</span>
            <span>{baseData.enName}</span>
          </li>
          <li className={styles.tabOne_base}>
            <span className={styles.tabOne_base_color}>人口比例</span>
            <span>{baseData.proportion}</span>
          </li>
        </ul>
      </div>
      <IconTitle title="维度得分" titleColor={color} />
      <div className="flex column gap-16 mt-16 mb-24">
        {[
          {
            left: { title: 'Extraversion（外向）', sum: baseData.dimensionScore?.e },
            right: { title: 'Introversion（内向)', sum: baseData.dimensionScore?.i },
          },
          {
            left: { title: 'Sensing（感知）', sum: baseData.dimensionScore?.s },
            right: { title: 'Intuition（直觉)', sum: baseData.dimensionScore?.n },
          },
          {
            left: { title: 'Thinking（思考）', sum: baseData.dimensionScore?.t },
            right: { title: 'Feeling（情感)', sum: baseData.dimensionScore?.f },
          },
          {
            left: { title: 'Judging（判断）', sum: baseData.dimensionScore?.j },
            right: { title: 'Perceiving（感知)', sum: baseData.dimensionScore?.p },
          },
        ].map((item, index) => {
          return (
            <DoubleProgress
              leftConfig={item.left}
              rightConfig={item.right}
              color={color}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex column gap-48">
        {[
          {
            name: '精力',
            color: 'rgb(54, 169, 255)',
            typeDesc: `${getValue(baseData.dimensionScore?.e!, baseData.dimensionScore?.i!).max}%${
              getValue(baseData.dimensionScore?.e!, baseData.dimensionScore?.i!).direction ===
              'left'
                ? '外向型'
                : '内向型'
            }`,
            left: baseData.dimensionScore?.e,
            right: baseData.dimensionScore?.i,
            leftDesc: `外向型 ${baseData.dimensionScore?.e}%`,
            rightDesc: `${baseData.dimensionScore?.i}% 内向型`,
            url: `${OSS_URL_IMG}img_illustration_energy.png`,
            desc: '外向型个体会很享受团体活动并重视社交互动。他们往往外表热情并会表达他们的兴奋。',
            headerImg: MBTI_PNG.img_title_bg_blue,
          },
          {
            name: '精神',
            color: 'rgb(255, 153, 51)',
            typeDesc: `${getValue(baseData.dimensionScore?.s!, baseData.dimensionScore?.n!).max}%${
              getValue(baseData.dimensionScore?.s!, baseData.dimensionScore?.n!).direction ===
              'left'
                ? '直觉型'
                : '现实型'
            }`,
            left: baseData.dimensionScore?.s,
            right: baseData.dimensionScore?.n,
            leftDesc: `直觉型 ${baseData.dimensionScore?.s}%`,
            rightDesc: `${baseData.dimensionScore?.n}% 现实型`,
            url: `${OSS_URL_IMG}img_illustration_spirit.png`,
            desc: '现实型个体务实而脚踏实地。他们倾向于强烈关注正在发生或者非常可能发生的事情。',
            headerImg: MBTI_PNG.img_title_bg_orange,
          },
          {
            name: '本性',
            color: 'rgb(35, 164, 109)',
            typeDesc: `${getValue(baseData.dimensionScore?.t!, baseData.dimensionScore?.f!).max}%${
              getValue(baseData.dimensionScore?.t!, baseData.dimensionScore?.f!).direction ===
              'left'
                ? '逻辑型'
                : '感受型'
            }`,
            left: baseData.dimensionScore?.t,
            right: baseData.dimensionScore?.f,
            leftDesc: `逻辑型 ${baseData.dimensionScore?.t}%`,
            rightDesc: `${baseData.dimensionScore?.f}% 感受型`,
            url: `${OSS_URL_IMG}img_illustration_nature.png`,
            desc: '感受型个重视情感表达和敏感性、他们非常重视同理心、社会和谐及合作。',
            headerImg: MBTI_PNG.img_title_bg_green,
          },
          {
            name: '对策',
            color: 'rgb(102, 51, 153)',
            typeDesc: `${getValue(baseData.dimensionScore?.j!, baseData.dimensionScore?.p!).max}%${
              getValue(baseData.dimensionScore?.j!, baseData.dimensionScore?.p!).direction ===
              'left'
                ? '计划型'
                : '展望型'
            }`,
            left: baseData.dimensionScore?.j,
            right: baseData.dimensionScore?.p,
            leftDesc: `计划型 ${baseData.dimensionScore?.j}%`,
            rightDesc: `${baseData.dimensionScore?.p}% 展望型`,
            url: `${OSS_URL_IMG}img_illustration_countermeasure.png`,
            desc: '计划型的个体果断、决绝并有高度组织性。他们重视清晰度、可预测性和闭环，更喜欢结构层级和计划而不是自发。',
            headerImg: MBTI_PNG.img_title_bg_purple,
          },
        ].map((item, index) => {
          return (
            <div className={styles.tabOne_card} key={index}>
              <img src={item.headerImg} alt="" className="w-full" />
              <span className={styles.tabOne_card_title}>{item.name}</span>
              <div className="px-16 pt-24 pb-16 text-center ">
                <strong className="font-24 mb-12">{item.typeDesc}</strong>
                <div
                  className={classNames(styles.tabOne_card_progress, {
                    ['flex-justify-start']: getValue(item.left!, item.right!).direction === 'left',
                    ['flex-justify-end']: getValue(item.left!, item.right!).direction === 'right',
                  })}
                >
                  <div
                    className="border-radius-12"
                    style={{
                      height: '100%',
                      background: item.color,
                      width: `${getValue(item.left!, item.right!).max}%`,
                    }}
                  />
                </div>
                <div className={styles.tabOne_card_typeDesc}>
                  <span
                    style={{
                      color:
                        getValue(item.left!, item.right!).direction === 'left'
                          ? item.color
                          : '#131415',
                    }}
                  >
                    {item.leftDesc}
                  </span>
                  <span
                    style={{
                      color:
                        getValue(item.left!, item.right!).direction === 'right'
                          ? item.color
                          : '#131415',
                    }}
                  >
                    {item.rightDesc}
                  </span>
                </div>
                <div className="gap-12 flex-align-center mt-12">
                  <img src={item.url} alt="" className={styles.tabOne_card_img} />
                  <div className={styles.tabOne_card_conclusion}>{item.desc}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TabOne;
