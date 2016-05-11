import React from 'react';

import styles from './Message.scss';

export default function ({message, onChange}) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        {message}
      </div>
      <input type="text" onChange={onChange}/>
    </div>
  );
}
