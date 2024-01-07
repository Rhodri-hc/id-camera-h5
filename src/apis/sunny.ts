import request from '@/utils/request';
export type TBookListData = {
  book_id: string;
  cover_url: string;
  source: string;
  title: string;
  description?: string;
  author: string;
  finish: boolean;
  current_chapter: number;
  total_chapter: number;
  chapter_no: number;
  welfare_cash: string;
  welfare_receive: string;
};
export type TBookListBackData = {
  books: TBookListData[];
  page: number;
  size?: number;
  total?: number;
};
export default {
  bookList: request<TBookListBackData>('/sunny-api/book/list', 'get'),
  bookShelfList: request<{ books: TBookListData[] }>('/sunny-api/bookshelf/list', 'get'),
  bookShelfDelete: request('/sunny-api/bookshelf/delete', 'post'),
  getLandingStatus: request<{ pass: boolean }>('/sunny-api/app/landing_page_status', 'get', {
    isDelay: false,
    envKey: 'NOVEL',
  }),
};
