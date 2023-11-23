import { useCallback, useEffect, useRef } from 'react';
import { WorkCategories } from 'models';
import styles from 'styles/modules/Menu.module.scss';

interface Props {
  selectedItem: string;
  items: Readonly<WorkCategories[]>;
  onClick: (category: string) => void; // eslint-disable-line
}

const Menu: React.FC<Props> = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    const target = document.getElementById('menuBox');
    let items = document.querySelectorAll('.menuItem');
    const arrItem: HTMLElement[] = [].slice.call(items);
    const widths: number[] = arrItem.map((item) => item.clientWidth);
    const itemLength = widths.length;
    const totalWidth = widths.reduce((acc: number, val: number) => {
      return acc + val;
    });
    if (target) {
      target.style.width = `${totalWidth + (40 * itemLength - 1)}px`;
    }
  });
  return (
    <ul ref={ref} id='menuBox' className={styles.itemBox}>
      {props.items.map((item, index) => (
        <ItemBlock
          name={item.name}
          type={item.type}
          selectedItem={props.selectedItem}
          key={index}
          onClick={props.onClick}
        />
      ))}
    </ul>
  );
};

export default Menu;

type ItemBlockProps = {
  name: string;
  type: string;
  selectedItem: string;
  onClick: (type: string) => void // eslint-disable-line
}
const ItemBlock: React.FC<ItemBlockProps> = ({
  name,
  type,
  selectedItem,
  onClick
}) => {
  const handleClick = useCallback(() => {
    onClick(type);
  }, [onClick, type]);
  return (
    <li
      className={`${styles.item} menuItem ${
        type === selectedItem && styles.isActive
      }`}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};
