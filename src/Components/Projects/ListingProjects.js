import React from 'react'
import DataProjects from './DataProjects'
import Projects from '../Projects/Projects'
import '../Projects/Projects.css'

export default function ListingProjects() {
  return (  
    <React.Fragment>

      <h1 className="section-header text-white">My Projects</h1>
        <div className="Container m-5 mt-5">
        <br/>
        <section className="md:mt-20 pb-40 relative" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        
          <div
            className="-mt-10 top-0 bottom-auto left-0 right-0 w-full absolute h-20  "
            style={{ transform: "translateZ(0)" }}
            >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
            </svg>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className=" ">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            {DataProjects.map(project => (
              <Projects
              key={project.id}
              id={project.id}
              name={project.name}
              categorie={project.categorie}
              description={project.description}
              picture={project.picture}
              githubLink={project.githubLink}
              appLink={project.appLink}
            />
            ))}
          </div>
        </section>
      </div>
    </React.Fragment>
  )  
}


