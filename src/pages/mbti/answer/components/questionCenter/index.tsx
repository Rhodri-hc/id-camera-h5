import styles from './index.module.scss';
import { ProgressCircle, ProgressBar, Space, Button } from 'antd-mobile';
import React from 'react';
import { AnswersKey } from '@/hooks/useQuestionConfig';
interface QuestionCenterProps {
  time: number;
  config: {
    cardImgSrc: string;
    figureImgSrc: string;
  };
  onContinue: () => void;
  onPrev: () => void;
}
const QuestionCenter: React.FC<QuestionCenterProps> = ({ time, config, onContinue, onPrev }) => {
  const { cardImgSrc, figureImgSrc } = config;
  return (
    <div className={styles.questionCenter}>
      <img src={figureImgSrc} alt="" className={styles.questionCenter_header} />
      <main className={styles.questionCenter_main}>
        <img
          src="https://a.manchengkj.com/mbti/images/answersV2/mbtity2/text.png"
          alt=""
          className={styles.questionCenter_main_top}
        />
        <img src={cardImgSrc} alt="" className={styles.questionCenter_main_center} />
        <Space direction="vertical" className={styles.btnGroup} align="center">
          <Button className={styles.continueBtn} onClick={onContinue}>
            继续答题 {time}s
          </Button>
          <Button className={styles.prevBtn} onClick={onPrev}>
            上一题
          </Button>
        </Space>
      </main>
    </div>
  );
};
export default QuestionCenter;
