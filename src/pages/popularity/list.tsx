import styles from './list.module.scss';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { TBookListBackData, TBookListData } from '@/apis/sunny';
import { objectToString } from '@/utils';
import apis from '@/apis';
const List = () => {
  const [bookList, setBookList] = useState<TBookListBackData>({
    books: [],
    page: 1,
    size: 20,
  });
  const loader = useRef<HTMLDivElement>(null);
  const init = async (page?: number) => {
    try {
      const res = await apis.sunny.bookList({
        page: page || bookList.page,
        size: bookList.size,
        keyword: 'HOT',
      });
      // const res = (await setData()) as any;

      setBookList((prevState) => {
        if (page) {
          const { books, page } = res;
          prevState.page = page;
          prevState.books = [...prevState.books, ...books];
          return { ...prevState };
        } else {
          return res;
        }
      });
    } catch (e) {}
  };
  useEffect(() => {
    init();
  }, []);
  useLayoutEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [bookList]);

  const handleObserver = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const target = entities[0];
      if (target.isIntersecting && bookList.books.length > 0) {
        init(bookList.page + 1);
      }
    },
    [bookList],
  );
  const handleClick = useCallback((item: TBookListData) => {
    if (window.system) {
      const { book_id, source } = item;
      window.system.postMessage(objectToString({ book_id, source }));
    }
  }, []);

  return (
    <div className={styles.home_list}>
      <p className={styles.home_list_title}>
        <b>人气榜单</b>
        <span className={styles.home_list_title_more}>完整榜单 {'>'} </span>
      </p>
      <ul className={styles.home_list_books}>
        {bookList.books.map((item, index) => {
          return (
            <li
              className={styles.home_list_books_item}
              onClick={() => handleClick(item)}
              key={item.book_id}
            >
              <img src={item.cover_url} alt="" className={styles.home_list_books_item_img} />
              <div>
                <div className="text-16 line-length-1">{item.title}</div>
                <div className="color-5 text-12">
                  读完全本送 <span className="color-primary">￥{index + 1}</span>
                </div>
              </div>
            </li>
          );
        })}
        {bookList.total === bookList.books.length ? (
          <li>
            <div className={styles.home_list_books_add}>添加桌面，天天看书</div>
            <div className="text-12 color-6 text-center mb-24">到底啦，上划看看喜欢的书吧~</div>
          </li>
        ) : (
          <div className="text-12 color-6 text-center my-16" ref={loader}>
            loading...
          </div>
        )}
      </ul>
    </div>
  );
};
export default List;
