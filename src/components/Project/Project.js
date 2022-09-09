import React from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons"
import eventhunterGif from "../../assets/Projects/eventhunter/eventhunter.gif"
import bookco1 from "../../assets/Projects/booksco/book-co1.gif"
import bookco2 from "../../assets/Projects/booksco/book-co2.gif"
import luatide from "../../assets/Projects/luatide/luatide.gif"
import traderblotter from "../../assets/Projects/traderblotter/traderblottergif.gif"


export default function Project({ project }) {

    const madeWithFullStack = <div className="madewith">
        <div>Made With:</div>
        <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="rails" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />
        </div>
    </div>

    const madeWithFrontEnd = <div className="madewith">
        <div className='madewith-title'>Made With:</div>
        <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" />

        </div>
    </div>

    const madeWithFullStackAlt = <div className="madewith">
        <div>Made With:</div>
        <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="rails" width="40" height="40" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />
        </div>
    </div>




    let stack;
    let gif;
    let gif2;
    switch (project.id) {
        case 'eventhunter':
            gif = eventhunterGif;
            stack = madeWithFrontEnd;
            break
        case 'books-co':
            gif = bookco1;
            gif2 = bookco2;
            stack = madeWithFullStack;
            break
        case 'luatide':
            gif = luatide;
            stack = madeWithFullStackAlt;
            break
        case 'traderblotter':
            gif = traderblotter;
            stack = madeWithFrontEnd;
            break

    }

    const titleClass = 'project-title ' + project.id

    return (
        <React.Fragment>
            <h2 className={titleClass}>{project.name}</h2>
            <div className="project-display">
                <img src={gif} width={project.gifWidth} />
                <img src={gif2} width={project.gifWidth} />

            </div>
            <div className="project-description">
                <b className="project-tagline">{project.tagline}</b>
                <div className="project-features">
                    <br />
                    {project.features[0]}
                    <br />
                    {project.features[1]}
                    <br />
                    {project.features[2]}
                    <br />
                </div>
            </div>

            <div className="project-footer">
                {stack}

                <a className="project-link" data-tip data-for='repo' target="_blank" rel="noreferrer" href={project.github}>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="project-link" data-tip data-for='deployed' target="_blank" rel="noreferrer" href={project.deploy}>
                    <FontAwesomeIcon icon={faWindowRestore} />
                </a>
                <ReactTooltip id='repo' type='light' effect='solid'>
                    <span>GitHub Repo</span>
                </ReactTooltip>
                <ReactTooltip id='deployed' type='light' effect='solid'>
                    <span>Live Demo</span>
                </ReactTooltip>
            </div>

        </React.Fragment>
    )
}