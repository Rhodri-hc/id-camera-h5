import { FeedbackInfoData } from '@/apis/feedback';
import { TypeValueEnum } from '../config';
import FeedbackType from './components/feedbackType';
import UntieCourse from './components/untieCourse';
import WechatService from './components/wechatService';

interface FeedbackProps {
  type: TypeValueEnum;
  appInfo: FeedbackInfoData;
}

interface FeedbackComponents {
  type: TypeValueEnum;
  Component: React.FC<{
    appInfo: FeedbackInfoData;
  }>;
}

const feedbackList: FeedbackComponents[] = [
  {
    type: TypeValueEnum.FEEDBACK,
    Component: FeedbackType,
  },
  {
    type: TypeValueEnum.BIDDING,
    Component: UntieCourse,
  },
  {
    type: TypeValueEnum.WECHAT,
    Component: WechatService,
  },
];

const FeedbackItem: React.FC<FeedbackProps> = (props: FeedbackProps) => {
  const { type: itemType, appInfo } = props;
  const targetComponent = feedbackList.find((it) => it.type === itemType);
  if (targetComponent) {
    const { Component } = targetComponent;

    return (
      <div>
        <Component appInfo={appInfo} />
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default FeedbackItem;
