import React from 'react'
import '../Projects/Projects.css'


export default function Projects(props) { 

    const { name } = props;
    const { categorie } = props;
    const { description } = props;
    const { picture } = props;
    const { githubLink } = props;
    const { appLink } = props;

    return (
    
        <div className="d-inline-flex mx-4 ml-5 mb-5 text-center">
            <div className="card m-2">
                <img src={picture} className="card-img-top" alt="Project picture"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{categorie}</h6>
                    <p className="card-text">{description}</p>
                    <a href={appLink} className='m-3' target="_blank" rel="noopener noreferrer" style={{color: "black"}}><i class="fas fa-link fa-2x"></i></a>
                   <a href={githubLink} className='m-3' target="_blank" rel="noopener noreferrer" style={{color: "black"}}><i class="fab fa-github fa-2x"></i></a>
                </div>
            </div>
        </div>
    )

}
