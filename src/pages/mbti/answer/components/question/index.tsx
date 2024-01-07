import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useCountDown } from 'ahooks';
import { ProgressCircle, ProgressBar, Space, Button, Swiper, SwiperRef } from 'antd-mobile';
import classNames from 'classnames';
import { useQuestionConfig } from '@/hooks';
import { AnswersKey } from '@/hooks/useQuestionConfig';
import QuestionCenter from '@/pages/mbti/answer/components/questionCenter';
import { useAnswerStore } from '@/store';
import styles from './index.module.scss';
type TUnit = 'A' | 'B' | string;
const Question: React.FC<{
  onChange: (val: AnswersKey, flag: boolean, answers: string[]) => void;
}> = ({ onChange }) => {
  const { getConfig, getLists } = useQuestionConfig();
  const list = getLists();
  const [orderType, setOrderType] = useState<AnswersKey>('nature');
  const { length, from, next, prev, cardImgSrc, figureImgSrc } = useMemo(() => {
    return getConfig(orderType);
  }, [orderType]);
  const ref = useRef<SwiperRef>(null);
  const { answers, increasePopulation } = useAnswerStore((state) => state);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [times, setTimes] = useState<number>(3);
  const [c, formattedRes] = useCountDown({
    leftTime: 45 * 60 * 1000,
  });
  const { seconds, minutes } = formattedRes;
  const handleClick = (unit: string, index: number) => {
    ref.current?.swipeNext();
    const answerList = [...answers];
    answerList[index - 1] = unit;
    increasePopulation(answerList);
    if (answers.length === list.length) {
      return;
    }
    if (index === from + length) {
      setTimes(3);
      setShowResult(true);
    }
  };
  const handlePrev = (index?: number) => {
    if (index === from) {
      prev && setOrderType(prev);
      setShowResult(true);
    }
    ref.current?.swipePrev();
  };
  const handleToPrevPage = () => {
    setShowResult(false);
    setTimes(3);
    handlePrev();
  };
  const handleContinue = () => {
    setShowResult(false);
    next && setOrderType(next);
    setTimes(0);
    ref.current?.swipeTo(length + from);
  };

  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => {
        if (times <= 0) {
          clearInterval(timer);
          handleContinue();
          setTimes(3);
        } else {
          setTimes(times - 1);
        }
      }, 1000);
    }
  }, [showResult, times]);
  useEffect(() => {
    if (answers.length > 0) {
      onChange(orderType, answers.length === list.length, answers);
    }
  }, [orderType, answers, list]);
  return (
    <>
      {showResult && (
        <QuestionCenter
          time={times}
          config={{ cardImgSrc, figureImgSrc }}
          onPrev={handleToPrevPage}
          onContinue={handleContinue}
        />
      )}

      <div
        className={classNames(styles.question, {
          [styles.hide]: showResult,
        })}
      >
        <div className={styles.question_fixedArea}>
          <header className={styles.question_header}>
            <ProgressCircle
              percent={c / (45 * 60 * 10)}
              className={styles.question_header_progress}
            >
              <div className="flex-align-center column pt-4">
                <span className={styles.question_header_desc}>剩余时间</span>
                <span>
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </span>
              </div>
            </ProgressCircle>
          </header>
          <div className="text-center">
            <span className="text-24">
              {answers.length < length + from ? answers.length - from + 1 : length}
            </span>
            <span>/{length}</span>
          </div>
          <ProgressBar
            percent={
              ((answers.length < length + from ? answers.length - from : length) / length) * 100
            }
            className={styles.question_fixedArea_progress}
          />
        </div>

        <main className={styles.question_main}>
          <Swiper allowTouchMove={false} ref={ref} indicator={() => null}>
            {list.map((item, index) => {
              return (
                <Swiper.Item key={item.id}>
                  <nav className={styles.question_main_text}>{item.question}</nav>
                  <Space direction="vertical" className={styles.btnGroup} align="center">
                    {[
                      {
                        title: item.answer1,
                        unit: item.type1,
                      },
                      {
                        title: item.answer2,
                        unit: item.type2,
                      },
                    ].map(({ title, unit }) => (
                      <Button
                        className={`${
                          answers[item.id - 1] === unit ? styles.activeBtn : styles.defaultBtn
                        }`}
                        key={unit}
                        onClick={() => handleClick(unit, item.id)}
                      >
                        <div className={styles.btnContent}>
                          <span>{unit}.</span>
                          <span>{title}</span>
                        </div>
                      </Button>
                    ))}

                    {(index > 0 || orderType !== 'nature') && (
                      <Button className={styles.prevBtn} onClick={() => handlePrev(index)}>
                        上一题
                      </Button>
                    )}
                  </Space>
                </Swiper.Item>
              );
            })}
          </Swiper>
        </main>
      </div>
    </>
  );
};
export default Question;
