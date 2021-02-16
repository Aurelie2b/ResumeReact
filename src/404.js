import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NotFound extends Component {
    render() {
        return (
            <div className="container text-white">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6 rounded" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                            
                        <div className="w-full px-4 text-center">
                            <div className="flex justify-center">
                                <h1 className="section-header">404 Not found</h1>
                            </div>
                            <div className="flex justify-center">
                            <Link className="nav-link btn text-white mb-5" style={{background: 'dark'}} to="/">BACK TO HOME</Link>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
