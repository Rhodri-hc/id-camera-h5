import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import apis from '@/apis';
import { TBookListData } from '@/apis/sunny';
import { Layout } from '@/components/base';
import Icon from '@/components/icons';
import { useLongPress } from '@/hooks';
import { objectToString } from '@/utils';
import styles from './list.module.scss';
const ani = () => {
  return {
    animation: `circle${Math.floor(Math.random() * 8) + 1} 2s  linear infinite`,
  };
};
const List = () => {
  const [bookList, setBookList] = useState<TBookListData[]>([]);
  const [isLongPress, setIsLongPress] = useState<boolean>(false);
  const onLongPress = () => {
    setIsLongPress(true);
  };
  const longPressEvent = useLongPress(onLongPress);

  const init = async (page?: number) => {
    try {
      const res = await apis.sunny.bookShelfList();
      setBookList(res.books || []);
    } catch (e) {}
  };
  useEffect(() => {
    init();
  }, []);
  const handleClick = useCallback(
    (item: TBookListData) => {
      if (window.system && !isLongPress) {
        const { book_id, source } = item;
        window.system.postMessage(objectToString({ book_id, source }));
      }
    },
    [isLongPress],
  );
  const handleCancel = useCallback(() => {
    if (isLongPress) {
      setIsLongPress(false);
    }
  }, [isLongPress]);
  const handleDeleteBook = async (book_id: string) => {
    try {
      await apis.sunny.bookShelfDelete({
        book_ids: [book_id],
      });
      await init();
    } catch (e) {}
  };
  return (
    <Layout className={styles.list}>
      <div
        className={classNames(styles.list_title, {
          'text-24': !isLongPress,
          'text-16': isLongPress,
        })}
        onClick={handleCancel}
      >
        {isLongPress ? '取消' : '阅读书架'}
      </div>
      {bookList.length > 0 ? (
        <ul className={styles.list_books}>
          {bookList.map((item, index) => {
            return (
              <li
                className={classNames(styles.list_books_item)}
                onClick={() => handleClick(item)}
                key={item.book_id}
                {...longPressEvent}
              >
                <div style={isLongPress ? ani() : {}}>
                  <span className={styles.list_books_item_tag}>
                    {item.chapter_no === 0 ? '未读' : '继续阅读'}
                  </span>

                  {isLongPress && (
                    <Icon
                      name="roundClose"
                      className={styles.list_books_item_close}
                      onClick={() => handleDeleteBook(item.book_id)}
                    />
                  )}
                  <img src={item.cover_url} alt="" className={styles.list_books_item_img} />
                </div>

                <div>
                  <div className="text-16 line-length-1">{item.title}</div>
                  <span className="text-12 color-6">
                    {item.chapter_no === 0 ? '未读' : `${item.chapter_no}章`}/186章
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles.list_empty}>
          <span className="mb-40 color-5 text-14">书架空空，去添加你喜欢的书籍吧~</span>
          <div className={styles.list_empty_img} />
        </div>
      )}
    </Layout>
  );
};
export default List;
