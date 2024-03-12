import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const handle = (page: any) =>{

    const pageId = document.getElementById(page);

    if (pageId?.classList.contains(styles.turn)) {
      pageId?.classList.remove(styles.turn);
    }
    else {
      pageId?.classList.add(styles.turn);
    }


  }
  return (
    <main>
      <div className={styles.wrapper}>
        <div className={[styles.cover, styles["cover-left"]].join(" ")}></div>
        <div className={[styles.cover, styles["cover-right"], styles.turn].join(" ")}></div>

        <div className={styles.book}>
          <div className={[styles["book-page"], styles["page-left"]].join(" ")}>
            <div className={styles["profile-page"]}>
              <h1 style={{ color: "#000" }}>Hsssello</h1>
            </div>
          </div>

          {/* page 1 & 2 */}

          <div className={[styles["book-page"], styles["page-right"], styles["turn"]].join(" ")} id="turn-1">
            <div className={styles["page-front"]}>
              <div className={styles["profile-page"]}>
                <h1 style={{ color: "#000" }}>page2</h1>
              </div>
              <span className={styles["number-page"]} style={{ color: "#000", fontSize: "10px" }}>1</span>
              <span className={styles["nextprev-btn"]} data-page="turn-1">
                next
              </span>
            </div>
            <div className={styles["page-back"]}>
              <h1 style={{ color: "#000" }}>page3</h1>
              <span className={styles["number-page"]} style={{ color: "#000", fontSize: "10px" }}>2</span>
              <span className={[styles["nextprev-btn"], styles["back"]].join(" ")} data-page="turn-1">
                next
              </span>
            </div>
          </div>

          {/* page 3 & 4 */}

          <div className={[styles["book-page"], styles["page-right"]].join(" ")} id="turn-2">
            <div className={styles["page-front"]}>
              <div className={styles["profile-page"]}>
                <h1 style={{ color: "#000" }}>page4</h1>
              </div>
              <span className={styles["number-page"]} style={{ color: "#000", fontSize: "10px" }}>1</span>
              <span className={styles["nextprev-btn"]} data-page="turn-1">
                next
              </span>
            </div>
            <div className={styles["page-back"]}>
              <h1 style={{ color: "#000" }}>page5</h1>
              <span className={styles["number-page"]} style={{ color: "#000", fontSize: "10px" }}>2</span>
              <span className={[styles["nextprev-btn"], styles["back"]].join(" ")} data-page="turn-1">
                next
              </span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
