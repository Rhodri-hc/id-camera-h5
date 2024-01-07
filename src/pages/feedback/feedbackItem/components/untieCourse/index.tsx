import { FeedbackInfoData } from '@/apis/feedback';

interface PropsInfo {
  appInfo: FeedbackInfoData;
}

const UntieCourse: React.FC<PropsInfo> = (props: PropsInfo) => {
  const spanMb = 'mb-8';

  console.log(props.appInfo);

  return (
    <div className="column px-16">
      {props.appInfo.pay_type === 'apple' && (
        <>
          <span className={spanMb}>1. 打开手机【设置】</span>
          <span className={spanMb}>2. 点击【iTunesStore与AppStore】</span>
          <span className={spanMb}>3. 点击【AppleID-查看AppleID】</span>
          <span className={spanMb}>4. 点击【账户设置】</span>
          <span className={spanMb}>5. 点击【订阅】微糖超级会员</span>
          <span className={spanMb}>6. 取消订阅</span>
        </>
      )}
      {(!props?.appInfo?.pay_type || props.appInfo.pay_type === 'Alipay') && (
        <>
          <span className={spanMb}>1. 打开【支付宝】，进入【我的】【设置】</span>
          <span className={spanMb}>2. 点击【支付设置】</span>
          <span className={spanMb}>3. 点击【免密支付/自动扣款】</span>
          <span className={spanMb}>4. 找到【{props.appInfo.company_name}】</span>
          <span className={spanMb}>5. 点击【关闭服务】即可</span>
        </>
      )}
    </div>
  );
};
export default UntieCourse;
