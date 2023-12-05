import {
  useState,
  useCallback,
  ChangeEvent,
  useContext,
} from 'react';
import { useInView } from 'react-intersection-observer';
import PrimaryButton from './buttons/PrimaryButton';
import Icon from './common/Icon';
import SectionTitle from './common/SectionTitle';
import TextArea from './forms/TextArea';
import TextField from './forms/TextField';
import check from 'images/check-circle.svg';
import { ContextData } from 'pages/BaseProvider';
import styles from 'styles/modules/Contact.module.scss';

const Contact: React.FC = () => {
  const ctx = useContext(ContextData);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);

  const reg =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  const isValidEmail = reg.test(email);
  const isInvalidData =
    !isValidEmail ||
    email === '' ||
    name === '' ||
    title === '' ||
    body === '';

  const inputEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );
  const inputName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [],
  );
  const inputTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [],
  );
  const inputBody = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setBody(event.target.value);
    },
    [],
  );

  const sendMail = useCallback(
    async (event?: Event) => {
      if (event) {
        event.preventDefault();
      }
      const res = await fetch('/api/send', {
        body: JSON.stringify({
          email: email,
          name: name,
          title: title,
          message: body,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const result: { statusCode: number } = await res.json();
      const isSuccessSend = result.statusCode === 200;
      setIsSuccess(isSuccessSend);
      if (isSuccessSend) {
        setEmail('');
        setName('');
        setTitle('');
        setBody('');
      }
    },
    [email, name, title, body],
  );

  const [formRef, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });
  return (
    <div className='sectionWrapper'>
      <div
        className={`${styles.contactWrap} ${
          ctx.isSanou && styles.isSanou
        } sectionWrapper`}
      >
        <SectionTitle title={'Contact'} side={'left'} />
        <section
          ref={formRef}
          className={`${styles.contactContainer} ${
            inView && styles.inView
          }`}
        >
          <div className={styles.contents}>
            <div className={styles.itemBox}>
              <div className={styles.item}>
                <TextField
                  label={'メールアドレス'}
                  value={email}
                  onChange={inputEmail}
                />
              </div>
              <div className={styles.item}>
                <TextField
                  label={'貴社名・お名前'}
                  value={name}
                  onChange={inputName}
                />
              </div>
              <div className={styles.item}>
                <TextField
                  label={'タイトル'}
                  value={title}
                  onChange={inputTitle}
                />
              </div>
            </div>
            <div className={styles.itemBox}>
              <TextArea
                label={'お問い合わせ内容'}
                value={body}
                onChange={inputBody}
              />
            </div>
          </div>
          <div className={styles.controller}>
            <PrimaryButton
              text={'Send'}
              disabled={isInvalidData}
              onClick={sendMail}
            />
          </div>
          <div
            className={`${styles.message} ${
              isSuccess && styles.isSuccess
            }`}
          >
            <span className={styles.messageIcon}>
              <Icon
                icon={check}
                alt={'チェックアイコン'}
                width={30}
                marginRight={16}
              />
            </span>
            <span className={styles.messageText}>
              送信完了しました。お問合せありがとうございました。
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
