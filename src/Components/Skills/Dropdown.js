import React, { Component } from 'react'
import Skills from './Skills'
import {Consumer} from './DataSkills'

export default class Dropdown extends Component {

    render() {
        return (
            <Consumer>
                {value =>{ return (
                    <React.Fragment>
                        <h1 className="section-header text-white">Skills</h1>
                        <div className="mb-5">
                            {value.dataSkills.map(skill =>(
                                <Skills
                                key={skill.id}
                                id={skill.id}
                                categorie={skill.categorie}
                                description={skill.description}
                                />
                            ))}
                        </div>
                    </React.Fragment>
                )}}
            </Consumer>
        );
    }
}

