import React, { useState } from "react";
import allProjects from "./ProjectList";
import Project from "../Project/Project";
import Default from "../Project/Default";
import Button from "../Button/Button";

export default function Projects({projectToShow,setProjectToShow}) {
    const buttonsToDisplay = allProjects.map(project => {
        return (
            <Button
                key={project.id + " button"}
                project={project}
                projectToShow={projectToShow}
                setProjectToShow={setProjectToShow} />
        );
    });

    const displayDefaultProject = projectToShow === 'default' ? <Default setProjectToShow={setProjectToShow} /> : null;

    const projectsToDisplay = allProjects.map(proj => {
        return (
            projectToShow === proj.id ? <Project project={proj} key={proj.id} /> : null
        );
    });


    return (
        <div className="port-section">
            <div>
                <h1 className='project-header'>-</h1>
                <div className="project-options">
                    {buttonsToDisplay}
                </div>

                {displayDefaultProject}

                {projectsToDisplay}

            </div>
        </div>
    )
}

