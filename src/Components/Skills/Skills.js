import React, { Component } from 'react'
import { Consumer } from './DataSkills'

export default class Skills extends Component {

    state = {
        show : false
    }

    displayListSkills = () => {
        const skills = this.props.description ;
        const listSkills = skills.map((skill) =>
        <li className="card card-body mb-3" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} key={skill}>
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
                        
                        <div className='Container mx-5'>
                            <div id="accordion" className='shadow-lg text-center rounded' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>

                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" style={{color:'white'}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={this.showSkills}>
                                        {this.props.categorie}
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion" style={{background: 'transparent'}}>
                                    {this.state.show ? (
                                        <ul className="card card-body mb-3 text-white" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                            {this.displayListSkills(value.dispatch)}
                                        </ul>
                                    ) : null}
                                </div>
                            </div>    
                        </div>
                  
                    )


                }}
            </Consumer>
        )
    }
}

