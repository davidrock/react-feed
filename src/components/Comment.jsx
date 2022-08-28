import { Trash, ThumbsUp } from 'phosphor-react';
import React from 'react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <>
      <div className={styles.comment}>
        <img
          src='https://github.com/davidrock.png'
          alt='Imagem do usuário '
          srcset=''
        />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>David Rock</strong>
                <time title='11 de Maio às 12:47' dateTime='2022-05-11'>
                  Publicado há 1h
                </time>
              </div>
              <button title='Deletar comment'>
                <Trash size={20} />
              </button>
            </header>

            <p>Muito massa, parabéns!</p>
          </div>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
