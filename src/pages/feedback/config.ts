import {
  MessageOutlined,
  AlipayCircleOutlined,
  WechatOutlined,
  MailOutlined,
} from '@ant-design/icons';

export enum TypeValueEnum {
  FEEDBACK = 1,
  BIDDING,
  MAIL,
  WECHAT,
}

export interface LinkTypeItem {
  value: TypeValueEnum;
  Icon: any;
  label: string;
}

export default [
  {
    value: TypeValueEnum.FEEDBACK,
    Icon: MessageOutlined,
    label: '用户反馈',
  },
  {
    value: TypeValueEnum.BIDDING,
    Icon: AlipayCircleOutlined,
    label: '支付宝续订解绑教程',
  },
  {
    value: TypeValueEnum.MAIL,
    Icon: MailOutlined,
    label: 'wtxjkf@vigamemedia.com',
  },
  {
    value: TypeValueEnum.WECHAT,
    Icon: WechatOutlined,
    label: '微信客服',
  },
] as LinkTypeItem[];
