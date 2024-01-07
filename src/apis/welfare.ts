import request from '@/utils/request';
type TDist = {
  dict: string;
  name: string;
  mapping: {
    key: string;
    val: string;
  }[];
};
export type TCoinsRecordData = {
  total?: number;
  total_coins: number;
  page: number;
  size?: number;
  list: {
    name: string;
    coins: number;
    after_coins: number;
    bonus_id: string;
    ctime: number;
    id: number;
    source: string;
    uid: number;
  }[];
};
export type TCoinsWithDrawListData = {
  coins: number;
  cash: number;
  withdraw_list: {
    cash: string;
    code: number;
    coins: number;
  }[];
};
export default {
  getCoinsRecord: request<TCoinsRecordData>(`/sunny-api/coins/record`, 'get'),
  getCoinsWithDrawList: request<TCoinsWithDrawListData>(`/sunny-api/coins/withdraw_list`, 'get'),
};
