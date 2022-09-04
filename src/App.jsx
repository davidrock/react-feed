import { Post } from './components/Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/davidrock.png',
      name: 'David Rock',
      role: 'Frontend Engineer - FARFETCH',
    },
    content: [
      { type: '', content: 'Fala galeraa 👋' },
      {
        type: '',
        content:
          'Acabei de subir mais um projeto no meu portifa! É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/davidrock.png',
      name: 'Bruno Batiani',
      role: 'Frontend Engineer - IDERIS',
    },
    content: [
      { type: '', content: 'Fala galeraa 👋' },
      {
        type: '',
        content:
          'Acabei de subir mais um projeto no meu portifa! É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-3 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((p) => {
            return (
              <Post
                author={p.author}
                content={p.content}
                publishedAt={p.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
