'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Product.module.scss';
import ProductCard from '../ProductCard';

export default function Product() {
  return (
    <div>
        <div className={styles.product_con_title}>
            <h1>Популярные наборы</h1>
        </div>

        <div className={styles.productCon}>
            <div className={styles.product}>
                {Array.from({ length: 6 }, (_, i) => (
                  <ProductCard key={i} />
                ))}
            </div>
            <button className={styles.button}>Все праздничные наборы</button>
        </div>
    </div>
  );
}