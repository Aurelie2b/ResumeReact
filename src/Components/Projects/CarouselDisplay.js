import React, { Component } from 'react'
import Carousel from './Carousel'

export default class CarouselDisplay extends Component {
    render() {
        return (
            <div id="root">
                <div className="container">
                    <h1 className="section-header text-white">Projects</h1>
                    <section className="overflow-hidden mb-5 rounded" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>             
                    <Carousel/>
                    </section>    
                </div>
                <br/>
                <br/>
            </div> 
        );
    }
}

