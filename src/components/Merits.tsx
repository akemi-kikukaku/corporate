import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import TextLink from './common/TextLink';
import MeritImage01 from 'images/merit_01.png';
import MeritImage02 from 'images/merit_02.png';
import MeritImage03 from 'images/merit_03.png';
import MeritImage04 from 'images/merit_04.png';
import { isBelowSm } from 'logics/isMatchTargetDevice';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/Merits.module.scss';

const Merits = () => {
  const ctx = useContext(ContextData);
  const router = useRouter();

  const isSm = isBelowSm(ctx.width);

  const [point1Ref, inView1] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
  });
  const [point2Ref, inView2] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
  });
  const [point3Ref, inView3] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
  });
  const [point4Ref, inView4] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
  });
  return (
    <>
      <div
        ref={point1Ref}
        className={`${styles.meritBox} ${styles.meritBox1} ${
          inView1 && styles.inView
        }`}
      >
        <div className={styles.meritContents}>
          <div className={styles.meritNumber}>Good Point 01</div>
          <div className={styles.meritTitle}>
            {ctx.width >= 600 && (
              <>
                <span className={styles.meritTitleText}>
                  デザインに関わること、
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  全部できます。
                </span>
              </>
            )}
            {isSm && (
              <>
                <span className={styles.meritTitleText}>
                  デザインに
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  関わること、
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  全部できます。
                </span>
              </>
            )}
          </div>
          <p className={styles.meritText}>
            ポスター・パンフレット・ロゴ・Web・UI/UX・イラスト…
            デザインに関わることをトータルで手掛けられます。
          </p>
          <p className={styles.meritText}>
            あれもこれも作りたいお客様には、聴くと描くがトータルで手掛けることにより、ブランド力・一貫性のあるクリエイティブ提供が可能です。
            <br />
            やりたい事がまだハッキリしないお客様には、お悩みをお聞きしながら、媒体の垣根無く、本当に必要な制作物をご提案可能です。
          </p>
        </div>
        <div className={styles.meritImage}>
          <Image
            src={MeritImage01}
            alt={'デザインに関わること、全部できます。'}
          />
        </div>
      </div>
      <div
        ref={point2Ref}
        className={`${styles.meritBox} ${styles.inversion} ${
          inView2 && styles.inView
        }`}
      >
        <div className={styles.meritContents}>
          <div className={styles.meritNumber}>Good Point 02</div>
          <div className={styles.meritTitle}>
            {ctx.width >= 600 && (
              <>
                <span className={styles.meritTitleText}>
                  モヤっとしたご依頼、
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  大歓迎です。
                </span>
              </>
            )}
            {isSm && (
              <>
                <span className={styles.meritTitleText}>
                  モヤっとした
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  ご依頼、
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  大歓迎です。
                </span>
              </>
            )}
          </div>
          <p className={styles.meritText}>
            「Webサイトを作りたいけど、どういう内容にしたらいいか、全然決まっていない…」
            そんな段階からご依頼頂くのを、聴くと描くは得意としています。
          </p>
          <p className={styles.meritText}>
            エンジニア時代から培ったヒアリング力と分析力で、お客様の業務・業界理解からスタートし、「お客様の本当にやりたい事は何か」を具体化していく所からサポート致します。
          </p>
        </div>
        <div className={styles.meritImage}>
          <Image
            src={MeritImage02}
            alt={'モヤっとしたご依頼、 大歓迎です。'}
          />
        </div>
      </div>
      <div
        ref={point3Ref}
        className={`${styles.meritBox} ${inView3 && styles.inView}`}
      >
        <div className={styles.meritContents}>
          <div className={styles.meritNumber}>Good Point 03</div>
          <div className={styles.meritTitle}>
            {ctx.width >= 600 && (
              <>
                <span className={styles.meritTitleText}>
                  「なんとなく格好いい」だけ、
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  のデザインはしません。
                </span>
              </>
            )}
            {isSm && (
              <>
                <span className={styles.meritTitleText}>
                  「なんとなく
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  格好いい」だけ、
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  のデザインは
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  しません。
                </span>
              </>
            )}
          </div>
          <p className={styles.meritText}>
            よいデザインとは、目的を達成出来るデザインです。
          </p>
          <p className={styles.meritText}>
            「可愛く見せたい」「親しみやすいと思って欲しい」「信頼されたい」…お客様の話を聴く中でハッキリした「なりたいイメージ」を最終目的とし、全てのデザインを構築します。
          </p>
          <p className={styles.meritText}>
            「なんとなく」デザインする箇所はありません。
          </p>
        </div>
        <div className={styles.meritImage}>
          <Image
            src={MeritImage03}
            alt={
              '「なんとなく格好いい」だけ、 のデザインはしません。'
            }
          />
        </div>
      </div>
      <div
        ref={point4Ref}
        className={`${styles.meritBox} ${styles.inversion} ${
          inView4 && styles.inView
        }`}
      >
        <div className={styles.meritContents}>
          <div className={styles.meritNumber}>Good Point 04</div>
          <div className={styles.meritTitle}>
            {ctx.width >= 600 && (
              <>
                <span className={styles.meritTitleText}>
                  アートとデザインの融合で、
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  他と、ちょっと差をつけます。
                </span>
              </>
            )}
            {isSm && (
              <>
                <span className={styles.meritTitleText}>
                  アートとデザイン
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  の融合で、
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  他と、ちょっと差を
                </span>
                <br />
                <span className={styles.meritTitleText}>
                  つけます。
                </span>
              </>
            )}
          </div>
          <p className={styles.meritText}>
            アートやイラストも、聴くと描くの得意分野です。
          </p>
          <p className={styles.meritText}>
            ロジカルに構築するとデザインと、感覚を重視するアート&イラスト。
            この異なる特性を持つ２つを、絶妙なバランスで融合させて、他にはない、唯一無二のクリエイティブを作り出します。
          </p>
          <div className={styles.artLinkBox}>
            <TextLink
              color={'#303030'}
              size={14}
              marginRight={0}
              text={'アート&イラストの紹介はこちら →'}
              onClick={() => router.push('/unou')}
            />
          </div>
        </div>
        <div className={styles.meritImage}>
          <Image
            src={MeritImage04}
            alt={'アートとデザインの融合で、他と、ちょっと差をつけます。'}
          />
        </div>
      </div>
    </>
  );
};

export default Merits;
