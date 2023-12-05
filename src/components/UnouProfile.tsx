import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import Icon from './common/Icon';
import SectionTitle from './common/SectionTitle';
import SectionTitleVertical from './common/SectionTitleVertical';
import { WINDOW_WIDTH_TIPE } from 'constants/windowWidthType';
import facebookIcon from 'images/facebook.svg';
import instaIcon from 'images/instagram.svg';
import isMatchTargetDevice, { isBelowMd } from 'logics/isMatchTargetDevice';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/UnouProfile.module.scss';

const UnouProfile: React.FC = () => {
  const ctx = useContext(ContextData);

  const [contentRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });

  const Sectiontitle = () => {
    if (isMatchTargetDevice(ctx.width, WINDOW_WIDTH_TIPE.lg)) {
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
    if (isBelowMd(ctx.width)) {
      const sectionWidth = ctx.width * 0.9;
      const marginWidth = 32 + 32;
      const workBoxWidth = sectionWidth - (310 + marginWidth);
      return workBoxWidth <= 400;
    } else {
      return false;
    }
  };
  return (
    <div
      ref={contentRef}
      className={`${styles.profileWrap} ${inView && styles.inView}`}
    >
      <Sectiontitle />
      <div
        className={`${styles.contentBody} ${
          isMinWidth() && styles.minWidth
        }`}
      >
        <div
          className={`${styles.contentBox} ${
            isMinWidth() && styles.minWidth
          }`}
        >
          <div className={`${styles.jobTitle} ${inView && styles.inView}`}>イラストレーター</div>
          <div className={`${styles.name} ${inView && styles.inView}`}>
            <div className={styles.nameText}>
              小久保あけみ（Kokubo Akemi）
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
            className={`${styles.recode} ${inView && styles.inView}`}
          >
            日本女子大学 住居化学住居環境デザイン専攻卒
            <br />
            イラストレーション青山塾 ドローイング科卒
          </p>
          <p className={`${styles.text} ${inView && styles.inView}`}>
            筆でさっと描いた、オシャレで個性的な女の子を得意とする。企業の販促ツール・雑誌の挿絵・カフェのパッケージイラストなど、様々な媒体で活動中。
            <br />■ 主な使用ツール
            <br />
            ・アナログ：アクリルガッシュ／鉛筆／クレヨン　他
            <br />
            ・デジタル：Procreate（iPad）／Adobe CC
          </p>
        </div>
        <div
          className={`${styles.imageBox} ${inView && styles.inView}`}
        >
          <div
            className={`${styles.image} ${
              isMinWidth() && styles.minWidth
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UnouProfile;
