import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-lg-start- text-white" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div className="container">
          <ul className="list-unstyled d-flex justify-content-around">
            <li>
            <a href="https://www.linkedin.com/in/aureliedebay/" target="_blank" rel="noopener noreferrer" title="Linkedin Aurélie" className="text-white">
            <i className="fab fa-linkedin-in mt-5 mb-4 fa-2x" style={{color: 'white'}}></i></a>
            </li>
            <li>
            <a href="https://github.com/Aurelie2b" target="_blank" rel="noopener noreferrer" title="GitHub Aurélie" className="text-white">
            <i className="fab fa-github mt-5 mb-4 fa-2x" style={{color: 'white'}}></i></a>
            </li>
            <li>
            <a href="tel:0032485830729" target="_blank" rel="noopener noreferrer" title="Call Aurélie" className="text-white">
            <i className="fa fa-mobile-alt mt-5 mb-4 fa-2x" style={{color: 'white'}}></i></a>
            </li>
            <li>
            <a href="mailto:info@debayaurelie.be" target="_blank" rel="noopener noreferrer" title="Email Aurélie" className="text-white">
            <i className="fas fa-envelope mt-5 mb-4 fa-2x" style={{color: 'white'}}></i></a>
            </li>
            <li>
            <a href={"DebayAurelieResume.pdf"} target="_blank" rel="noopener noreferrer" title="Resume Aurélie" className="text-white">
            <i className="fas fa-file-alt mt-5 mb-4 fa-2x" style={{color: 'white'}}></i></a>
            </li>  
          </ul>
        </div>
        <div className="text-center p-3" style={{backgroundColor: 'black'}}>
          <small>© {new Date().getFullYear()} Debay Aurélie | Made with
          L<span style={{color: "red"}}>&hearts;</span>VE | All Rights
          Reserved</small>
        </div>
      </footer>
    );
  }
}
