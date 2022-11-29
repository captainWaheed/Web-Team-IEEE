import { useEffect } from "react";
import styles from "./Hero1.module.css";

const Hero1 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.hero1Div}>
      <div className={styles.bGDiv} />
      <img className={styles.groupIcon} alt="" src="../group-10.svg" />
      <div className={styles.contentLeftDiv}>
        <div className={styles.reviewDiv}>
          <div className={styles.consecteturAdipiscingElitV}>
            Here we learn, share our experiences and grow together in a fun way.
            becuase this team just like the society : For the students - By the
            students
          </div>
          <b className={styles.dennyJonesB}>Abdul Waheed</b>
          <b className={styles.bestCodeEditorInMarket}>
            Best Team of the last year!
          </b>
          <img className={styles.starIcon} alt="" src="../star.svg" />
          <img
            className={styles.ellipseIcon}
            alt=""
            src="../profile-pic (3).png"
          />
        </div>
        <div className={styles.contentDiv}>
          <div className={styles.anEditorThatHelpsYouWrite}>
            Web dev Team, helps you to understand dev.
          </div>
          <div className={styles.loremIpsumDolorSitAmetCo}>
            Here you get a chance for best practices to improve your workflow
            along the journey of web development from scratch!
          </div>
          <button className={styles.groupButton}>
            <div className={styles.rectangleDiv} />
            <b className={styles.tryOurFreeEditor}>Join the team!</b>
          </button>
        </div>
      </div>
      <div className={styles.rightIllustrationDiv}>
        <div className={styles.shadowDiv}>
          <div className={styles.bGDiv1} />
          <div className={styles.bGDiv2} />
          <div className={styles.bGDiv3} />
          <div className={styles.bGDiv4} />
          <div className={styles.bGDiv5} />
        </div>
        <div className={styles.codeDiv}>
          <div className={styles.bGDiv6} />
          <div className={styles.h1ClassicMoviesh1Table}>
            <p className={styles.h1ClassicMoviesh1P}>
              <span className={styles.span}>{`<`}</span>
              <span className={styles.h1Span}>h1</span>
              <span>{`>Phase One</h1>`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span>{`<`}</span>
              <span className={styles.h1Span}>table</span>
              <span className={styles.span}> class="</span>
              <span className={styles.rwdTableSpan}>rwd-table</span>
              <span className={styles.span}>{`">`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span className={styles.span}>{`  <`}</span>
              <span className={styles.h1Span}>tr</span>
              <span>{`>`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span>{`    <`}</span>
              <span className={styles.h1Span}>th</span>
              <span>{`>HTML Basics</`}</span>
              <span className={styles.h1Span}>th</span>
              <span className={styles.span}>{`>`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span className={styles.span}>{`    <`}</span>
              <span className={styles.h1Span}>th</span>
              <span>{`>CSS Understanding</`}</span>
              <span className={styles.h1Span}>th</span>
              <span>{`>`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span>{`    <`}</span>
              <span className={styles.h1Span}>th</span>
              <span className={styles.span}>{`>Tasks</`}</span>
              <span className={styles.h1Span}>th</span>
              <span className={styles.span}>{`>`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span className={styles.span}>{`    <`}</span>
              <span className={styles.h1Span}>th</span>
              <span>{`>Tips</`}</span>
              <span className={styles.h1Span}>th</span>
              <span>{`>`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span>{`  </`}</span>
              <span className={styles.h1Span}>tr</span>
              <span className={styles.span}>{`>`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span className={styles.span}>{`  <`}</span>
              <span className={styles.h1Span}>tr</span>
              <span>{`>`}</span>
            </p>
            <p className={styles.h1ClassicMoviesh1P}>
              <span>{`    <`}</span>
              <span className={styles.h1Span}>td</span>
              <span className={styles.span}> data-th="</span>
              <span className={styles.rwdTableSpan}>Movie Title</span>
              <span>{`">Star Wars</`}</span>
              <span className={styles.h1Span}>td</span>
              <span className={styles.span}>{`>`}</span>
            </p>
            <p className={styles.tdDataThGenreAdventure}>
              <span className={styles.span}>{`    <`}</span>
              <span className={styles.h1Span}>td</span>
              <span className={styles.span}> data-th="</span>
              <span className={styles.rwdTableSpan}>Genre</span>
              <span>{`">Adventure, Sci-fi</`}</span>
              <span className={styles.h1Span}>td</span>
              <span className={styles.span}>{`>`}</span>
            </p>
          </div>
          <div className={styles.div}>
            <p className={styles.h1ClassicMoviesh1P}>1</p>
            <p className={styles.h1ClassicMoviesh1P}>2</p>
            <p className={styles.h1ClassicMoviesh1P}>3</p>
            <p className={styles.h1ClassicMoviesh1P}>4</p>
            <p className={styles.h1ClassicMoviesh1P}>5</p>
            <p className={styles.h1ClassicMoviesh1P}>6</p>
            <p className={styles.h1ClassicMoviesh1P}>7</p>
            <p className={styles.h1ClassicMoviesh1P}>8</p>
            <p className={styles.h1ClassicMoviesh1P}>9</p>
            <p className={styles.h1ClassicMoviesh1P}>10</p>
            <p className={styles.h1ClassicMoviesh1P}>11</p>
            <p className={styles.h1ClassicMoviesh1P}>12</p>
            <p className={styles.tdDataThGenreAdventure}>13</p>
          </div>
          <img className={styles.ellipseIcon1} alt="" src="../ellipse-1.svg" />
          <img className={styles.ellipseIcon2} alt="" src="../ellipse-1.svg" />
          <img className={styles.ellipseIcon3} alt="" src="../ellipse-1.svg" />
        </div>
        <div className={styles.resultDiv}>
          <img className={styles.bGIcon} alt="" src="../bg.svg" />
          <div className={styles.div1}>
            <div className={styles.movieTitleDiv}>Phases</div>
            <div className={styles.genreDiv}>Session</div>
            <div className={styles.yearDiv}>Topic</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.starWarsDiv}>Understanding</div>
            <div className={styles.adventureDiv}>1</div>
            <div className={styles.div3}>Web</div>
          </div>
          <div className={styles.div4}>
            <div className={styles.howardTheDuck}>Basics</div>
            <div className={styles.adventureDiv}>2</div>
            <div className={styles.div3}>HTML</div>
          </div>
          <div className={styles.div6}>
            <div className={styles.howardTheDuck}>...</div>
            <div className={styles.adventureDiv}>...</div>
            <div className={styles.div3}>...</div>
          </div>
          <div className={styles.div8}>
            <div className={styles.howardTheDuck}>...</div>
            <div className={styles.adventureDiv}>...</div>
            <div className={styles.div3}>...</div>
          </div>
          {/* <div className={styles.div10}>
            <div className={styles.howardTheDuck}>Pyscho</div>
            <div className={styles.adventureDiv}>Thriller</div>
            <div className={styles.div3}>1960</div>
          </div>
          <div className={styles.div12}>
            <div className={styles.howardTheDuck}>The Godfather</div>
            <div className={styles.adventureDiv}>Crime</div>
            <div className={styles.div3}>1972</div>
          </div> */}
          <div className={styles.lineDiv} />
        </div>
        <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
      </div>
      <nav className={styles.headerNav} data-animate-on-scroll>
        <div className={styles.logoDiv}>
          <b className={styles.rareblocks}>
            <span className={styles.h1Span}>/</span>
            <span className={styles.span}>IEEE Web</span>
          </b>
        </div>
        <div className={styles.menuDiv}>
          <div className={styles.featuresDiv}>Interactive</div>
          <div className={styles.pricingDiv}>Supportive</div>
          <div className={styles.supportDiv}>Beginner Friendly</div>
        </div>
        <div className={styles.buttonPrimaryWithIconDiv}>
          <div className={styles.frameDiv}>
            <b className={styles.buttonName}>Try for free</b>
            <div className={styles.iconDiv}>
              <img
                className={styles.iconOutlinearrowRight}
                alt=""
                src="../iconoutlinearrowright.svg"
              />
            </div>
          </div>
        </div>
      </nav>
      <img className={styles.vectorIcon} alt="" src="../vector-4.svg" />
    </div>
  );
};

export default Hero1;
