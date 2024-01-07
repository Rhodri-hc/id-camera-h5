import { useState } from 'react';
import { Radio, Space, Input, TextArea, Button, Toast } from 'antd-mobile';
import { RadioValue } from 'antd-mobile/es/components/radio';
import apis from '@/apis';
import { FeedbackParams } from '@/apis/feedback';
import { sleep } from '@/utils';
import typeList from './config';
import styles from './index.module.scss';

const FeedbackType: React.FC = () => {
  const [feedbackInfo, setFeedbackInfo] = useState<FeedbackParams>({
    content: '',
    type: 1,
    question: '',
    phone: '',
    order_id: '',
  });

  const changeRadio = (value: RadioValue) => {
    setFeedbackInfo({ ...feedbackInfo, type: value as number });
  };
  const changeInput = (value: string) => {
    setFeedbackInfo({ ...feedbackInfo, question: value });
  };
  const changeNumber = (value: string) => {
    setFeedbackInfo({ ...feedbackInfo, phone: value });
  };
  const changeOrder = (value: string) => {
    setFeedbackInfo({ ...feedbackInfo, order_id: value });
  };

  const sumbitForm = async () => {
    if (!feedbackInfo.question) {
      Toast.show({
        content: '请先详细描述您的问题',
      });
      return;
    }
    if (!feedbackInfo.phone) {
      Toast.show({
        content: '请先输入手机号',
      });
      return;
    }
    const typeItem = typeList.find((item) => item.value === feedbackInfo.type);
    if (typeItem) {
      const form = {
        ...feedbackInfo,
        content: JSON.stringify({ type: typeItem.label, question: feedbackInfo.question }),
      };
      try {
        Toast.show({ icon: 'loading', content: '加载中…' });
        await apis.feedback.userFeedback(form);

        setFeedbackInfo({ content: '', type: 1, question: '', phone: '' } as FeedbackParams);

        Toast.show({ content: '反馈成功' });
      } finally {
        await sleep(1000);
        Toast.clear();
      }
    }
  };

  return (
    <div className={styles.feedback}>
      <div className={styles.feedback_title}>
        <p className={styles.feedback_title_require}>*</p>
        <p className={styles.feedback_title_label}>反馈分类</p>
      </div>
      <div className={styles.feedback_content}>
        <Radio.Group value={feedbackInfo.type} onChange={changeRadio}>
          <Space direction="vertical">
            {typeList.map((item) => {
              return (
                <Radio
                  value={item.value}
                  key={item.value}
                  className={styles.feedback_content_radio}
                >
                  {item.label}
                </Radio>
              );
            })}
          </Space>
        </Radio.Group>
      </div>
      <div className={styles.feedback_title}>
        <p className={styles.feedback_title_require}>*</p>
        <p className={styles.feedback_title_label}>请详细描述您的问题</p>
      </div>
      <div className={styles.feedback_content}>
        <TextArea
          value={feedbackInfo.question}
          className={styles.feedback_content_input}
          placeholder="您的反馈是我们进步的动力"
          showCount
          rows={4}
          maxLength={256}
          onChange={changeInput}
        />
      </div>
      {feedbackInfo.type === 4 && (
        <div>
          <div className={styles.feedback_title}>
            <p className={styles.feedback_title_require}>*</p>
            <p className={styles.feedback_title_label}>支付商户单号</p>
          </div>
          <div className={styles.feedback_content}>
            <Input
              value={feedbackInfo.order_id}
              placeholder="请输入反馈问题相关的商户单号"
              className={styles.feedback_content_input}
              onChange={changeOrder}
            />
          </div>
          <p className={styles.feedback_content_tip}>
            支付宝订单号：我的-账单-找到对应订单记录-点击进入详情页-复制商户单号
          </p>
        </div>
      )}

      <div className={styles.feedback_title}>
        <p className={styles.feedback_title_require}>*</p>
        <p className={styles.feedback_title_label}>联系方式</p>
      </div>
      <div className={styles.feedback_content}>
        <Input
          value={feedbackInfo.phone}
          placeholder="请输入手机号以便客服及时联系您"
          className={styles.feedback_content_input}
          onChange={changeNumber}
        />
      </div>
      <Button block color="primary" className={styles.feedback_content_button} onClick={sumbitForm}>
        提交
      </Button>
    </div>
  );
};
FeedbackType.defaultProps = {
  appInfo: {},
};
export default FeedbackType;
