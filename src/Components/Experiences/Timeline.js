import React from 'react'
import Experiences from './Experiences'
import DataExperiences from './DataExperiences'
   
export default function Timeline() {
  
    return (
        
        <React.Fragment>
        <h1 className="section-header text-white">Experiences</h1>
            <section className="mb-5 mx-5 mt-2 rounded" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                {DataExperiences.map(experience =>(
                    <Experiences
                    key={experience.id}
                    id={experience.id}
                    year={experience.year}
                    job={experience.job}
                    society={experience.society}
                    city={experience.city}
                    workdescription={experience.workdescription}
                    />
                ))}
            </section>  
        </React.Fragment>
    
    )
    
}

