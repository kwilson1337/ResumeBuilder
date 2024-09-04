import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>      
      <div className={styles.home}>
        <div className={styles.home__inner}>
          <div className={styles.home__callout}>
            <h1>Build your Resume today!</h1>
            <a href="#" className="button --grad">Click here to get started</a>
          </div>
        </div>
      </div>
    </main>
  );
}
