import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content }) {
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const comments = [1, 2, 3];

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateRelativeToNow}
            dateTime={publishedAt.toISOString()}>
            {publishedDateFormatted}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>;
            } else if (line.type === 'link') {
              return (
                <p>
                  <a href=''>{line.content}</a>
                </p>
              );
            }
          })}
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
          {comments.map((c) => {
            return <Comment />;
          })}
        </div>
      </article>
    </>
  );
}
