import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.wrapper}>
        <div className={[styles.cover, styles["cover-left"]].join(" ")}></div>
        <div className={[styles.cover, styles["cover-right"], styles.turn].join(" ")}></div>

        <div className="book">
          <div className="book-page page-left">
            <div className="profile-page">
            <h1>Hsssello</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
