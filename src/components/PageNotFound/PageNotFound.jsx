import React from 'react';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound}>
      <h1 className={styles.header}>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данная страница отсутствует в нашем интернет-магазане
      </p>
    </div>
  );
};

export default PageNotFound;
