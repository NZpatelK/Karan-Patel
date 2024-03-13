'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";


export default function Home() {

  const handleTurnPage = (page: any) => {

    const pageId = document.getElementById(page);

    if (pageId?.classList.contains(styles.turn)) {
      pageId?.classList.remove(styles.turn);
      setTimeout(() => {
        if (pageId) {
          pageId.style.zIndex = (20 - 1).toString();
        }
      }, 500);
    } else {
      pageId?.classList.add(styles.turn);
      setTimeout(() => {
        if (pageId) {
          pageId.style.zIndex = (20 + 1).toString();
        }
      }, 500);
    }
  }

  useEffect(() => {

    const pages = document.querySelectorAll(`.${styles["book-page"]}.${styles["page-right"]}`);
    const totalPage = pages.length;
    let currentPage = 0;

    const reversePage = () => {
      currentPage--;
      if (currentPage < 0) {
        currentPage = totalPage - 1;
      }
    };


    const coverRight = document.querySelector<HTMLElement>(`.${styles["cover-right"]}`);

    if (coverRight) {
      setTimeout(() => {
        coverRight.classList.add(styles["turn"]);
      }, 2100);

      setTimeout(() => {
        coverRight.style.zIndex = "-1";
      }, 2800);
    }

    pages.forEach((_, index) => {
      setTimeout(() => {
        reversePage();
        (pages[currentPage] as HTMLElement).classList.remove(styles["turn"]);

        setTimeout(() => {
          reversePage();
          (pages[currentPage] as HTMLElement).style.zIndex = (10 + index).toString();
        }, 500);
      }, (index + 1) * 200 + 2100);
    });
  }, []);


  return (
    <main>
      <div className={styles.wrapper}>
        <div className={[styles.cover, styles["cover-left"]].join(" ")}></div>
        <div className={[styles.cover, styles["cover-right"]].join(" ")}></div>

        <div className={styles.book}>
          <div className={[styles["book-page"], styles["page-left"]].join(" ")}>
            <div className={styles["profile-page"]}>
              <h1 style={{ color: "#000" }}>Hsssello</h1>
            </div>
          </div>

          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={`turn-${index}`}
              className={[styles["book-page"], styles["page-right"], styles["turn"]].join(" ")}
              id={`turn-${index}`}>

              {/* Front page */}

              <div className={styles["page-front"]}>
                <div className={styles["profile-page"]}>
                  <h1 style={{ color: "#000" }}>page{index}</h1>
                </div>
                <span className={styles["number-page"]} style={{ color: "#000", fontSize: "10px" }}>{index}</span>
                <span className={styles["nextprev-btn"]} data-page={`turn-${index}`} onClick={(event) => handleTurnPage(`turn-${index}`)}>
                  next
                </span>

                {/* <span className={[styles["nextprev-btn"], styles["back"]].join(" ")} data-page="turn-2" onClick={(event) => handleTurnPage("turn-1")}>
                  next
                </span> */}
              </div>

              {/* Back page */}

              <div className={styles["page-back"]}>
                <h1 style={{ color: "#000" }}>page{index+1}</h1>
                <span className={styles["number-page"]} style={{ color: "#000", fontSize: "10px" }}>{index}</span>
                {/* <span className={[styles["nextprev-btn"], styles["back"]].join(" ")} data-page="turn-2">
                  next
                </span> */}
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
