import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.listener = null;

        this.state = {
            status: "top",
        };
    }
    
    componentDidMount() {
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 100) {
            if (this.state.status !== "resume") {
              this.setState({ status: "resume" });
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
                color: this.state.status === "top" ? "white" : "white",
              }}  >
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
            </button>
            <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
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



