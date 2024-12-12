import BtnGitHub from "../components/BtnGitHub/BtnGitHub";
import {useParams} from "react-router-dom";
import {project} from '../helpers/projectList'

function ProjectPage ()  {
    const {id} = useParams();
    const projects = project[id];
    return(
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{projects.title}</h1>

                    <img src={projects.imgBig} alt={projects.title} className="project-details__cover"/>

                        <div className="project-details__desc">
                            <p>Skills: {projects.skills}</p>
                        </div>
                    {projects.githubLink && (
                        <BtnGitHub link="https://github.com"/>

                    )}
                </div>
            </div>
        </main>
    )
}
export default ProjectPage