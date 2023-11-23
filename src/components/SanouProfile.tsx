import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Icon from './common/Icon';
import SectionTitle from './common/SectionTitle';
import SectionTitleVertical from './common/SectionTitleVertical';
import facebookIcon from 'images/facebook.svg';
import instaIcon from 'images/instagram.svg';
import { isBelowMd } from 'logics/isMatchTargetDevice';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/SanouProfile.module.scss';

const SanouProfile = () => {
  const ctx = useContext(ContextData);
  const isMd = isBelowMd(ctx.width);

  const [contentRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });

  const Sectiontitle = () => {
    if (ctx.width > 1024) {
      return (
        <div className={styles.sectionTitleBox}>
          <SectionTitleVertical title={'Profile'} />
        </div>
      );
    } else {
      return <SectionTitle title={'Profile'} side={'center'} />;
    }
  };
  const isMinWidth = () => {
    if (ctx.width <= 1024) {
      const sectionWidth = ctx.width * 0.9;
      const marginWidth = 32 + 32;
      const workBoxWidth = sectionWidth - (310 + marginWidth);
      return workBoxWidth <= 400;
    } else {
      return false;
    }
  };
  return (
    <>
      <div className={styles.profileBox}>
        <Sectiontitle />
        <div
          ref={contentRef}
          className={`${styles.contentBody} ${
            isMinWidth() && styles.minWidth
          } ${inView && styles.inView}`}
        >
          <div
            className={`${styles.contentBox} ${
              isMinWidth() && styles.minWidth
            }`}
          >
            <div
              className={`${styles.jobTitle} ${
                inView && styles.inView
              }`}
            >
              株式会社 聴くと描く
            </div>
            <div
              className={`${styles.name} ${inView && styles.inView}`}
            >
              <div className={styles.nameText}>
                代表取締役　小久保 明美
              </div>
              <Icon
                icon={instaIcon}
                alt={'インスタグラム'}
                width={28}
                marginRight={16}
                href={'https://www.instagram.com/akemi_kokubo/'}
              />
              <Icon
                icon={facebookIcon}
                alt={'フェイスブック'}
                width={28}
                marginRight={16}
                href={'https://www.facebook.com/kokubo.akemi'}
              />
            </div>
            <p
              className={`${styles.recode} ${
                inView && styles.inView
              }`}
            >
              日本女子大学 住居学科居住環境デザイン専攻　2006年卒
            </p>
            <p
              className={`${styles.text} ${inView && styles.inView}`}
            >
              大学卒業後から約7年間、日本電気株式会社(NEC)・NECグループで、クライアント企業の業務フロー作成支援を担当。当事者故に、把握しきれてない業務や問題点を傾聴して引き出し、整理・見える化することを信念としていた。
              <br />
              一方で、社内ポータルサイトや自社製品パンフレットデザインにも携わる。
            </p>
            <p
              className={`${styles.text} ${inView && styles.inView}`}
            >
              デザインに注力すべく、2013年に制作会社のグラフィック・Webデザイナーへ転身。
              <br />
              以降、株式会社アンドパッド（建設SaaSスタートアップ企業）のUI/UXデザイナーや、フリーランスとしての多種多様な業界のクライアンワークを通し、媒体・ジャンルに囚われないオールラウンドのデザイン経験を積む。
            </p>
            <p
              className={`${styles.text} ${inView && styles.inView}`}
            >
              単なるデザイン制作に留まらず、要求整理・業務フロー・ストーリーマッピング・ペルソナ等の作成を通して、「本当に必要なデザインは何なのか？」「より良いユーザー体験とは何か？」を探り、要件定義から関わることを得意とする。
            </p>
          </div>
          <div
            className={`${styles.imageBox} ${
              isMinWidth() && styles.minWidth
            } ${inView && styles.inView}`}
          >
            <div
              className={`${styles.image} ${
                isMinWidth() && styles.minWidth
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className={`${styles.profileBox} ${styles.companyInfo}`}>
        {!isMd && (
          <div className={styles.sectionTitleBox}>
            <SectionTitleVertical title={'　'} isWhite={true} />
          </div>
        )}
        <div
          className={`${styles.contentBody} ${
            inView && styles.inView
          }`}
        >
          <div
            className={`${styles.contentBox} ${styles.companyInfoBox}`}
          >
            <dl className={styles.companyInfoBox}>
              <dt className={styles.label}>会社名</dt>
              <dl className={styles.body}>株式会社 聴くと描く</dl>
              <dt className={styles.label}>代表取締役</dt>
              <dl className={styles.body}>小久保 明美</dl>
              <dt className={styles.label}>所在地</dt>
              <dl className={styles.body}>
                〒270-0157 千葉県流山市平和台３丁目４番１１
              </dl>
              <dt className={styles.label}>営業時間</dt>
              <dl className={styles.body}>
                10:00~18:00（土日祝除く）
              </dl>
              <dt className={styles.label}>お問合せ</dt>
              <dl className={styles.body}>
                下記 Contact formからお願いします
              </dl>
              <dt className={styles.label}>取引実績<br />※敬称略</dt>
              <dl className={styles.body}>
                ＜デザイン、イラスト＞<br />
                日本電気株式会社、株式会社市進ラボ、一般社団法人生涯健康社会推進機構（東急不動産ホールディングスが立上げた社団法人）、株式会社流山ツーリズムデザイン、株式会社Hack Camp、株式会社新閃力、一般社団法人 コードフォージャパン、流山市※、株式会社文藝春秋※ 他<br />
                ※会社としてではなく、個人としての取引実績<br /><br />
                ＜講師＞<br />日本電子専門学校、株式会社市進ラボ 他
              </dl>
            </dl>
            {/*
              <div className={styles.settlement}>
                <TextLink
                  color={'white'}
                  text={'決算公告 →'}
                  size={14}
                  onClick={() => router.push('sanou/settlement')}
                />
              </div>
            */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SanouProfile;
