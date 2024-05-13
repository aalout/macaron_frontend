import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';

export default function ProductCard() {
    return (
        <div className={styles.productCard}>
        <Link href="#"><div className={styles.image_con}>
            <Image
              src="/assets/images/product_card/product_01.svg"
              alt='product'
              height={300}
              width={370}
              className={styles.productImage}
            />
          </div></Link>
          <Link href="#"><div className={styles.textBlock}>
          <h3>Красота спасёт мир</h3>
          <p>Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан</p>
        </div></Link>
        <div className={styles.priceAndCart}>
          <p className={styles.price}>750 руб</p>
          <Link href="#" className={styles.cartLink}>
            <Image
              width={24}
              height={24}
              src="/assets/icons/bag.png"
              alt="phone"
              className={styles.cartIcon}
            />
            <p>В корзину</p>
          </Link>
        </div>
      </div>
  );
}
