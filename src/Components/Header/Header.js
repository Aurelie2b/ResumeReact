import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {

    constructor(props) {
        super(props);
    
        this.listener = null;
        this.state = {
          status: "top"
        };
      }
    
      componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 120) {
            if (this.state.status !== "Resume") {
              this.setState({ status: "Resume" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top"
            style={{
                backgroundColor: this.state.status === "top" ? "transparent" : "black",
                color: this.state.status === "top" ? "white" : "blue",
              }}  >
            <Link className="navbar-brand" href="/">My Resume</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/AboutMe">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Experiences">Experiences</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
        );
    } 
}


