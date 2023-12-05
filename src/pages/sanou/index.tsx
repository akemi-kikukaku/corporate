import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import {
  createRef,
  RefObject,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useInView } from 'react-intersection-observer';
import Contact from '@/components/Contact';
import DesignFlow from '@/components/DesignFlow';
import Merits from '@/components/Merits';
import PageSecondSection from '@/components/PageSecondSection';
import PortfolioList from '@/components/PortfolioList';
import PriceList from '@/components/PriceList';
import Recommendation from '@/components/Recommendation';
import SanouProfile from '@/components/SanouProfile';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SectionTitle from '@/components/common/SectionTitle';
import MeritTitle from 'images/merit_title.svg';
import MeritTitleSp from 'images/merit_title_sp.svg';
import topImage from 'images/sanou_top_image.svg';
import topImageSp from 'images/sanou_top_image_sp.svg';
import { isBelowSm } from 'logics/isMatchTargetDevice';
import { MarkdownFileData } from 'models/';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/Sanou.module.scss';

interface Props {
  articles: MarkdownFileData[];
}

const Sanou: React.FC<Props> = ({ articles }) => {
  const ctx = useContext(ContextData);
  const router = useRouter();

  const isSp = isBelowSm(ctx.width);

  const [meritTitleRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });

  const homeRef = createRef<HTMLDivElement>();
  const aboutRef = createRef<HTMLDivElement>();
  const portfolioRef = createRef<HTMLDivElement>();
  const goodPointRef = createRef<HTMLDivElement>();
  const flowPriceRef = createRef<HTMLDivElement>();
  const recommendationRef = createRef<HTMLDivElement>();
  const profileRef = createRef<HTMLDivElement>();
  const contactRef = createRef<HTMLDivElement>();

  const scrollToTarget = (
    ref: RefObject<HTMLDivElement>,
    minus: number = 0,
  ) => {
    window.scrollTo({
      top: ref.current!.offsetTop - minus,
      left: 0,
      behavior: 'smooth',
    });
  };

  const swichTarget = useCallback(
    (target: string) => {
      switch (target) {
        case 'home':
          scrollToTarget(homeRef, 60);
          break;
        case 'about':
          scrollToTarget(aboutRef, 58);
          break;
        case 'portfolio':
          scrollToTarget(portfolioRef);
          break;
        case 'goodPoint':
          scrollToTarget(goodPointRef);
          break;
        case 'flowPrice':
          scrollToTarget(flowPriceRef);
          break;
        case 'recommendation':
          scrollToTarget(recommendationRef);
          break;
        case 'profile':
          scrollToTarget(profileRef);
          break;
        case 'contact':
          scrollToTarget(contactRef);
          break;
        default:
          break;
      }
    },
    [
      homeRef,
      aboutRef,
      portfolioRef,
      goodPointRef,
      flowPriceRef,
      recommendationRef,
      profileRef,
      contactRef,
    ],
  );

  useEffect(() => {
    const targetQuery = router.query.target as string;
    const targetSamePage = ctx.target;
    if (!targetQuery && targetSamePage === '') return;
    const moveInPage = targetSamePage !== '';

    if (moveInPage) {
      swichTarget(targetSamePage);
    } else {
      swichTarget(targetQuery);
    }
  }, [swichTarget, router.query, ctx.target]);

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
      <div className={styles.topImage} ref={homeRef}>
        <h1 className={styles.topCopy}>
          <div className={styles.textWrap}>
            <span className={styles.topText1}>よく</span>
            <span className={styles.topText2}>聴き</span>
            <br />
            <span className={styles.topText3}>よく</span>
            <span className={styles.topText4}>描く</span>
          </div>
          <div className={styles.topImageBox}>
            {isSp ? (
              <Image src={topImageSp} alt={'トップイメージ'} />
            ) : (
              <Image src={topImage} alt={'トップイメージ'} />
            )}
          </div>
        </h1>
      </div>
      <div
        className={`${styles.aboutWrap} ${isSp && 'sectionWrapper'}`}
        ref={aboutRef}
      >
        <PageSecondSection>
          <section className={styles.aboutBody}>
            <p className={styles.text}>
              よいデザインは、どうやったら生まれるでしょうか？
            </p>
            <p className={styles.text}>
              第一に、相手の話や自分の内なる声に真摯に耳を傾ける、徹底的な「聴く」姿勢。
            </p>
            <p className={styles.text}>
              第二に、聴いた事を咀嚼し、夢ある具体物へと「描く」力。
            </p>
            <p className={styles.text}>
              この２つが両輪となって、デザインを生み出す原動力になると私たちは考えます。
            </p>
            <p className={styles.text}>
              まずは、あなたのお話・やりたいことを、聴かせてください。
              <br />
              株式会社聴くと描くが、ワンストップで実現のお手伝いを致します。
            </p>
          </section>
        </PageSecondSection>
      </div>
      <div className='sectionWrapper' ref={portfolioRef}>
        <SectionTitle
          title={'Portfolio'}
          subTitle={'グラフィック・WEB・UI/UXデザイン'}
        />
        <section className={styles.workWrap}>
          <PortfolioList items={articles} />
          <div className={styles.controller}>
            <PrimaryButton
              text={'More'}
              onClick={() => router.push('/sanou/portfolio')}
            />
          </div>
        </section>
      </div>
      <div className='sectionWrapper' ref={goodPointRef}>
        <div className={`${styles.meritWrap}`}>
          <div className={styles.meritContents}>
            <div
              ref={meritTitleRef}
              className={`${styles.meritTitle} ${
                inView && styles.inView
              }`}
            >
              {isSp ? (
                <Image
                  src={MeritTitleSp}
                  alt={'「聴くと描く」の、いいこと4つ'}
                />
              ) : (
                <Image
                  src={MeritTitle}
                  alt={'「聴くと描く」の、いいこと4つ'}
                />
              )}
            </div>
            <section className={styles.meritBox}>
              <Merits />
            </section>
          </div>
          <div
            className={styles.meritDesignFlowWrap}
            ref={flowPriceRef}
          >
            <DesignFlow />
          </div>
          <section className={styles.priceListWrap}>
            <PriceList />
          </section>
        </div>
      </div>
      <div className='sectionWrapper' ref={recommendationRef}>
        <Recommendation />
      </div>
      <section className='sectionWrapper' ref={profileRef}>
        <SanouProfile />
      </section>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'articles', 'sanou'));
  const articles = files.map((filename) => {
    const slug = filename.replace(/.md/, '');
    const markdownWithMeta = fs.readFileSync(
      path.join('src', 'articles', 'sanou', filename),
      'utf-8',
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return { slug, frontmatter, content };
  });

  const orderedArticles = articles.sort((a, b) => {
    if (a.frontmatter.date > b.frontmatter.date) {
      return -1;
    } else {
      return 1;
    }
  });

  return { props: { articles: orderedArticles } };
};

export default Sanou;
