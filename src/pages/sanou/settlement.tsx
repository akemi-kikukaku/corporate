import Head from 'next/head';
import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';
import SectionTitle from '@/components/common/SectionTitle';
import { settlementBreadcrumb } from 'constants/settlementBreadcrumb';
import styles from 'styles/modules/Settlement.module.scss';

const Settlement: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          株式会社聴くと描く | 株式会社聴くと描く |
          流山市のデザイン会社・イラストレーター
        </title>
        <meta
          name='description'
          content='デザインに関わること、全部できます。相手の話や自分の内なる声に耳を傾ける、徹底的な「聴く」姿勢。聴いた事を咀嚼し、夢ある具体物へと「描く」力。この２つを両輪に、ワンストップで実現のお手伝いをします。'
        />
      </Head>
      <Breadcrumb items={settlementBreadcrumb} />
      <div className='top-title-box'>
        <SectionTitle title={'決算公告'} />
      </div>
      <section className={styles.settlementBox}>
        <ul className={styles.settlementItems}>
          {/*
            <li className={styles.settlementItem}>
              <span className={styles.itemText}>
                第５期決算公告 - 2026年9月期
              </span>
            </li>
            <li className={styles.settlementItem}>
              <span className={styles.itemText}>
                第４期決算公告 - 2025年9月期
              </span>
            </li>
            <li className={styles.settlementItem}>
              <span className={styles.itemText}>
                第３期決算公告 - 2024年9月期
              </span>
            </li>
            <li className={styles.settlementItem}>
              <span className={styles.itemText}>
                第２期決算公告 - 2023年9月期
              </span>
            </li>
            <li className={styles.settlementItem}>
              <span className={styles.itemText}>
                第１期決算公告 - 2022年9月期
              </span>
            </li>
          */}
          <li className={styles.settlementItem}>
            <span
              className={`${styles.itemText} ${styles.noItemText}`}
            >
              現在公告事項はありません
            </span>
          </li>
        </ul>
      </section>
      <Contact />
    </>
  );
};

export default Settlement;
