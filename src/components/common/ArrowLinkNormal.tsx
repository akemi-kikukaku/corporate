import styles from 'styles/modules/ArrowLinkNormal.module.scss';

interface Props {
  text: string;
  isWhite?: boolean;
  isHover?: boolean;
  onClick: () => void;
}

const ArrowLinkNormal: React.FC<Props> = (props) => {
  return (
    <div className={styles.arrowLinkBox}>
      <span
        onClick={() => props.onClick()}
        className={`${styles.text} ${
          props.isWhite && styles.isWhite
        } ${props.isHover && styles.isHover}`}
      >
        {props.text}
      </span>
    </div>
  );
};

export default ArrowLinkNormal;
