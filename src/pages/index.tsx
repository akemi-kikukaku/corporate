import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import leftImg from 'images/top_left.png';
import leftMdImg from 'images/top_left_md.png';
import mainImg from 'images/top_main.png';
import mainImg2 from 'images/top_main2.png';
import rightImg from 'images/top_right.png';
import rightMdImg from 'images/top_right_md.png';
import isMatchTargetDevice from 'logics/isMatchTargetDevice';
import styles from 'styles/modules/Home.module.scss';

export const Home: React.FC = () => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isPc = isMatchTargetDevice(windowWidth, 'LG');

  const LeftImage = () => {
    if (isPc) {
      return (
        <div className={styles.leftImageBox}>
          <Image src={leftImg} alt='右脳イラストPC' />
        </div>
      );
    } else {
      return (
        <div className={styles.leftImageBox}>
          <Image src={leftMdImg} alt='右脳イラストSP' />
        </div>
      );
    }
  };
  const RightImage = () => {
    if (isPc) {
      return (
        <div className={styles.rightImageBox}>
          <Image src={rightImg} alt='左脳イラストPC' />
        </div>
      );
    } else {
      return (
        <div className={styles.rightImageBox}>
          <Image src={rightMdImg} alt='左脳イラストSP' />
        </div>
      );
    }
  };

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const titleStyles = useMemo(() => {
    const width = window.innerWidth;
    if (width >= 600) {
      return {
        fontSize: 28,
        marginBottom: 120,
        letterSpacing: 0.2
      };
    };
    if (width >= 360) {
      return {
        fontSize: 20,
        marginBottom: 48,
        letterSpacing: 0.6
      };
    };
    return {
      fontSize: 18,
      marginBottom: 36,
      letterSpacing: 0.5
    };
  }, []);
  return (
    <div className={styles.homeWrap}>
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
      <div className={styles.contentBottom}>
        <div className={styles.leadTextWrap}>
          <h1
            className={styles.leadText}
            style={{
              fontSize: `${titleStyles.fontSize}px`,
              marginBottom: `${titleStyles.marginBottom}px`,
              letterSpacing: `${titleStyles.letterSpacing}rem`
            }}>
              どちらを見ますか？
            </h1>
        </div>
        <div className={styles.controllers}>
          <button
            className={styles.button}
            onClick={() => router.push('/unou')}
          >
            <div className={styles.buttonText}>右脳</div>
            <div className={styles.buttonSubText}>
              （イラスト/アート）
            </div>
          </button>
          <button
            className={styles.button}
            onClick={() => router.push('/sanou')}
          >
            <div className={styles.buttonText}>左脳</div>
            <div className={styles.buttonSubText}>（デザイン）</div>
          </button>
        </div>
        <LeftImage />
        <div className={styles.mainImageBox}>
          <div className={styles.mainImageTop}>
            <Image src={mainImg} alt='右脳・左脳' />
          </div>
          <div className={styles.mainImageBottom}>
            <Image
              className={styles.ooooo}
              src={mainImg2}
              alt='右脳・左脳'
            />
          </div>
        </div>
        <RightImage />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Home;
