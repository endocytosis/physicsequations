import Head from 'next/head';
import styles from '../styles/Home.module.css';

function Gravity() {
  return (
    <div className={styles.container}>
      <div>Gravity</div>;
      <p>
        Newton's Universal Law of Graviation is:
        <img src="img/newtongravity.svg" />
      </p>
    </div>
  );
}

export default Gravity;
