import React from 'react';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          alt=''
        />

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/19226926?s=400&u=186d97774a4b53f77c54a2ff8f59b215c805155a&v=4'
            alt=''
          />

          <strong>David Almeida</strong>
          <span>Software Architect</span>
        </div>

        <footer>
          <a href='#'>
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
