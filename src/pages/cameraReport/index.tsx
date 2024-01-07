import { useState } from 'react';
import { Input, TextArea, Button, Toast } from 'antd-mobile';
import apis from '@/apis';
import { FeedbackParams } from '@/apis/feedback';
import { sleep } from '@/utils';
import styles from './index.module.scss';

const CameraReport = () => {
  const [reportInfo, setReportInfo] = useState<FeedbackParams>({
    content: '',
    type: 3,
    question: '',
    phone: '',
    order_id: '',
  });

  const changeInput = (value: string) => {
    setReportInfo({ ...reportInfo, question: value });
  };
  const changeNumber = (value: string) => {
    setReportInfo({ ...reportInfo, phone: value });
  };

  const sumbitForm = async () => {
    if (!reportInfo.question) {
      Toast.show({
        content: '请先详细描述您的问题',
      });
      return;
    }
    if (!reportInfo.phone) {
      Toast.show({
        content: '请先输入手机号',
      });
      return;
    }

    const form = {
      ...reportInfo,
      content: JSON.stringify({ type: 3, question: reportInfo.question }),
    };
    try {
      Toast.show({ icon: 'loading', content: '加载中…' });
      await apis.feedback.userFeedback(form);

      setReportInfo({ content: '', type: 3, question: '', phone: '' } as FeedbackParams);

      Toast.show({ content: '举报成功' });
    } finally {
      await sleep(1000);
      Toast.clear();
    }
  };

  return (
    <div className={styles.report}>
      <div className={styles.report_title}>
        <p className={styles.report_title_require}>*</p>
        <p className={styles.report_title_label}>请详细描述您的问题</p>
      </div>
      <div className={styles.report_content}>
        <TextArea
          value={reportInfo.question}
          className={styles.report_content_input}
          placeholder=""
          showCount
          rows={4}
          maxLength={256}
          onChange={changeInput}
        />
      </div>

      <div className={styles.report_title}>
        <p className={styles.report_title_require}>*</p>
        <p className={styles.report_title_label}>联系方式</p>
      </div>
      <div className={styles.report_content}>
        <Input
          value={reportInfo.phone}
          placeholder="请输入手机号以便客服及时联系您"
          className={styles.report_content_input}
          onChange={changeNumber}
        />
      </div>
      <Button block color="primary" className={styles.report_content_button} onClick={sumbitForm}>
        提交
      </Button>
    </div>
  );
};
export default CameraReport;
