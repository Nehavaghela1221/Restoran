import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Header2 from '../component/Header2'
import Footer from '../component/Footer'
import { toast } from 'react-toastify';


function Contact() {

 
    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        subject:"",
        message:""
      });
    
      const getform=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
      }
    
      const submithandel = async (e) => {
        e.preventDefault(); // stop page reload 
        const res = await axios.post(`http://localhost:3000/contact`,formvalue);
        //console.log(res);
        if(res.status==201)
        {
          setFormvalue({...formvalue,name:"",email:"",subject:"",message:""});
          toast('contact submited success');
          return false;
        }
      }
    return (
        <div>
            <Header2 Title={"Contact "} />
            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2" />book@example.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2" />info@example.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2" />tech@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 350, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form action="" method='post' onSubmit={submithandel} >
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input  type="text" name="name" value={formvalue.name} onChange={getform} className="form-control" placeholder="Full name" required  />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" name="email" value={formvalue.email} onChange={getform} pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required/>
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="subject" name="subject" value={formvalue.subject} onChange={getform} className="form-control" placeholder="Subject" required />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea value={formvalue.message} onChange={getform} className="form-control" placeholder="Leave a message here" name='message' style={{ height: 150 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End --
    */}
            <Footer />

        </div>
    )
}

export default Contact