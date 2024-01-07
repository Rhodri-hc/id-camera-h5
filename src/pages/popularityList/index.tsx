import styles from './index.module.scss';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { TBookListBackData, TBookListData } from '@/apis/sunny';
import apis from '@/apis';
import { objectToString } from '@/utils';
import hot1 from '@/assets/svg/hot_1.svg';
import hot2 from '@/assets/svg/hot_2.svg';
import hot3 from '@/assets/svg/hot_3.svg';
import classNames from 'classnames';

const PopularityList = () => {
  const [bookList, setBookList] = useState<TBookListBackData>({
    books: [],
    page: 1,
    size: 20,
  });
  const [fixedTitle, setFixedTitle] = useState<boolean>(false);
  const loader = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const init = async (page?: number) => {
    try {
      const res = await apis.sunny.bookList({
        page: page || bookList.page,
        size: bookList.size,
        keyword: 'HOT',
      });
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
    const observerLoader = new IntersectionObserver(handleObserverLoadMore, options);
    const observerTop = new IntersectionObserver(handleObserver);
    loader.current && observerLoader.observe(loader.current);
    topRef.current && observerTop.observe(topRef.current);
    return () => {
      observerLoader.disconnect();
      observerTop.disconnect();
    };
  }, [bookList]);

  const handleObserverLoadMore = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const loader = entities[0];
      if (loader.isIntersecting && bookList.books.length > 0) {
        init(bookList.page + 1);
      }
    },
    [bookList],
  );
  const handleObserver = useCallback((entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    setFixedTitle(!target.isIntersecting);
  }, []);
  const handleClick = useCallback((item: TBookListData) => {
    if (window.system) {
      const { book_id, source } = item;
      window.system.postMessage(objectToString({ book_id, source }));
    }
  }, []);
  return (
    <div className={styles.popularityList}>
      <div className={styles.popularityList_banner} ref={topRef}>
        <div
          className={classNames(styles.popularityList_title, {
            [styles.popularityList_title_fixed]: fixedTitle,
          })}
        >
          人气榜单
        </div>
      </div>

      <ul className={styles.popularityList_books}>
        {bookList.books.map((item, index) => {
          return (
            <li
              className={styles.popularityList_books_item}
              onClick={() => handleClick(item)}
              key={item.book_id}
            >
              <img src={item.cover_url} alt="" className={styles.popularityList_books_item_img} />
              <div className={styles.popularityList_books_item_count}>
                {index === 0 && <img src={hot1} alt="" />}
                {index === 1 && <img src={hot2} alt="" />}
                {index === 2 && <img src={hot3} alt="" />}
                <span
                  className={classNames([
                    index < 3
                      ? styles.popularityList_books_item_num
                      : styles.popularityList_books_item_other,
                  ])}
                >
                  {index + 1}
                </span>
              </div>
              <div>
                <span className="font-bold">{item.title}</span>
                <nav className="line-length-2 mt-4 mb-8 color-6 text-14">{item.description}</nav>
                <div className="color-5 text-12 flex-justify-between">
                  <span>
                    读完全本送 <span className="color-primary">￥{item.welfare_cash}</span>
                  </span>
                  <span className="color-primary">{item.welfare_receive}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {bookList.total === bookList.books.length ? (
        <div className="text-12 color-6 text-center mt-24 pb-32">已经到底啦~</div>
      ) : (
        <div className="text-12 color-6 text-center my-16" ref={loader}>
          loading...
        </div>
      )}
    </div>
  );
};
export default PopularityList;
