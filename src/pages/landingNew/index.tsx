import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import apis from '@/apis';
import styles from './index.module.scss';

const btnArea: Record<string, React.CSSProperties> = {
  cell: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: '75%',
    height: '54px',
    maxHeight: '60px',
    fontSize: '20px',
    fontFamily: 'PingFangSC-Regular',
    borderRadius: '10rem',
    background: 'linear-gradient(160deg, #FF9737 0%, #FE7122 100%)',
    color: 'white',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    letterSpacing: '3px',
  },
};
const paramsList = [
  'book_id',
  'PROMOTION_ID',
  'PROJECT_ID',
  'CLICKID',
  'adv_id',
  'platform',
  'QUICK_APP_ST_CHANNEL',
];
const LandingPage = () => {
  const [params] = useSearchParams();
  const { search } = useLocation();
  const [status, setStatus] = useState<boolean>(false);
  const mark_id = params.get('mark_id');
  const handleRead = useCallback(() => {
    try {
      const searchParam = mark_id ? `${search}&clickid=${encodeURIComponent(mark_id)}` : search;
      window.open(`hap://app/com.fyyd.rpk/pages/detail${searchParam}`);
    } catch (e) {}
  }, [search, mark_id]);
  const urlParams = useMemo(() => {
    const map = paramsList.reduce((prev: Record<string, any>, next) => {
      if (params.get(next)) {
        prev[next] = params.get(next);
      }
      return prev;
    }, {});
    return map;
  }, [params]);
  const init = async () => {
    try {
      const { pass } = await apis.sunny.getLandingStatus();
      setStatus(pass);
      // @ts-ignore
      channelReady(function (bAvailable) {
        if (bAvailable) {
          // @ts-ignore
          appRouter('com.kyy.tgxs');
        }
      });

      pass && handleRead();
    } catch (e) {}
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div onClick={handleRead} className={styles.content}>
      <div className={styles.landingPage}>
        <header>若点击无响应，请点击菜单选择在浏览器打开</header>
        <img
          src="https://sunny.tos-cn-guangzhou.volces.com/res/pic/logo.png"
          alt=""
          className={styles.landingPage_logo}
        />
        <div className={styles.landingPage_block} />
        <div className={styles.landingPage_typing}>百万小说免费看</div>
        <div className="mt-16">出现权限提示时请选择允许</div>
      </div>
      <div className={styles.landingPage_btn}>开始阅读</div>
      {/* <qa-router-button*/}
      {/*  data-package-name="com.fyyd.rpk"*/}
      {/*  data-page="/pages/detail"*/}
      {/*  data-params='{"id": 1}'*/}
      {/*  data-design-params='{"fontSize": 16,"designWidth": 1080}'*/}
      {/*  style={{ height: '2rem' }}*/}
      {/*  ref={aref}*/}
      {/* >*/}
      {/*  <templates is="x3d">*/}
      {/*    <button style={btnArea.button}>秒开</button>*/}
      {/*  </templates>*/}
      {/* </qa-router-button>*/}
    </div>
  );
};
export default LandingPage;
