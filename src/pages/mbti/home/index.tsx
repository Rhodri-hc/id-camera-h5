import { useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { stringify } from '@/utils/serialize';
import styles from './index.module.scss';
const MbtiHome = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const phead = search.get('phead');
  const exhead = search.get('exhead');
  useEffect(() => {
    if (phead && exhead) {
      localStorage.setItem(
        'app_header_params',
        stringify({
          Phead: phead,
          'Ex-Head': exhead,
        }),
      );
    }
  }, [phead, exhead]);

  const handleClick = useCallback(() => {
    navigate('/mbti/answer');
  }, [navigate]);
  return (
    <div className={styles.mbti_home}>
      <img
        src="https://sunny.tos-cn-guangzhou.volces.com/res/pic/mbti_hme_content.png"
        alt=""
        className={styles.mbti_home_content}
      />
      <div className={styles.mbti_home_btn} onClick={handleClick} />
    </div>
  );
};
export default MbtiHome;
