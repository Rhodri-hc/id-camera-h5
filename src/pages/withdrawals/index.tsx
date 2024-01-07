import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import apis from '@/apis';
import { TCoinsWithDrawListData } from '@/apis/welfare';
import { objectToString } from '@/utils';
import styles from './index.module.scss';

const Withdrawals = () => {
  const [withDrawInfo, setWithDrawInfo] = useState<TCoinsWithDrawListData>({
    cash: 0,
    withdraw_list: [],
    coins: 0,
  });
  const init = useCallback(async () => {
    try {
      const res = await apis.welfare.getCoinsWithDrawList();
      setWithDrawInfo(res);
    } catch (e) {}
  }, []);
  useEffect(() => {
    init();
  }, []);
  const handleClick = useCallback(
    (item: { cash: string; code: number; coins: number }) => {
      if (window.system && item.coins - withDrawInfo.coins <= 0) {
        window.system.postMessage(objectToString({ ...item, selfCoins: withDrawInfo.coins }));
      }
    },
    [withDrawInfo],
  );
  return (
    <div className={styles.withdrawals}>
      <header className={styles.withdrawals_top}>
        <span>可提现金额</span>
        <strong className={styles.withdrawals_top_font50}>{withDrawInfo.cash}</strong>
      </header>
      <main className={styles.withdrawals_main}>
        <div className="text-20 font-bold mb-16">微信提现</div>
        <ul className={styles.withdrawals_main_list}>
          {withDrawInfo.withdraw_list.map((item, index) => {
            return (
              <li
                className={classNames(styles.withdrawals_main_list_item, {
                  [styles.withdrawals_main_list_active]: withDrawInfo.coins >= item.coins,
                })}
                key={index}
                onClick={() => handleClick(item)}
              >
                <span className="column">
                  {withDrawInfo.coins >= item.coins && (
                    <span className={styles.withdrawals_main_list_item_tag}>立即提现</span>
                  )}
                  <span className="text-20 color-6 font-bold">{item.cash}元</span>
                  <span className="text-12 color-6">
                    {withDrawInfo.coins < item.coins
                      ? `还差${item.coins - withDrawInfo.coins}金币`
                      : '快去提现吧~'}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};
export default Withdrawals;
