import { useState, useCallback, ChangeEvent } from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import Icon from './common/Icon';
import SectionTitle from './common/SectionTitle';
import TextArea from './forms/TextArea';
import TextField from './forms/TextField';
import instaIcon from 'images/instagram.svg';
import styles from 'styles/modules/Contact.module.scss';

const Contact: React.VFC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

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
      console.log(email, name, title, body);
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

      const result = await res.json();
      console.log(result);
    },
    [email, name, title, body],
  );
  return (
    <div className={styles.contactWrap}>
      <SectionTitle title={'Contact'} side={'left'} />
      <div className={styles.contactContainer}>
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
          <PrimaryButton text={'Send'} onClick={sendMail} />
        </div>
        {false && (
          <div className={styles.message}>
            <Icon
              icon={instaIcon}
              alt={'インスタグラム'}
              width={30}
              marginRight={16}
            />
            送信完了しました。メッセージありがとうございました。
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
