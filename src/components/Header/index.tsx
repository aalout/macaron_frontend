'use client';

import Image from 'next/image';
import Link from 'next/link';

import HeaderMenu from '../HeaderMenu';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.upperHeader}>
          <HeaderMenu />
        </div>
      </div>
      <nav className={styles.lowerHeader}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <ul className={styles.subNavList}>
                <li className={styles.subNavItem}><Link className={styles.text} href="#">СЛАДКИЕ ДНИ</Link></li>
                <li className={styles.subNavItem}><Image src="/assets/icons/discount.png" alt="discount" width={24} height={24} /></li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <ul className={styles.subNavList}>
                <li className={styles.subNavItem}><Link className={styles.text} href="#">ПОДАРОЧНЫЕ НАБОРЫ</Link></li>
                <li className={styles.subNavItem}><Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></li>
              </ul>
            </li>
            <li className={styles.navItem}><Link className={styles.text} href="#">СОБРАТЬ НАБОР</Link></li>
            <li className={styles.logo}><Image src="/assets/icons/logo.png" alt="logo" width={124} height={124} /></li>
            <li className={styles.navItemRight}><Link className={styles.text} href="#">СОЗДАТЬ ДИЗАЙН</Link></li>
            <li className={styles.navItemRight}>
              <ul className={styles.subNavList}>
                <li className={styles.subNavItem}><Link className={styles.text} href="#">КОМПАНИЯМ</Link></li>
                <li className={styles.subNavItem}><Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></li>
              </ul>
            </li>
            <li className={styles.navItemRight}>
              <ul className={styles.subNavList}>
                <li className={styles.subNavItem}><Link className={styles.text} href="#">ВЕСЬ КАТАЛОГ</Link></li>
                <li className={styles.subNavItem}><Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></li>
              </ul>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;