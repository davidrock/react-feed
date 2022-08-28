import { Post } from './components/Post';
import { Header } from './components/Header';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='David'
            content='Lorem ipsum dolor sit amet consectur adasdasd elit. Assumeda odio aliquand voluatat recuadae'
          />
          <Post
            author='David'
            content='Lorem ipsum dolor sit amet consectur adasdasd elit. Assumeda odio aliquand voluatat recuadae'
          />
        </main>
      </div>
    </>
  );
}
