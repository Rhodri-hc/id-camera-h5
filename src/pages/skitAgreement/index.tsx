import useSkitAgreementConfig from '@/hooks/useSkitAgreementConfig';
import styles from './index.module.scss';
export default function () {
  const config = useSkitAgreementConfig();
  return (
    <>
      <h3 className="text-center mt-12">{config.title}</h3>
      <div className={styles.box} dangerouslySetInnerHTML={{ __html: config.content }} />
    </>
  );
}
