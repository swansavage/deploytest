
import Projects from "./Projects";
import projectsJSON from "../project.json";

function ProjectGallery(){

    return(

     <div  id="projects" >
             
      <div>
      <h2 class="text-center py-4 display-4 text-danger pt-5">Projects</h2>
      </div>

      <div className="projectGrid container-fluid">
        <div className="row mx-auto">
          {projectsJSON.map(project => 
            <Projects id="project1"
              title= {project.title}
              image = {project.image}
              github= {project.github}
              deployed= {project.deployed}
              description = {project.description}
              large= {project.large}
            />
          )}
        </div>
      </div>
            
        </div>
    );
}

export default ProjectGallery;