const Agreement = {
  default: {
    company: '惠州市铭远智创科技开发有限公司',
  },
  template_1: {
    company: '惠州缱绻网络科技有限公司',
  },
  template_2: {
    company: '深圳市卡库卡科技有限公司',
  },
  template_3: {
    company: '深圳市漫城科技开发有限公司',
  },
  template_4: {
    company: '惠州市甯旻科技有限公司',
  },
};
export const pkgNames = {
  pkg1: '微糖相机',
  pkg2: '映画相机',
  //
  pkg3: '呱叽相机',
  pkg4: '缤纷相机',
  pkg5: '柠檬相机',
  pkg6: '极光特效',
};
export default Agreement;
export const keys = Object.keys(Agreement);
export type TPkgKeys = keyof typeof pkgNames;
export type AgreementConfig = keyof typeof Agreement;
