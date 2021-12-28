import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Physics Equations</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Phyiscs Equations</h1>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Mechanics &rarr;</h3>
            <p>
              Kinematics, Newton's Laws, Work, Energy, Power, Rotational
              Dynamics...
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>E&apm;M &rarr;</h3>
            <p>Electrostatics, Circuits, Fields, Electromagnetism...</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Modern &rarr;</h3>
            <p>Quantum Mechanics, Special Relativity, General Relativity...</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://stackblitz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'Stackblitz'}
        </a>
      </footer>
    </div>
  );
}
