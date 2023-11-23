import Link from 'next/link';
import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import { isBelowMd, isBelowSm } from 'logics/isMatchTargetDevice';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/Recommendation.module.scss';

const Recommendation = () => {
  const ctx = useContext(ContextData);
  const isSp = isBelowSm(ctx.width);
  const IsUnderMd = isBelowMd(ctx.width);

  const [contentRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });
  return (
    <>
      <SectionTitle
        title={isSp ? 'Recommen-\ndation' : 'Recommendation'}
        subTitle={
          IsUnderMd
            ? 'スタートアップ・ベンチャー\n企業様からの推薦文'
            : 'スタートアップ・ベンチャー企業様からの推薦文'
        }
      />
      {/* 株式会社新閃力 */}
      <section
        ref={contentRef}
        className={`${styles.recommendBox} ${
          inView && styles.inView
        }`}
      >
        <div className={styles.item}>
          <div className={styles.image} />
          <section className={styles.itemBody}>
            <Link href='https://shinsenryoku.com/'>
              <a className={styles.company} target='_blank'>
                株式会社新閃力
              </a>
            </Link>
            <div className={styles.name}>
              代表取締役　尾崎えり子様
            </div>
            <p className={styles.text}>
              弊社が新事業を立ち上げた時に依頼しました。
              <br />
              まだ事業の詳細が固まっていない中でしたが、ビジョンを伝えただけでデザインに落とし込んでいただき、大変助かりました。
              <br />
              おかげで、弊社の柱となる事業に成長しました。
            </p>
          </section>
        </div>
        {/* 株式会社アンドパッド */}
        <div className={styles.item}>
          <div className={`${styles.image} ${styles.image2}`} />
          <section
            className={`${styles.itemBody} ${styles.itemBody2}`}
          >
            <Link href='https://andpad.co.jp/'>
              <a className={styles.company} target='_blank'>
                株式会社アンドパッド
              </a>
            </Link>
            <div className={styles.name}>
              デザイン部部長　前嶋康秀様
            </div>
            <p className={styles.text}>
              あるプロダクトのUI/UXデザインを約2年担当していただきました。
              <br />
              toB向けで業務+業界理解が必要ですが、自主的に勉強会を定期的に開催。
              チームメンバーを巻き込んだ結果、プロダクトの品質がとても向上しました。
            </p>
          </section>
        </div>
        {/* 株式会社Colabo-ya */}
        <div className={styles.item}>
          <div className={`${styles.image} ${styles.image3}`} />
          <section className={styles.itemBody}>
            <Link href='https://colabo-ya.jp/'>
              <a className={styles.company} target='_blank'>
                株式会社Colabo-ya
              </a>
            </Link>
            <div className={styles.name}>代表取締役　白澤美幸様</div>
            <p className={styles.text}>
              彼女自身がIT系の企業で培ったヒアリング能力と幅広い表現力によって、イメージをすり合わせる時必要なアーキテクチャーがない状態から依頼をすることができ、できたデザインはコンセプトの背景まで一気に伝わる気持ちよさがあります。
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Recommendation;
