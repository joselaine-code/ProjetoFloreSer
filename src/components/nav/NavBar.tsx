import Link from "next/link";
import { useState, useEffect } from "react";

import styles from "../../styles/components/nav/NavBar.module.css";
import stylesMob from "../../styles/components/nav/NavMob.module.css";

function NavBar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [pathName, setPathName] = useState<string>("/");
  const [width, setWidth] = useState<number>();

  // Getting width from window
  if (typeof window !== "undefined") {
    useEffect(() => {
      setShowNav(false);
      setPathName(window.location.pathname);
      setWidth(window.innerWidth);

      function handleResize(): void {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [window.location.pathname !== pathName]);
  }

  function handleClickShowNav(event): void {
    setShowNav(!showNav);
  }

  return (
    <>
      {/* Desktop */}
      {width > 721 ? (
        <header className={styles.navBarContainer}>
          <div className={styles.navBarIcon}>
            <Link href="/">
              <a>
                <img src="/img/icon.png" alt="Flor e Ser" />
              </a>
            </Link>
          </div>

          <nav className={styles.navBar}>
            <ul>
              <li>
                <Link href="/">
                  <a className={pathName == "/" ? styles.active : ""}>Início</a>
                </Link>
              </li>
              <li>
                <Link href="/quiz">
                  <a className={pathName == "/quiz" ? styles.active : ""}>
                    Questionário
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contrib">
                  <a className={pathName == "/contrib" ? styles.active : ""}>
                    Contribua
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        // Mobile
        <header className={stylesMob.navMobContainer}>
          <div className={stylesMob.navMobIcon}>
            <Link href="/">
              <a>
                <img src="/img/icon.png" alt="Flor e Ser" />
              </a>
            </Link>
          </div>

          <div className={stylesMob.navMob}>
            <a
              onClick={handleClickShowNav}
              className={stylesMob.navDisplay}
              aria-expanded={showNav}
            >
              <div
                onClick={handleClickShowNav}
                className={`${stylesMob.navMobBottom}
                  ${showNav && stylesMob.active}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>

            {showNav && (
              <nav>
                <ul>
                  <li>
                    <Link href="/">
                      <a className={pathName == "/" ? styles.active : ""}>
                        Início
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quiz">
                      <a className={pathName == "/quiz" ? styles.active : ""}>
                        Questionário
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contrib">
                      <a
                        className={pathName == "/contrib" ? styles.active : ""}
                      >
                        Contribua
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </header>
      )}
    </>
  );
}

export default NavBar;
