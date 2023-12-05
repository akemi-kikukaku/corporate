import styles from 'styles/modules/ArrowLink.module.scss';

interface Props {
  text: string;
  isWhite?: boolean;
  size?: number;
  onClick: () => void;
}

const ArrowLink: React.FC<Props> = (props) => {
  return (
    <div className={styles.arrowLinkBox}>
      <span
        onClick={() => props.onClick()}
        className={`${styles.text} ${
          props.isWhite && styles.isWhite
        }`}
        style={{ fontSize: `${props.size}px` }}
      >
        {props.text}
      </span>
    </div>
  );
};

export default ArrowLink;
