import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Experiences(props) {

    const {id} = props ;
    const {year} = props ;
    const {job} = props ;
    const {society} = props ;
    const {city} = props ;
    const {workDescription} = props ;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (id %2) {
        return(
            <div className="container text-center">
                <VerticalTimeline>
                    <VerticalTimelineElement
                    contentStyle={{ background: 'transparent'}}
                    className="text-white" 
                    date={year}
                    iconStyle={{ background: 'transparent'}}
                    position="left"
                    >
                        <h5 className="mt-2">{job}</h5>
                        <h5 className="mt-3">{' @' + society}</h5>
                        <h6 className="mt-3">{city}</h6>
                        <Button className="mt-3 text-white" variant="outline-dark" onClick={handleShow} >Work description</Button>
                
                        <Modal show={show} onHide={handleClose} size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                            <Modal.Title >Job description</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{workDescription}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="dark"  onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                          
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
    else{
        return(
            <div className="container text-center">
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="text-white"
                    contentStyle={{ background: 'transparent'}}
                    date={year}
                    position="right"
                    >
                        <h5 className="mt-2">{job}</h5>
                        <h5 className="mt-3">{' @' + society}</h5>
                        <h6 className="mt-3">{city}</h6>
                        <Button className="mt-3 text-white" variant="outline-dark" onClick={handleShow} >Work description</Button>
                           
                        <Modal show={show} onHide={handleClose} size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                            <Modal.Header closeButton>
                            <Modal.Title >Work description</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{workDescription}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                            
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

