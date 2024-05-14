"use client"

import React, { useState } from 'react';
import styles from './News.module.scss';
import NewsCard from '../NewsCard';

const News = () => {
  const newsCards = Array(6).fill(<NewsCard />);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < newsCards.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const dots = Array(newsCards.length - 3).fill(0);

  return (
    <div>
      <div className={styles.news_con_title}>
        <h1>Новости</h1>
      </div>
      <div className={styles.newsCon}>
        <div className={styles.news}>
          {newsCards.slice(currentIndex, currentIndex + 3)}
        </div>
        <div className={styles.arrows}>
          <button onClick={handlePrev} disabled={currentIndex === 0}>&lt;</button>
          <button onClick={handleNext} disabled={currentIndex === newsCards.length - 4}>&gt;</button>
        </div>
        <div className={styles.indicator}>
          {dots.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.button_con}>
        <button className={styles.button}>Все новости</button>
      </div>
    </div>
  );
};

export default News;