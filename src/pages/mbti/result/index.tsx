import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperRef, Tabs } from 'antd-mobile';
import classNames from 'classnames';
import { useLottie } from 'lottie-react';
import apis from '@/apis';
import TabFive from '@/pages/mbti/result/components/tabFive';
import TabFour from '@/pages/mbti/result/components/tabFour';
import TabOne from '@/pages/mbti/result/components/tabOne';
import TabSix from '@/pages/mbti/result/components/tabSix';
import TabThree from '@/pages/mbti/result/components/tabThree';
import TabTow from '@/pages/mbti/result/components/tabTow';
import personalityConfig, {
  TPersonality,
  type TPersonalityConfig,
} from '@/pages/mbti/result/config';
import styles from './index.module.scss';
const tabItems = [
  { key: '1', title: '基础信息' },
  { key: '2', title: '性格特征' },
  { key: '3', title: '代表人物' },
  { key: '4', title: '优缺分析' },
  { key: '5', title: '情感分析' },
  { key: '6', title: '职业工作' },
];
const Result = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [activeKey, setActiveKey] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);
  const warpRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<Partial<MbtiApi.ResultResponse>>({});
  const swiperRef = useRef<SwiperRef>(null);
  const {
    name,
    color,
    json,
    characters,
    analyse,
    title,
    enName,
    alias,
    proportion,
    type,
    dimensionScore,
    disposition,
    personality,
    similar,
    merit,
    weakness,
    emotion,
    career,
    work,
  } = useMemo(() => {
    const data = Object.keys(result).length
      ? { ...result, ...personalityConfig[result.type as TPersonality] }
      : result;
    return data as Partial<MbtiApi.ResultResponse> & Partial<TPersonalityConfig>;
  }, [result]);
  const init = async () => {
    try {
      const res = await apis.mbtiApi.getResultData(orderId as string);
      setResult(res);
    } catch (e) {}
  };
  const commodityDialog = () => {
    window.jsBridge.sendCommand('commodityDialog', {}, () => {});
  };
  const { View } = useLottie({
    animationData: json,
    loop: true,
  });
  useEffect(() => {
    commodityDialog();
    init();
  }, [orderId]);
  const changeTop = () => {
    const top = document.documentElement.scrollTop;
    const height = divRef.current?.clientHeight || 0;
    if (top > height) {
      window.scrollTo({
        top: height,
      });
    }
  };
  const handleChange = (key: string) => {
    const index = tabItems.findIndex((item) => item.key === key);
    setActiveKey(index);
    swiperRef.current?.swipeTo(index);
    changeTop();
  };
  const onIndexChange = (index: number) => {
    setActiveKey(index);
    changeTop();
  };
  return (
    <div className={styles.result} ref={warpRef}>
      <div
        ref={divRef}
        className={classNames({
          [styles.person_first]: type && ['ENFJ', 'ENFP', 'INFJ', 'INFP'].includes(type),
          [styles.person_second]: type && ['ENTJ', 'ENTP', 'INTJ', 'INTP'].includes(type),
          [styles.person_third]: type && ['ESFJ', 'ESTJ', 'ISFJ', 'ISTJ'].includes(type),
          [styles.person_fourth]: type && ['ESFP', 'ESTP', 'ISFP', 'ISTP'].includes(type),
        })}
      >
        <header className={styles.result_header}>您的人格类型是</header>
        <nav className="py-16 column flex-center">
          <h1 className={styles.person_name}>{title}</h1>
          <b className="mb-10 font-24">{type}</b>
          <div className={styles.result_header_bgText}>{type}</div>
          <div className={styles.result_header_icon}>{json && View}</div>
        </nav>
      </div>
      {Object.keys(result).length > 0 ? (
        <main className={classNames(styles.result_main)}>
          <Tabs
            activeLineMode="fixed"
            className={classNames(styles.result_fixed, {
              [styles.result_main_tabs_first]:
                type && ['ENFJ', 'ENFP', 'INFJ', 'INFP'].includes(type),
              [styles.result_main_tabs_second]:
                type && ['ENTJ', 'ENTP', 'INTJ', 'INTP'].includes(type),
              [styles.result_main_tabs_third]:
                type && ['ESFJ', 'ESTJ', 'ISFJ', 'ISTJ'].includes(type),
              [styles.result_main_tabs_fourth]:
                type && ['ESFP', 'ESTP', 'ISFP', 'ISTP'].includes(type),
            })}
            onChange={handleChange}
            style={{
              '--fixed-active-line-width': '20px',
            }}
            activeKey={tabItems[activeKey].key}
          >
            {tabItems.map((item) => (
              <Tabs.Tab title={item.title} key={item.key} />
            ))}
          </Tabs>
          <Swiper
            direction="horizontal"
            indicator={() => null}
            ref={swiperRef}
            defaultIndex={activeKey}
            onIndexChange={onIndexChange}
          >
            <Swiper.Item
              className={classNames(styles.result_swiper, {
                [styles.result_height]: activeKey !== 0,
              })}
            >
              <TabOne
                color={color}
                baseData={{ name, enName, alias, proportion, dimensionScore }}
              />
            </Swiper.Item>
            <Swiper.Item
              className={classNames(styles.result_swiper, {
                [styles.result_height]: activeKey !== 1,
              })}
            >
              <TabTow color={color} disposition={disposition} personality={personality} />
            </Swiper.Item>
            <Swiper.Item
              className={classNames(styles.result_swiper, {
                [styles.result_height]: activeKey !== 2,
              })}
            >
              <TabThree color={color} similar={similar as string} characters={characters} />
            </Swiper.Item>
            <Swiper.Item
              className={classNames(styles.result_swiper, {
                [styles.result_height]: activeKey !== 3,
              })}
            >
              <TabFour color={color} analyse={analyse!} merit={merit} weakness={weakness} />
            </Swiper.Item>
            <Swiper.Item
              className={classNames(styles.result_swiper, {
                [styles.result_height]: activeKey !== 4,
              })}
            >
              <TabFive color={color} emotion={emotion} />
            </Swiper.Item>
            <Swiper.Item
              className={classNames(styles.result_swiper, {
                [styles.result_height]: activeKey !== 5,
              })}
            >
              <TabSix color={color} career={career} work={work} />
            </Swiper.Item>
          </Swiper>
        </main>
      ) : null}
    </div>
  );
};
export default Result;
