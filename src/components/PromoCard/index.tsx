'use client';

import Image from 'next/image';
import styles from './PromoCard.module.scss';

export default function PromoCard() {
  return (
    <div className={styles.promocard}>

        <div>
            <Image src="/assets/images/promo/promo_01.svg" alt='promo' width={270} height={270}/>
        </div>

        <div className={styles.promotitle}>
            <h3>НОВИНКА</h3>
        </div>

        <div className={styles.promotext}>
            <p>Шоколадное пирожное картошка на основе бисквита!</p>
        </div>
    </div>
  );
}