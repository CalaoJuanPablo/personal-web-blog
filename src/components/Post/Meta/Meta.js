import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

const Meta = ({ date }) => {
  const metaOptionsForDate = {
    month: 'long',
    day: 'numeric',
    year: "numeric"
  }
  return (
    <div className={styles['meta']}>
      <p className={styles['meta__date']}>Publicado {new Date(date).toLocaleDateString("es", metaOptionsForDate)}</p>
    </div>
  );
}

export default Meta;
