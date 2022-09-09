import React from "react"
import eventhunterphoto from "../../assets/Projects/eventhunter/eventHunterpic.png"
import bookscopic from  "../../assets/Projects/booksco/books-copic.png"
import luatide from "../../assets/Projects/luatide/luatide.png"
import allProjects from "../Projects/ProjectList";
import traderblotter from "../../assets/Projects/traderblotter/traderblotterpic.png"

export default function Default({setProjectToShow}) {

    const photosToDisplay = allProjects.map(project => {
        const handleImageClick = () => setProjectToShow(project.id)
        let titleClass = 'project-title ' + project.id + ' photo'
        let photo
        switch (project.id) {
            case 'eventhunter':
                photo = eventhunterphoto
                break
            case 'books-co':
                photo = bookscopic
                break
            case 'luatide':
                photo = luatide
                break
            case 'traderblotter':
                photo = traderblotter
                break
        }
        return (
            <div className="project-photo">
                <img src={photo} onClick={handleImageClick}/>
                <h4 className={titleClass}>{project.name}</h4>
            </div>
        )
    })

    return (
        <React.Fragment>
            <h2 className="project-title default">Projects</h2>
            <div className="project-description">
                <b className="project-tagline">Click an icon above or image below to view more information about each project.</b>
            </div>
            <div className="project-display images">
                {photosToDisplay}
            </div>
        </React.Fragment>
    )
}