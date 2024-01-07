import styles from './index.module.scss';
import useAppConfig from '@/hooks/useAppConfig';
export default function () {
  const config = useAppConfig();
  return (
    <div className={styles.box}>
      <h3 className="text-center">隐私政策</h3>
      {config.name}
      {config.privacyAgreementContent}
    </div>
  );
}
