import { useState, useEffect, FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Space, Toast } from 'antd-mobile';
import apis from '@/apis';
import { FeedbackInfoData } from '@/apis/feedback';
import { copyText } from '@/utils';
import linkTypeList, { LinkTypeItem, TypeValueEnum } from './config';
import FeedbackItem from './feedbackItem';
import styles from './index.module.scss';

interface LinkInfoData {
  type: number;
  headerName: string;
}

const HeaderNameObj: Record<TypeValueEnum, string> = {
  1: '反馈',
  2: '支付宝续订解绑教程',
  3: '客服联系方式',
  4: '微信客服',
};

const Feedback: FC<{
  appData?: FeedbackInfoData;
}> = ({ appData }) => {
  const [searchParams] = useSearchParams();
  const appId: string = (searchParams.get('appId') as string) || '';
  const [appInfo, setAppInfo] = useState<FeedbackInfoData>(
    appData || {
      company_name: '深圳市漫城科技开发有限公司',
      email: 'wtxjkf@vigamemedia.com',
      wechat: 'xxxmckj',
      qr_code: '',
    },
  );

  const getInitData = async () => {
    try {
      if (appId) {
        const res = await apis.feedback.getFeedbackInfo({ app_id: Number(appId) });

        if (res.pay_type === 'Alipay') {
          HeaderNameObj[2] = '支付宝续订解绑教程';
        } else if (res.pay_type === 'wechat') {
          HeaderNameObj[2] = '微信续订解绑教程';
        } else if (res.pay_type === 'apple') {
          HeaderNameObj[2] = '苹果用户取消续费';
        }

        linkTypeList.forEach((item) => {
          if (item.value === TypeValueEnum.BIDDING) {
            item.label = HeaderNameObj[2];
          }
        });

        res && setAppInfo(res);
      }
    } catch (e) {}
  };

  const [linkInfo, setlinkInfo] = useState<LinkInfoData>({
    type: TypeValueEnum.MAIL,
    headerName: '客服联系方式',
  });

  // 回首页
  const returnToHome = () => {
    setlinkInfo({ type: TypeValueEnum.MAIL, headerName: HeaderNameObj[TypeValueEnum.MAIL] });
  };

  const changeLinkItem = (item: LinkTypeItem) => {
    // 邮箱
    if (item.value === TypeValueEnum.MAIL) {
      copyText(appInfo.email);
      Toast.show({
        content: '已复制邮箱',
      });
    }

    setlinkInfo({ type: item.value, headerName: HeaderNameObj[item.value] });
  };

  useEffect(() => {
    getInitData();
  }, []);

  return (
    <div className={styles.type}>
      <div className={styles.type_header}>
        {linkInfo.type !== 3 && (
          <LeftOutlined className={styles.type_header_left} onClick={returnToHome} />
        )}
        <div>{linkInfo.headerName}</div>
      </div>

      {linkInfo.type === TypeValueEnum.MAIL ? (
        <>
          <div className="ml-16 mb-8">多种渠道皆可联系</div>
          {
            <ul className={styles.type_list}>
              {linkTypeList.map(({ Icon, ...item }) => {
                return (
                  <Space
                    align="center"
                    block
                    key={item.value}
                    className={styles.type_list_item}
                    onClick={() => changeLinkItem({ Icon, ...item })}
                  >
                    <div className="flex-align-center">
                      <Icon className="mr-16"></Icon>
                      <div>{item.value === TypeValueEnum.MAIL ? appInfo.email : item.label}</div>
                    </div>

                    {item.value === TypeValueEnum.MAIL ? (
                      <div className={styles.type_list_copy}> 复制</div>
                    ) : (
                      <RightOutlined />
                    )}
                  </Space>
                );
              })}
            </ul>
          }
          <div className="ml-16 mb-8 flex">
            <span className={styles.type_list_require}>*</span>
            <span className={styles.type_list_copy}>
              客服工作时间：工作日上午9:00-12:30，下午14:00-18:30
            </span>
          </div>
        </>
      ) : (
        <FeedbackItem type={linkInfo.type} appInfo={appInfo} />
      )}
    </div>
  );
};
export default Feedback;
