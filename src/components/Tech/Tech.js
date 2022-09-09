import React from "react";
import javascript from "../../assets/Tech/javascript.png";
import nodejs from "../../assets/Tech/nodejs.png";
import react from "../../assets/Tech/react.png";
import html from "../../assets/Tech/html5.png";
import css from "../../assets/Tech/css3.png";
import ruby from "../../assets/Tech/ruby.png";
import rails from "../../assets/Tech/rails.png";
import postgres from "../../assets/Tech/postgresql.png";
import git from "../../assets/Tech/git.png";

export default function Tech() {
  return (
    <div className="port-section">
        <div className="tech-information">
          <h1 className="project-title tech">Technical Skills</h1>
          <div className="tech-tools">
            <div>
              <img src={javascript} alt="js" />
              <p>Javascript</p>
            </div>
            <div>
              <img src={react} alt="react" />
              <p>React.js</p>
            </div>
            <div>
              <img src={nodejs} alt="node" />
              <p>Node.js</p>
            </div>
            <div>
              <img src={html} alt="hmtl" />
              <p>HTML</p>
            </div>
            <div>
              <img src={css} alt="css" />
              <p>CSS</p>
            </div>

          </div>
          <div className="tech-tools">
            <div>
              <img src={ruby} alt="rb" />
              <p>Ruby</p>
            </div>
            <div>
              <img src={rails} alt="rbr" />
              <p>Ruby on Rails</p>
            </div>
            <div>
              <img src={postgres} alt="sql" />
              <p>PostgreSQL</p>
            </div>
            <div>
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
          </div>
        </div>
    </div>
  );
}

