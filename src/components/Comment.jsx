import { Trash, ThumbsUp } from 'phosphor-react';
import React, { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar src='https://github.com/davidrock.png' hasBorder={false} />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>David Rock</strong>
                <time title='11 de Maio às 12:47' dateTime='2022-05-11'>
                  Publicado há 1h
                </time>
              </div>
              <button onClick={handleDeleteComment} title='Deletar comment'>
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
