import styles from './index.module.scss';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import apis from '@/apis';
import { TCoinsRecordData } from '@/apis/welfare';
import { timestampToTime } from '@/utils';

const Desc: Record<string, string> = {
  reading: '完成阅读任务',
  sign_in: '完成签到任务',
  desktop_add: '完成添加桌面任务',
  watch_video: '完成看视频任务',
  withdraw: '提现',
};
const GoldRecord = () => {
  const [historyList, setHistoryList] = useState<TCoinsRecordData>({
    list: [],
    page: 1,
    total_coins: 0,
  });
  const loader = useRef<HTMLDivElement>(null);
  const init = useCallback(async (page = 1) => {
    try {
      const res = await apis.welfare.getCoinsRecord({
        page,
      });
      const { list, ...rest } = res;
      setHistoryList({ ...rest, list: list || [] });
    } catch (e) {}
  }, []);
  useEffect(() => {
    init();
  }, []);
  useLayoutEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observerLoader = new IntersectionObserver(handleObserverLoadMore, options);
    loader.current && observerLoader.observe(loader.current);
    return () => {
      observerLoader.disconnect();
    };
  }, [historyList]);

  const handleObserverLoadMore = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const loader = entities[0];
      if (loader.isIntersecting && historyList.list.length > 0) {
        init(historyList.page + 1);
      }
    },
    [historyList],
  );
  return (
    <div className={styles.goldRecord}>
      <div className={styles.stickyArea}>
        <header className={styles.goldRecord_card}>
          <div className={styles.goldRecord_card_icon}>剩余金币</div>
          <strong className={styles.goldRecord_card_count}>{historyList.total_coins}</strong>
        </header>
        <h4 className={styles.goldRecord_title}>金币明细</h4>
      </div>

      <ul className="px-4">
        {historyList.list.map((item) => {
          return (
            <li className={styles.goldRecord_item} key={item.id}>
              <div className="column">
                <span>{Desc[item.source]}</span>
                <span className="mt-4 color-6 text-12">{timestampToTime(item.ctime)}</span>
              </div>
              {item.source !== 'withdraw' ? (
                <span className="color-primary">+{item.coins}</span>
              ) : (
                <span className="color-3">{item.coins}</span>
              )}
            </li>
          );
        })}
      </ul>
      {historyList.list.length > 0 ? (
        <>
          {historyList.total === historyList.list.length ? (
            <div className="text-12 color-6 text-center mt-24 pb-32">已经到底啦~</div>
          ) : (
            <div className="text-12 color-6 text-center my-16" ref={loader}>
              loading...
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};
export default GoldRecord;
