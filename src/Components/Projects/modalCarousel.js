import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './Carousel.scss'


import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Flippy, { FrontSide, BackSide } from 'react-flippy'

  const slides = [
    {
        id : 1,
        name: 'Resume Website',
        categorie : 'React',
        description : 'Resume Website from scratch',
        picture : 'resume2.jpg',
        githubLink : 'https://github.com/Aurelie2b/resumeReact',
        appLink : 'http://www.debayaurelie.be/'
    },
    {
        id : 2,
        name : 'Resume Website',
        categorie : 'JavaScript',
        description : 'My first website from scratch done in training',
        picture : 'firstResumeWebsite.jpg',
        githubLink : 'https://github.com/Aurelie2b/ResumeWebsite',
        appLink : 'http://www.if3projets.net/wad19/aurelie/'
    },
    {
        id : 3,
        name : 'ImmoBab',
        categorie : 'Angular, Firebase',
        description : 'Training udemy. Login: aure@2b.be, Password: 123456',
        picture : 'immoBab.jpg',
        githubLink : 'https://github.com/Aurelie2b/ImmoBab',
        appLink : 'https://immobab-77233.web.app/login'
    },
    {
        id : 4,
        name : 'AppContact',
        categorie : 'React',
        description : 'Training udemy',
        picture : 'appContact.jpg',
        githubLink : 'https://github.com/Aurelie2b/appcontacts',
        appLink : 'https://aurelie2b.github.io/AddContact'
    },
    {
        id : 5,
        name : 'InterFace',
        categorie : 'Javascript, Firebase',
        description : 'Hackaton @ Interface3',
        picture : 'Hackaton.png',
        githubLink : 'https://github.com/sabidlv/Projet_Interface',
        
    },
    {
        id : 6,
        name: 'Mini game',
        categorie : 'Unity',
        description : 'Mini game we made in training',
        picture : 'Unity.png',
        githubLink : '',
        appLink : ''
        
    },
    {
        id : 7,
        name: 'Submarine',
        categorie : 'OpenScad',
        description : 'Exercice made in training',
        picture : 'SousMarin.png',
        githubLink : '',
        appLink : ''
        
    },

  ];

  export default class Carousel extends Component {

    
    constructor(props) {
      super(props);
      this.state = {
        currentIndex : 0,
        show: false,
        isFlipped: false
      };
    }
    

    openModal = () => this.setState({ show: true});
    closeModal = () => this.setState({ show: false });

    renderSlides() {

      const { currentIndex } = this.state;

      return slides.map((slide, index) => {
        const classMapper = {
          [currentIndex - 2]: "Carousel-slide--previous",
          [currentIndex - 1]: "Carousel-slide--left",
          [currentIndex]: "Carousel-slide--active",
          [currentIndex + 1]: "Carousel-slide--right",
          [currentIndex + 2]: "Carousel-slide--next"
        };

        if (index < currentIndex - 2 || index > currentIndex + 2) {
          return null;
        }

      
      return (

        <div
          key={slide.id}
          className={`Carousel-slide ${classMapper[index]}`}
          onClick={() => this.setState({ currentIndex: index })}
          
        >
     
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                  
                      <div className="card" style={{ backgroundColor: 'black'}}>
                        <img className="d-block w-100" src={slide.picture} key={slide.id} alt={slide.id}></img>
                        
                        <Button className="btn text-white" 
                        variant="outline-dark" 
                        onClick={this.openModal}
                        key={slide.id}
                       
                      
                
                        >
                          View more
                        </Button>


                          <Modal size="mg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered show={this.state.show}
                          className="text-center"
                          key={currentIndex}
                          >
                            <Modal.Header closeButton>
                            <Modal.Title >Technologie : {slide.categorie}</Modal.Title>
                            </Modal.Header>
                            <div className="card">
                              <img className="d-block w-100" src={slide.picture} alt={slide.id}></img>
                            </div>
                            <br/>
                            <h5>Description : </h5>
                            {slide.description}
                            <div className="m-3">
                                <a href={slide.appLink} className='m-3' target="_blank" rel="noopener noreferrer" style={{color: "black"}}><i className="fas fa-link fa-2x"></i></a>
                                <a href={slide.githubLink} className='m-3' target="_blank" rel="noopener noreferrer" style={{color: "black"}}><i className="fab fa-github fa-2x"></i></a>
                              </div> 
                            <Modal.Footer>
                                
                              <Button variant="outline-dark" className="justify-content-center" onClick={this.closeModal}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
  
                          </div>
                     
                  
                     
                  </div>
                </div>  
              </div>

        </div>
      );
    });
  }


  render() {
    const { currentIndex } = this.state

    return (
      <div className="Wrapper">
        <div className="Carousel">{this.renderSlides()}</div>
        
          <br/>
          <div className="Buttons">
          <Button
            disabled={currentIndex === 0}
            onClick={() => this.setState({ currentIndex: currentIndex - 1 })}
            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
            
          >
          <i className="fas fa-chevron-left"></i>
          </Button>
          <Button
            disabled={currentIndex === slides.length - 1}
            onClick={() => this.setState({ currentIndex: currentIndex + 1 })}
            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
            
          >
          <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById("root"));
