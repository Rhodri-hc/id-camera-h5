import useAppConfig from '../../hooks/useAppConfig';
import styles from './index.module.scss';
export default function () {
  const config = useAppConfig();

  return (
    <>
      <h3 className="text-center mt-12">用户协议</h3>
      <div
        className={styles.box}
        dangerouslySetInnerHTML={{ __html: config.UserAgreementContent }}
      />
    </>
  );
}
