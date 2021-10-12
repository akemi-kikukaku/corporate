import { useInView } from 'react-intersection-observer';
import styles from 'styles/modules/SectionTitleVertical.module.scss';

interface Props {
  title: string;
  side?: string;
  subTitle?: string;
  isWhite?: boolean;
  isHightMargin?: boolean;
}

const SectionTitleVertical: React.VFC<Props> = (props) => {
  const [titleRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });
  return (
    <div
      className={`${styles.titleWrap} ${
        props.isWhite && styles.white
      } ${inView && styles.inView}`}
    >
      <h2
        ref={titleRef}
        className={`${styles.title} ${inView && styles.inView} ${
          props.isHightMargin && styles.hightMargin
        }`}
      >
        {props.title}
      </h2>
      {props.subTitle && (
        <div className={styles.subTitleWrap}>
          <span className={styles.subTitle}>{props.subTitle}</span>
        </div>
      )}
    </div>
  );
};

export default SectionTitleVertical;
