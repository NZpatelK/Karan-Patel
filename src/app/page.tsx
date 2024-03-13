'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Profile from "./components/Profile";
import { Content } from "next/font/google";
import Contents from "./components/Contents";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";


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

    console.log("total page: ", totalPage);

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

  // const numPages = 7; // Number of pages

  // const renderPages = () => {
  //   const pages = [];
  //   for (let i = 0; i < numPages; i++) {
  //     pages.push(
  //       <div
  //         key={`turn-${i + 2}`}
  //         className={[styles["book-page"], styles["page-right"], styles["turn"]].join(" ")}
  //         id={`turn-${i + 2}`}
  //       >
  //         <div className={styles["page-front"]}>
  //           <h1></h1>
  //         </div>
  //         <div className={styles["page-back"]}>
  //           <h1>World</h1>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return pages;
  // };


  return (
    <main>
      <div className={styles.wrapper}>
        <div className={[styles.cover, styles["cover-left"]].join(" ")}></div>
        <div className={[styles.cover, styles["cover-right"]].join(" ")}></div>

        <div className={styles.book}>
          <div className={[styles["book-page"], styles["page-left"]].join(" ")}>
            {/* <Profile/> */}
            {/* <Contents/> */}
            {/* <AboutMe /> */}
            {/* <Skills /> */}
            {/* <Services/> */}
            <Projects/>
          </div>

          {/* {renderPages()} */}

          {/* Loop to render the rest of the pages */}
          {Array.from({ length: 3 }).map((_, index) => (
            console.log(index),
            <div
              key={`turn-${index + 2}`}
              className={[styles["book-page"], styles["page-right"], styles["turn"]].join(" ")}
              id={`turn-${index + 2}`}>
              <div className={styles["page-front"]}>
                <h1></h1>
              </div>
              <div className={styles["page-back"]}>
                <h1>World</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
