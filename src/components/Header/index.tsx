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
              <ul className={styles.subNavListsub}>
                <li className={styles.subNavItemsub}><Link className={styles.textno} href="#">ПОДАРОЧНЫЕ НАБОРЫ</Link>
                
                <ul className={styles.submenus}>
                  <li><Link className={styles.text} href="#">ВСЕ НАБОРЫ</Link></li>
                  <li><Link className={styles.text} href="#">КЛАССИЧЕСКИЕ</Link></li>
                </ul>
                
                </li>
                <li className={styles.subNavItem}><Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></li>
              </ul>
            </li>
            <li className={styles.navItems}><Link className={styles.text} href="#">СОБРАТЬ НАБОР</Link></li>
            <Link href="#"><li className={styles.logo}><Image src="/assets/icons/logo.png" alt="logo" width={124} height={124} /></li></Link>
            <li className={styles.navItemRights}><Link className={styles.text} href="#">СОЗДАТЬ ДИЗАЙН</Link></li>
            <li className={styles.navItemRight}>
              <ul className={styles.subNavListsub}>
                <li className={styles.subNavItemsub}><Link className={styles.textno} href="#">КОМПАНИЯМ</Link>
                
                <ul className={styles.submenus}>
                  <li><Link className={styles.text} href="#">ОПТОВЫЕ ПОСТАВКИ</Link></li>
                  <li><Link className={styles.text} href="#">КОРПОРАТИВНЫЕ ПОДАРКИ</Link></li>
                </ul>
                
                </li>
                <li className={styles.subNavItem}><Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></li>
              </ul>
            </li>
            <li className={styles.navItemRight}>
              <ul className={styles.subNavListsub}>
                <li className={styles.subNavItemsub}><Link className={styles.textno} href="#">ВЕСЬ КАТАЛОГ</Link>
                
                <ul className={styles.submenus}>
                  <li><Link className={styles.text} href="#">МАКАРОН</Link></li>
                  <li><Link className={styles.text} href="#">ЭКЛЕРЫ</Link></li>
                </ul>
                
                </li>
                <li className={styles.subNavItem}><Image src="/assets/icons/arrow.png" alt="arrow" width={8} height={5} /></li>
              </ul>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;