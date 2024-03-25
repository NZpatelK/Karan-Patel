'use client';
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import Profile from "./components/Profile";
import Contents from "./components/Contents";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import FrontEndSkils from "./components/Mobile/FrontEndSkills";
import BackEndSkils from "./components/Mobile/BackEndSkills";
import OthersSkills from "./components/Mobile/OthersSkills";


export default function Home() {

  const [isMobile, setIsMobile] = useState(true);
  const [isLandscape, setIsLandscape] = useState(true);
  const[[minHeight, minWidth], setScreenSize] = useState([0, 0]);




  useEffect(() => {
    const checkScreenSize = () => {
      const screemSize = (window.innerWidth <= 880 || window.innerHeight <= 625)
      setIsMobile(screemSize);

      if (window.innerWidth <= 1180 || window.innerHeight <= 750) {
        setIsLandscape(window.innerWidth > window.innerHeight);
        setScreenSize([window.innerHeight, window.innerWidth]);
      }
      else {
        setIsLandscape(true);
      }
    };


    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 0);

    checkScreenSize(); // Check initial screen size

    window.addEventListener('resize', checkScreenSize); // Update on resize

    return () => window.removeEventListener('resize', checkScreenSize); // Clean up event listener
  }, []);

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

  const handleTurnPage = (page: string, index: number) => {

    const pageId = document.getElementById(page);

    if (pageId?.classList.contains(styles.turn)) {
      pageId?.classList.remove(styles.turn);
      setTimeout(() => {
        if (pageId) {
          pageId.style.zIndex = (20 - index).toString();
        }
      }, 500);
    } else {
      pageId?.classList.add(styles.turn);
      setTimeout(() => {
        if (pageId) {
          pageId.style.zIndex = (20 + index).toString();
        }
      }, 500);
    }
  }

  const pageSection = [
    { frontPage: <Contents key="contents" selectPage={handleSelectContent} isMobile={isMobile} />, backPage: <AboutMe key="aboutMe" /> },
    { frontPage: <Skills key="skills" />, backPage: <Services key="services" /> },
    { frontPage: <Projects key="projects" />, backPage: <ContactUs key="contactUs" /> }
  ]
  const mobilePageSection = [
    { frontPage: <Contents key="contents" selectPage={handleSelectContent} isMobile={isMobile} />, backPage: <AboutMe key="aboutMe" /> },
    { frontPage: <FrontEndSkils key="skills" />, backPage: <BackEndSkils key="Backend" /> },
    { frontPage: <OthersSkills key="otherSKills" />, backPage: <Services key="services" /> },
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
        }, (isMobile ? 600 : 500));
      }, (index + 1) * 200 + 2100);
    });
  }, []);


  return (
    <main>

      {!isLandscape && <div className={styles["rotate-device"]}>
        <h1>Please rotate your device to landscape mode</h1>
      </div>}

      <div className={[styles.wrapper, !isLandscape && styles.blur].join(" ")} style={isLandscape ? {width: minWidth, height: minHeight} : {}} >
        <div className={[styles.cover, styles["cover-left"]].join(" ")}></div>
        <div className={[styles.cover, styles["cover-right"]].join(" ")}></div>

        <div className={styles.book}>
          <div className={[styles["book-page"], styles["page-left"]].join(" ")}>
            <Profile />
          </div>


          {(isMobile ? mobilePageSection : pageSection).map((page, index) => {
            const pageId = `turn-${index + 1}`;
            return (
              <div
                key={index + 1}
                id={pageId}
                className={[styles["book-page"], styles["page-right"], styles["turn"]].join(" ")}>
                <div className={styles["page-front"]}>
                  {page.frontPage}
                  <FontAwesomeIcon className='next page-btn' icon={faCaretRight} onClick={() => { handleTurnPage(pageId, index) }} />
                </div>
                <div className={styles["page-back"]}>
                  {page.backPage}
                  <FontAwesomeIcon className='prev page-btn' icon={faCaretRight} onClick={() => { handleTurnPage(pageId, index + 1) }} />
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </main>
  );
}