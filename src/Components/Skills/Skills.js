import React, { Component } from 'react'
import { Consumer } from './DataSkills'

export default class Skills extends Component {

    state = {
        show : false
    }

    displayListSkills = () => {
        const skills = this.props.description ;
        const listSkills = skills.map((skill) =>
        <li className="card card-body mb-1 text-white" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} key={skill}>
        {skill}
        </li> );
        
        return (
            <ul className="list-group-item" style={{backgroundColor: 'transparent'}}>
                {listSkills}
            </ul>
        )
    }
    
    showSkills = () => {
        this.setState({
            show : !this.state.show
        })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div id="accordion" className='shadow-lg text-center rounded' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" style={{color:'white'}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={this.showSkills}>
                                    {this.props.categorie}
                                    </button>
                                </h5>
                                {this.state.show ? (
                                <div id="collapseOne" className="collapse mx-5 mt-2 rounded" aria-labelledby="headingOne" data-parent="#accordion" style={{background: 'black'}}>
                                    {this.displayListSkills(value.dispatch)}
                                </div>
                                ) : null}
                            </div>
                            
                        </div>    
                    )
                }}
            </Consumer>
        )
    }
}

