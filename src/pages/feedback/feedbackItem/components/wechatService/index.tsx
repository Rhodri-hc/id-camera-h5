import { Image } from 'antd-mobile';
import { FeedbackInfoData } from '@/apis/feedback';
import xiaoxi from '@/assets/wechat-xiaoxi.jpg';

interface PropsInfo {
  appInfo: FeedbackInfoData;
}

const WechatService: React.FC<PropsInfo> = (props: PropsInfo) => {
  return (
    <div className="column px-16">
      <span className="mb-8">手机添加客服微信</span>
      <span className="mb-16">微信号：{props.appInfo.wechat}</span>

      <Image src={props.appInfo.qr_code || xiaoxi} />
    </div>
  );
};
export default WechatService;
