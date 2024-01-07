import { Layout } from '@/components/base';
import styles from './index.module.scss';
const ModalPage = () => {
  return (
    <Layout className={styles.modal}>
      <div className={styles.modal_content}>
        <span className="text-20 font-bold mb-16">添加客服微信</span>
        <span className={styles.modal_content_tag}>一天到账</span>
        <span className={styles.modal_content_tel}>6265262</span>
        <span className={styles.modal_content_get}>开心收下</span>
      </div>
    </Layout>
  );
};
export default ModalPage;
