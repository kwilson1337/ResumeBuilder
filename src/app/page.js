import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>      
      <div className={styles.home}>
        <div className={styles.home__inner}>
          <div className={styles.home__callout}>
            <h1>Build your Resume today!</h1>
            <a href="#" className="button --grad">Click here to get started</a>

            PDF options
            <ul>
              <li>https://www.npmjs.com/package/dom2pdf?activeTab=readme</li>
              <li>https://www.reddit.com/r/node/comments/111ufgd/comment/j8lopr2/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button</li>
            </ul>

            drag n drop
            <p>https://dndkit.com/</p>
            <p>https://github.com/hello-pangea/dnd</p>
          </div>
        </div>
      </div>
    </main>
  );
}
