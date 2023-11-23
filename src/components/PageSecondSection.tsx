import { ReactNode, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';
import SectionTitleVertical from './common/SectionTitleVertical';
import { isBelowMd } from 'logics/isMatchTargetDevice';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/PageSecondSection.module.scss';
interface Props {
  children: ReactNode;
}

const PageSecondSection: React.FC<Props> = ({ children }) => {
  const ctx = useContext(ContextData);
  const isSanou = ctx.isSanou;
  const isMd = isBelowMd(ctx.width);

  const sectionTitleText = isSanou ? 'About' : 'News';

  const [contentRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });
  return (
    <>
      <div className={styles.contentWrap}>
        <div className={styles.sectionTitleBox}>
          {isMd ? (
            <SectionTitle title={sectionTitleText} side={'left'} />
          ) : (
            <SectionTitleVertical
              title={sectionTitleText}
              isHighMargin={true}
            />
          )}
        </div>
        <div
          ref={contentRef}
          className={`${styles.body} ${inView && styles.inView}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default PageSecondSection;
