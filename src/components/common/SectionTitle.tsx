import { useInView } from 'react-intersection-observer';
import styles from 'styles/modules/SectionTitle.module.scss';

interface Props {
  title: string;
  side?: string;
  subTitle?: string;
}

const SectionTitle: React.FC<Props> = (props) => {
  const isCenter = props.side === 'center';
  const isLeft = props.side === 'left';

  const [titleRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });
  return (
    <div className={styles.titleWrap}>
      <h2
        ref={titleRef}
        className={`${styles.title} ${isLeft && styles.left} ${
          isCenter && styles.center
        } ${inView && styles.inView}`}
      >
        {props.title}
      </h2>
      {props.subTitle && (
        <div
          className={`${styles.subTitleWrap} ${
            isLeft && styles.left
          } ${inView && styles.inView}`}
        >
          <span className={styles.subTitle}>{props.subTitle}</span>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
