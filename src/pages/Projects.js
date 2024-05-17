import Project from "../components/project/Project";
import {project} from '../helpers/projectList';


function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {project.map((project,index) => {
                        return <Project key={index} title={project.title} img={project.img}  />
                    })}
                </ul>
            </div>
        </main>
    )
}
export default Projects;