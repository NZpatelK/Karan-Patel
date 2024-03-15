'use client';
import styles from "./page.module.css";
import { useEffect } from "react";
import Profile from "./components/Profile";
import Contents from "./components/Contents";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";

export default function Home() {

  const handleSelectContent = ((pageId: number) => {
    const pages = document.querySelectorAll(`.${styles["book-page"]}.${styles["page-right"]}`);
    pages.forEach((page: any, index: number) => {
      setTimeout(() => {
        if (index <= pageId) {
          page.classList.add(styles.turn);
          setTimeout(() => {
            page.style.zIndex = (20 + 1).toString();
          }, 500);
        }
      }, (index + 1) * 200 + 100);
    })

  })

  const handleTurnPage = (page: string) => {

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

  const pageSection = [
    { frontPage: <Contents key="contents" id="turn-1" selectPage={handleSelectContent} turnPage={handleTurnPage} />, backPage: <AboutMe key="aboutMe" id="turn-1" turnPage={handleTurnPage} /> },
    { frontPage: <Skills key="skills" id="turn-2" turnPage={handleTurnPage} />, backPage: <Services key="services" /> },
    { frontPage: <Projects key="projects" />, backPage: <ContactUs key="contactUs" /> }
  ]


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


  return (
    <main>
      <div className={styles.wrapper}>
        <div className={[styles.cover, styles["cover-left"]].join(" ")}></div>
        <div className={[styles.cover, styles["cover-right"]].join(" ")}></div>

        <div className={styles.book}>
          <div className={[styles["book-page"], styles["page-left"]].join(" ")}>
            <Profile />
          </div>


          {pageSection.map((page, index) => {
            return (
              <div
                key={index + 1}
                id={`turn-${index + 1}`}
                className={[styles["book-page"], styles["page-right"], styles["turn"]].join(" ")}>
                <div className={styles["page-front"]}>
                  {page.frontPage}
                </div>``
                <div className={styles["page-back"]}>
                  {page.backPage}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </main>
  );
}
