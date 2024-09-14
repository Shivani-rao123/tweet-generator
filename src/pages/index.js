import TweetGenerator from '../components/TweetGenerator';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>AI Tweet Generator</h1>
        <TweetGenerator />
      </main>
    </div>
  );
}