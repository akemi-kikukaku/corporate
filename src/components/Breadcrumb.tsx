import { useRouter } from 'next/dist/client/router';
import styles from 'styles/modules/Breadcrumb.module.scss';

interface Props {
  items: { name: string; path: string }[];
}

const Breadcrumb: React.FC<Props> = ({ items }) => {
  const router = useRouter();
  const lastItemIndex = items.length;
  return (
    <section>
      <ul className={styles.breadcrumbWrap}>
        {items.map((item, i) => (
          <li
            className={`${styles.item} ${
              lastItemIndex === i + 1 && styles.disabled
            }`}
            key={i}
            onClick={() => router.push(item.path)}
          >
            {item.name}
            {lastItemIndex !== i + 1 && (
              <span className={styles.arrow}>＞</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Breadcrumb;
