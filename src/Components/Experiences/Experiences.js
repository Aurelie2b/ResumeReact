import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

export default function Experiences(props) {

    const {id} = props ;
    const {year} = props ;
    const {job} = props ;
    const {society} = props ;
    const {city} = props ;
    const {workDescription} = props ;

    if (id %2) {
        return(
            <div className="container">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        contentStyle={{ background: 'transparent'}}
                        className="vertical-timeline-element--work text-white" 
                        date={year}
                        iconStyle={{ background: 'transparent'}}
                        position="left"
                        >
                        <h5 className="vertical-timeline-element-title text-center">{job}</h5>
                        <h5 className="vertical-timeline-element-title text-center">{society}</h5>
                        <h6 className="vertical-timeline-element-subtitle text-center">{city}</h6>
                        <p>{workDescription}</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
    else{
        return(
            <div className="container">
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work text-white"
                    contentStyle={{ background: 'transparent'}}
                    date={year}
                    iconStyle={{ background: 'transparent'}}
                    position="right"
                    >
                    <h5 className="vertical-timeline-element-title text-center">{job}</h5>
                    <h5 className="vertical-timeline-element-title text-center">{society}</h5>
                    <h6 className="vertical-timeline-element-subtitle text-center">{city}</h6>
                    <p>{workDescription}</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}
