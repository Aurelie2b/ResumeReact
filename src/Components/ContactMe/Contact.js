import React, { useState} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import { useForm } from "react-hook-form"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

    const Contact = () => {
        const { register, handleSubmit, errors } = useForm();
        const onSubmit = (data, r) => {
        const templateId = 'template_ctbGjLNN';
        const serviceID = 'emailResume';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.message, reply_to: data.email })
        r.target.reset();
        console.log(data)

    }  

    const sendFeedback = (serviceID, templateId, variables) => {
        emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            handleShow()
        })
            .catch(err => alert.error('There has been an error.  Here some thoughts on the error that occured:', err))
    } 
    
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


  return (  
    
    <div className="container">
        <h1 className="section-header text-white">Contact Me</h1>
        <section className="overflow-hidden mb-5 rounded" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <div className="flex flex-wrap justify-center text-white">
                <div className="w-full md:w-5/12 px-2 md:px-4 mr-auto mt-5 ml-5">
                    <form id="contact-form" name="contact_form" role="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder="Jane Doe"  name="name" 
                            ref={
                                register({ 
                                    required: "Please enter your name", 
                                })
                            } />
                            {errors.name && errors.name.message}<br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" placeholder="exemple@exemple.com"  aria-describedby="emailHelp" name="email" 
                            ref={
                                register({
                                    required: "Please enter an email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })
                            }
                        />
                        {errors.email && errors.email.message}<br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" placeholder="Enter your message"  rows="5" name='message'
                            ref={
                                register({
                                    required: true
                                })
                            } 
                            >
                            </textarea>
                            {errors.comment && "oops, you forgot your message!"}<br />
                        </div>
                        <Button type="submit" className="mb-5" variant="dark">Send</Button>
                    </form>


                    <Modal show={show} onHide={handleClose} size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                        <Modal.Header closeButton>
                            <Modal.Title >Message send</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
                    <i className="fab fa-github text-gray-800 absolute overflow-hidden -top-150-px -right-100 left-auto opacity-80 text-55"></i>
                </div>
            </div>
        </section>    
    </div>

    );
}

export default Contact;



