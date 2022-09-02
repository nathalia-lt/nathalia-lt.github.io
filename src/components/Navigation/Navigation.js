export default function NavBar({ homeScroll, aboutScroll, projectsScroll, techScroll, contactScroll }) {
    return (
        <div className="nav-main">
            <button className='navigation-link' onClick={homeScroll}>Home</button>
            <button className='navigation-link' onClick={aboutScroll}>About</button>
            <button className='navigation-link' onClick={projectsScroll}>Projects</button>
            <button className='navigation-link' onClick={techScroll}>Skills</button>
            <button className='navigation-link' onClick={contactScroll}>Contact</button>
        </div>
    )
}