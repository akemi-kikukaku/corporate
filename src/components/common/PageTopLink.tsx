import React, { useEffect, useState } from 'react';
import styles from 'styles/modules/PageTopLink.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

const PageTopLink: React.FC<Props> = (props) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const scrollWindow = () => {
    const top = 200;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);
  return (
    <div
      className={`${styles.linkWrap} ${
        isButtonActive && styles.isActive
      }`}
    >
      <div className={styles.arrowLinkBox}>
        <span onClick={() => returnTop()} className={styles.text}>
          {props.text}
        </span>
      </div>
    </div>
  );
};

export default PageTopLink;
