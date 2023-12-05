import styles from 'styles/modules/PrimaryButton.module.scss';

interface Props {
  text: string;
  disabled?: boolean;
  onClick: (event?: Event) => void; // eslint-disable-line
}

const PrimaryButton: React.FC<Props> = (props) => {
  return (
    <button
      className={`${styles.button} ${
        props.disabled && styles.isDisabled
      }`}
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  );
};

export default PrimaryButton;
