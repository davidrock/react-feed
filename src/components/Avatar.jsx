import classNames from 'classnames';
import React from 'react';
import styles from './Avatar.module.css';

export function Avatar({ src, hasBorder = true }) {
  return (
    <>
      <img
        className={classNames(styles.avatar, {
          [styles.border]: hasBorder,
        })}
        src={src}
      />
    </>
  );
}
