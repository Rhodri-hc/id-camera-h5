import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Steps, Toast } from 'antd-mobile';
import { AnswersKey, answersSection } from '@/hooks/useQuestionConfig';
import Question from '@/pages/mbti/answer/components/question';
import styles from './index.module.scss';

const { Step } = Steps;

const Answer = () => {
  const [type, setType] = useState<AnswersKey | string>();
  const navigate = useNavigate();
  const current = useMemo(() => {
    return Object.keys(answersSection).findIndex((item) => item === type);
  }, [type]);

  const handleChange = (target: AnswersKey, flag: boolean, answers: string[]) => {
    if (flag) {
      setType('success');
      Toast.show({
        icon: 'success',
        content: '全部已经回答完成，准备分析人格',
      });
      setTimeout(() => {
        navigate('/mbti/analyse');
      }, 1500);
    } else {
      setType(target);
    }
  };
  return (
    <div className={styles.answer}>
      <header className={styles.answer_header}>MBTI测试</header>
      {current > 0 || type === 'success' ? (
        <Steps current={current} className={styles.steps}>
          {Object.keys(answersSection).map((item, index) => {
            return (
              <Step
                title={answersSection[item as AnswersKey].title}
                key={item}
                className={type === item || type === 'success' ? styles.unSuccess : styles.success}
                icon={
                  (type !== item && current >= index) || type === 'success' ? (
                    <img
                      src="https://a.manchengkj.com/mbti/images/answersV2/mbtity2/ic_tick.png"
                      alt=""
                      className={styles.success_icon}
                    />
                  ) : type === item ? (
                    <span className={styles.success_warp}>
                      <span />
                    </span>
                  ) : (
                    <span className={styles.success_round} />
                  )
                }
              />
            );
          })}
        </Steps>
      ) : null}

      <Question onChange={handleChange} />
      <footer className={styles.answer_footer}>
        所有内容基于卡尔·荣格( Carl Jung ) 和伊莎贝尔·布里格斯·迈尔斯 ( Isabel Briggs Myers
        )的MBTI理论实证
      </footer>
    </div>
  );
};
export default Answer;
