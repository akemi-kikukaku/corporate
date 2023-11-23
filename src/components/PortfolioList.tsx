import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Categories from './common/Categories';
import { isBelowMd } from 'logics/isMatchTargetDevice';
import { MarkdownFileData } from 'models/';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/PortfolioList.module.scss';

interface Props {
  items: MarkdownFileData[];
  isPage?: boolean;
}

const PortfolioList: React.FC<Props> = ({ items, isPage }) => {
  const router = useRouter();
  const ctx = useContext(ContextData);
  const [isMin, setIsMin] = useState(false);
  const [maxLength, setMaxLength] = useState(0);

  const portfolioPath = ctx.isSanou
    ? '/sanou/portfolio'
    : '/unou/portfolio';

  const [contentRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (isBelowMd(ctx.width)) {
      const sectionWidth = ctx.width * 0.9;
      const workBoxWidth = sectionWidth * 0.46;
      setIsMin(workBoxWidth <= 300);
    } else {
      setIsMin(false);
    }
  }, [ctx.width]);

  useEffect(() => {
    if (isPage) {
      setMaxLength(items.length);
      return;
    }
    !isBelowMd(ctx.width) ? setMaxLength(9) : setMaxLength(6);
  }, [isPage, items.length, ctx.width]);

  useEffect(() => {
    if (isPage) {
      const onScroll = () => {
        const scrollVal = document.documentElement.scrollTop;
        const documentHeight = document.documentElement.clientHeight;
        const pageXOffset = document.documentElement.scrollHeight;

        if (
          pageXOffset === scrollVal + documentHeight &&
          items.length > maxLength
        ) {
          setMaxLength((prevState) => prevState + 6);
        }
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [isPage, maxLength, items.length]);

  return (
    <section
      ref={contentRef}
      className={`${styles.workWrap} ${inView && styles.inView}`}
    >
      {items.map(
        (item, i) =>
          i + 1 <= maxLength && (
            <div
              className={`${styles.workBox} ${
                isMin && styles.minWidth
              }`}
              key={i}
              onClick={() =>
                router.push(`${portfolioPath}/${item.slug}`)
              }
            >
              <div className={styles.imageBox} key={i}>
                <div className={styles.imageAjBox}>
                  <Image
                    src={item.frontmatter.coverImage}
                    width='1000'
                    height='1000'
                    alt={'トップイメージ'}
                  />
                </div>
              </div>
              <div className={styles.worksText}>
                {item.frontmatter.title}／{item.frontmatter.excerpt}
              </div>
              <Categories categories={item.frontmatter.categories} />
            </div>
          ),
      )}
    </section>
  );
};

export default PortfolioList;
