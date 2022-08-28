import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post(props) {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src='https://avatars.githubusercontent.com/u/19226926?v=4'
              alt='avatar'
            />
            <div className={styles.authorInfo}>
              <strong>David Rock</strong>
              <span>Software Architect</span>
            </div>
          </div>

          <time title='11 de Maio às 12:47' dateTime='2022-05-11'>
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>
            Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
            projeto que fiz no NLW Return, evento da Rocketseat. O nome do
            projeto é DoctorCare 🚀
          </p>
          <p>
            👉 <a href=''> jane.design/doctorcare</a>
          </p>
          <p>
            <a href=''> #novoprojeto</a> <a href=''> #nlw</a>{' '}
            <a href=''> #rocketseat</a>{' '}
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Deixe um comentário'></textarea>
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment></Comment>
        </div>
      </article>
    </>
  );
}
