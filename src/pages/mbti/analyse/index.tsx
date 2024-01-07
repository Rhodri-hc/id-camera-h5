import styles from './index.module.scss';
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from '../../../../public/loading--mbtity2.json';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sleep, strParse } from '@/utils';
import { MBTI_APP_KEY } from '@/constants/global';
import apis from '@/apis';
import { useAnswerStore } from '@/store';
const QuestionCenterOne = () => {
  const navigate = useNavigate();
  const { answers } = useAnswerStore((state) => state);
  const getResult = async () => {
    try {
      const { uid } = strParse(localStorage.getItem(MBTI_APP_KEY) || '{}');
      const { orderId } = await apis.mbtiApi.submitAnswers({
        tsDeviceId: `u${uid}`,
        choice: answers,
        productId: 1,
      });
      await sleep(4200);
      navigate(`/mbti/result/${orderId}`);
    } catch (e) {}
  };
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };
  useEffect(() => {
    getResult();
  }, []);
  const { View } = useLottie(options);
  return (
    <div className={styles.analyse}>
      <main>{View}</main>
      <footer className="mt-40 text-center">
        <div className={styles.analyse_title}>完成分析后，您将获得</div>
        <div className={styles.analyse_content}>
          <span>获得您的4字母类型测试结果</span>
          <span>发现最适合您性格类型的职业</span>
          <span>知悉您的偏好优势和类型描述</span>
          <span>评估您与恋人的长期相处情况</span>
          <span>了解您的沟通风格和学习风格</span>
          <span>查看与您分享同一性格的名人</span>
        </div>
        <div className={styles.analyse_page_footer}>
          所有内容基于卡尔·荣格( Carl Jung ) 和伊莎贝尔·布里格斯·迈尔斯 ( Isabel Briggs Myers
          )的MBTI理论实证
        </div>
      </footer>
    </div>
  );
};
export default QuestionCenterOne;
