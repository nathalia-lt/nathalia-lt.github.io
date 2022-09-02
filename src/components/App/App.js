import React, { useEffect, useState } from "react"
import Home from "../Home/Home"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Tech from "../Tech/Tech"
import Contact from "../Contact/Contact"
import Navigation from "../Navigation/Navigation"
import { scroller as Scroll } from "react-scroll"


export default function App() {
  let [showNavigation, setShowNavigation] = useState(false)
  const [projectToShow, setProjectToShow] = useState('default');

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 650) {
        setShowNavigation(false);

      }
      if (window.scrollY > 650) {
        setShowNavigation(true);
      }
    })
  }, [window.scrollY])

  function aboutScroll() {
    Scroll.scrollTo("about", {
      smooth: true
    });
  }

  function projectsScroll() {
    setProjectToShow('default')
    Scroll.scrollTo("projects", {
      smooth: true
    });
  }

  function techScroll() {
    Scroll.scrollTo("tech", {
      smooth: true
    });
  }

  function contactScroll() {
    Scroll.scrollTo("contact", {
      smooth: true
    });
  }

  function homeScroll() {
    setProjectToShow('default')
    Scroll.scrollTo("home", {
      smooth: true
    });
  }


  let displayNavigation = showNavigation ?
    <Navigation
      aboutScroll={aboutScroll}
      projectsScroll={projectsScroll}
      techScroll={techScroll}
      contactScroll={contactScroll}
      homeScroll={homeScroll}
    />
    :
    null

  return (
    <div id="home" className="port-section">
      {displayNavigation}
      <div className="home-section" name='home'>
        <Home
          aboutScroll={aboutScroll}
          projectsScroll={projectsScroll}
          techScroll={techScroll}
          contactScroll={contactScroll}
        />
      </div>
      <div className="about-section" name="about">
        <About />
      </div>
      <div className="projects-section" name="projects">
        <Projects 
          projectToShow={projectToShow}
          setProjectToShow={setProjectToShow}
        />
      </div>
      <div className="tech-section" name="tech" >
        <Tech />
      </div>
      <div className="contact-section" name="contact">
        <Contact />
      </div>
    </div>
  );
}