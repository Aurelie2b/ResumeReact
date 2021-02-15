import React from 'react';

export default function Education() {

    return (
        <div className="container">
            <h1 className="section-header text-white">Education</h1>

            <div className="card text-center mt-5 mb-5 rounded" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <div className="card-header">
                    <h5 className="card-title text-white">Training Full Stack Web developer @ Interface3</h5>
                </div>
                <div className="card-body text-white">
                    <h5 className="card-title">Certificate of competence in web development</h5>
                    <p className="card-title">2019-2020</p>
                    <p className="card-title"><small>Brussels</small></p>
                    <a href="https://www.interface3.be/fr/formation/web-application-developer" title="Details Training @ Interface 3" target="_blank" rel="noopener noreferrer"><img src={'interface3.png'} alt="logo Interface 3"/></a>
                </div>
            </div>
            <div className="card text-center mt-5 mb-5" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <div className="card-header">
                    <h5 className="card-title text-white border-black">Child Care @ Marie Immaculée Institue</h5>
                </div>
                    <div className="card-body text-white">
                    <h5 className="card-title">Secondary School Diploma in child care</h5>
                    <p className="card-title">2000-2006</p>
                    <p className="card-title"><small>Brussels</small></p>
                </div>
            </div>
        </div>
    )

}