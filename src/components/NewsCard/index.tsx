'use client';

import Image from 'next/image';
import styles from './NewsCard.module.scss'
import Link from 'next/link';

export default function NewsCard() {
  return (
    <div className={styles.newscard}><Link href="#">
        
        <div>
            <Image className={styles.NewsImage} src="/assets/images/news/01.svg" alt='news' width={370} height={210}/>
        </div>

        <div className={styles.content}>
        <div className={styles.newsdate}>
            <p>25.02.2023</p>
        </div>

        <div className={styles.newstitle}>
            <h3>Скоро главный праздник весны!</h3>
        </div>

        <div className={styles.newstext}>
            <p>Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
        </div>
        </div>
        </Link>
    </div>
  );
}