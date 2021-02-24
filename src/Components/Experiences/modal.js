import React from 'react'
import Modal from 'react-modal'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

export default function Experiences(props) {

    const {id} = props ;
    const {year} = props ;
    const {job} = props ;
    const {society} = props ;
    const {city} = props ;
    const {workDescription} = props ;


    const [modalIsOpen,setmodalIsOpen] = React.useState(false);

    

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
                            <button className="mt-3 bg-black text-white" onClick={()=>{setmodalIsOpen(true)}}>Work description</button>
                           
                            
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" isOpen={modalIsOpen} onRequestClose={()=>setmodalIsOpen(false)}>
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">Work description</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                {workDescription}
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.setState({ show: false })}>Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
                         
                          
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
                        <button className="mt-3 bg-black text-white" onClick={()=>{setmodalIsOpen(true)}}>Work description</button>
                    
                        
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" isOpen={modalIsOpen} onRequestClose={()=>setmodalIsOpen(false)}>
                            <div className="modal-dialog">
                                <div clclassNameass="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Work description</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {workDescription}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => this.setState({ show: false })}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}
