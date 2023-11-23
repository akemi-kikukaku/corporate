import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useCallback, useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import ArrowLink from './common/ArrowLink';
import Icon from './common/Icon';
import TextLink from './common/TextLink';
import facebookIcon from 'images/facebook.svg';
import instaIcon from 'images/instagram.svg';
import logoBase from 'images/kikutokaku_logo.svg';
import logoUnou from 'images/logo_unou.svg';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/Header.module.scss';

const Header: React.FC = () => {
  const router = useRouter();
  const ctx = useContext(ContextData);

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isShowMiniMenu, setIsShowMiniMenu] = useState(false);

  const isTop = !ctx.isSanou && !ctx.isUnou;

  const goToHome = () => {
    if (isTop) {
      router.push('/');
    } else if (ctx.isSanou) {
      router.push('/sanou');
    } else if (ctx.isUnou) {
      router.push('/unou');
    }
  };

  const openSideBar = useCallback(() => {
    setIsOpenSidebar(true);
    const target = document.querySelector('html body');
    target?.classList.add('openSidebar');
  }, []);

  const closeSideBar = useCallback(() => {
    setIsOpenSidebar(false);
    const target = document.querySelector('html body');
    target?.classList.remove('openSidebar');
  }, []);

  const clickHeaderMenu = (target: string) => {
    const isTopHierarchy = router.pathname.split('/').length === 2;
    if (isTopHierarchy) {
      ctx.setContextDate((prevState) => ({
        ...prevState,
        target: target,
      }));
      window.history.replaceState(null, '', router.pathname);
    } else {
      router.push({
        pathname: '/unou',
        query: { target: target },
      });
    }
  };

  const goOtherPage = () => {
    ctx.setContextDate((prevState) => ({
      ...prevState,
      target: '',
    }));
    router.push('/sanou');
  };

  useEffect(() => {
    if ((ctx.width <= 1024 && ctx.isUnou) || ctx.isSanou) {
      setIsShowMiniMenu(true);
    } else {
      setIsShowMiniMenu(false);
    }
  }, [ctx.width, ctx.isUnou, ctx.isSanou]);

  return (
    <header
      className={`${styles.header} ${
        ctx.isSanou && styles.headerSanou
      }`}
    >
      <div
        className={`${styles.headerWrap} ${
          ctx.isSanou && styles.headerWrapSanou
        }`}
      >
        <div className={styles.logo} onClick={goToHome}>
          <Image src={ctx.isUnou ? logoUnou : logoBase} alt='ロゴ' />
        </div>
        {ctx.isUnou && ctx.width > 1024 && (
          <div className={styles.controllers}>
            <TextLink
              text={'News'}
              onClick={() => clickHeaderMenu('news')}
            />
            <TextLink
              text={'Portfolio'}
              onClick={() => clickHeaderMenu('portfolio')}
            />
            <TextLink
              text={'Contact'}
              onClick={() => clickHeaderMenu('contact')}
            />
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
              marginRight={24}
              href={'https://www.facebook.com/kokubo.akemi'}
            />
            {}
            <div className={styles.goAnotherPageLink}>
              <ArrowLink
                text={'左脳 - Design'}
                onClick={goOtherPage}
              />
            </div>
          </div>
        )}
        {isShowMiniMenu && (
          <div
            className={styles.menuBox}
            onClick={() => openSideBar()}
          >
            <span className={`${styles.bar} ${styles.barTop}`} />
            <span className={`${styles.bar} ${styles.barMiddle}`} />
            <span className={`${styles.bar} ${styles.barBottom}`} />
          </div>
        )}
      </div>
      <Sidebar isOpen={isOpenSidebar} close={() => closeSideBar()} />
    </header>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Header;
