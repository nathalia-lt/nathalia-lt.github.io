import ReactTooltip from 'react-tooltip';
import booksco from "../../assets/Projects/booksco/books-coicon.png"
import eventhunter from "../../assets/Projects/eventhunter/eventhuntericon.png"
import luatide from "../../assets/Projects/luatide/luatideicon.png"
import traderblotter from "../../assets/Projects/traderblotter/traderblottericon.png"

export default function Button({ project, projectToShow, setProjectToShow }) {

    const handleButtonClick = () => setProjectToShow(project.id)

    let buttonClass = projectToShow === project.id ? "project-logo" : "project-logo unClicked"

    let img;
    switch (project.id) {
        case 'books-co':
            img = booksco
            buttonClass+=' '+project.id
            break
        case 'eventhunter':
            img = eventhunter
            buttonClass+=' '+project.id
            break
        case 'luatide':
            img = luatide
            buttonClass+=' '+project.id
            break
        case 'traderblotter':
            img = traderblotter
            buttonClass+=' '+project.id
            break
        default:
            break
    }

    return (
        <button onClick={handleButtonClick}>
            <img
                data-tip data-for={project.id}
                className={buttonClass}
                src={img}
                alt={project.id}
            />
            <ReactTooltip id={project.id} place="bottom" type={project.type} effect='solid'>
                <span>{project.name}</span>
            </ReactTooltip>
        </button>
    )
}