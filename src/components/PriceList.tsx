import { useRouter } from 'next/dist/client/router';
import { useInView } from 'react-intersection-observer';
import TextLink from './common/TextLink';
import styles from 'styles/modules/PriceList.module.scss';

const PriceList: React.FC = () => {
  const [contentRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });
  const router = useRouter();
  return (
    <div
      ref={contentRef}
      className={`${styles.priceListBox} ${inView && styles.inView}`}
    >
      <h2 className={styles.priceTitle}>Price - 料金例</h2>
      <p className={styles.priceText}>
        ご依頼内容により料金は変動します。目安としてご覧ください。
      </p>
      <p className={styles.contentItemNotes}>
        ※2022/2/1〜 最低料金を一部値上げしています。なお、限られたご予算でも、提案数を抑える等で以下の金額より抑えられる可能性もあります。一度ご相談ください。
      </p>
      <div className={styles.priceBox}>
        {/* ウェブ */}
        <div className={styles.priceContents}>
          <h3 className={styles.contenttitle}>Web</h3>
          <ul className={styles.contentItemList}>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemTitle}>
                WordPressテーマカスタマイズ
              </h4>
              <div className={styles.contentItemTitle}>
                - コーポレートサイト（数ページ）＋ブログ
              </div>
              <div className={styles.contentItemPrice}>
                ¥320,000 + 税 〜
              </div>
            </li>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemTitle}>
                LP（下層ページの無い、1ページだけのサイト）
              </h4>
              <div className={styles.contentItemPrice}>
                ¥220,000 + 税 〜
              </div>
            </li>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemTitle}>
                完全オリジナルデザイン（独自CMS／WordPress）
              </h4>
              <div className={styles.contentItemPrice}>
                ¥430,000 + 税 〜
              </div>
            </li>
          </ul>
          <p className={styles.contentItemNotes}>
            ※要件整理・コンセプトメイキング・構成検討・デザイン制作・実装費含む
            （デザイン素材費・10ページ以上のデータ流し込みは含みません。別途お見積。）
          </p>
        </div>
        {/* グラフィック */}
        <div className={styles.priceContents}>
          <h3 className={styles.contenttitle}>Graphic</h3>
          <ul className={styles.contentItemList}>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemTitle}>
                チラシ（A4両面フルカラー）
              </h4>
              <div className={styles.contentItemPrice}>
                ¥60,000 + 税 〜
              </div>
            </li>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemTitle}>
                チラシ（A3両面フルカラー）
              </h4>
              <div className={styles.contentItemPrice}>
                ¥120,000 + 税 〜
              </div>
            </li>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemTitle}>
                パンフレット(B5フルカラー／8ページ)
              </h4>
              <div className={styles.contentItemPrice}>
                ¥300,000 + 税 〜
              </div>
            </li>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemTitle}>
                VI（ロゴのみ）
              </h4>
              <div className={styles.contentItemPrice}>
                ¥120,000 + 税 〜
              </div>
            </li>
          </ul>
          <p className={styles.contentItemNotes}>
            ※要件整理・コンセプトメイキング・構成検討・デザイン制作費含む
            （デザイン素材費・印刷費は含みません。別途お見積。）
          </p>
        </div>
        {/* UI/UX */}
        <div className={styles.priceContents}>
          <h3 className={styles.contenttitle}>UI/UX</h3>
          <ul className={styles.contentItemList}>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemText}>
                規模・担当範囲により大きく価格が異なるため、直接お問合せください。
                <br />
                要件定義・業務フロー整理などの上流から参画可能です。
              </h4>
            </li>
          </ul>
        </div>
        {/* Illustration */}
        <div className={styles.priceContents}>
          <h3 className={styles.contenttitle}>Illustration</h3>
          <ul className={styles.contentItemList}>
            <li className={styles.contentItem}>
              <h4 className={styles.contentItemText}>
                WEBやグラフィックに、聴くと描くオリジナルのイラストをプラスできます。イラストのみのご依頼も可能です。
                <br />
                別途お見積しますので、お気軽にお問合せください。
              </h4>
              <div className={styles.contentItemLink}>
                <TextLink
                  color={'#303030'}
                  marginRight={0}
                  size={14}
                  text={'アート&イラストの作品紹介はこちら →'}
                  onClick={() => router.push('/unou')}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
