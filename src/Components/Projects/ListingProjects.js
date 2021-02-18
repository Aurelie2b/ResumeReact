import React, { Component } from 'react'
import {Consumer} from './DataSkills'
import Projects from '../Projects/CarouselProject'
import '../Projects/Projects.css'

export default class ListingProjects extends Component {

  render() {
    
    return (
        <Consumer>
            {value =>{ return (
              <React.Fragment>
              <h1 className="section-header text-white">My Projects</h1>
              <div className="Container">
              <section className="mb-5 mx-5 mt-2 rounded" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <div className="container mt-5">
                  {value.dataProjects.map(project => (
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
            )}}
        </Consumer>
    );
}

}


