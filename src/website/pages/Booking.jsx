import React,{useState,useEffect} from 'react'
import axios from 'axios';

import Header2 from '../component/Header2'
import Footer from '../component/Footer'
import { toast } from 'react-toastify';


function Booking() {
    const [formvalue,setFormvalue]=useState({
        id:"",
        name:"",
        email:"",
        date:"",
        people:"",
        request:"",
        
    
        });
    
    
        const getform=(e)=>{
            setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
            console.log(formvalue);
        }
        
        const validation=()=>{
        
            var result=true;
            if(formvalue.name=="")
            {
            toast.error('Name Field is required');
                result=false;
                return false;
            }
            if(formvalue.email=="")
            {
            toast.error('Email Field is required');
                result=false;
                return false;
            }
            if(formvalue.date=="")
            {
            toast.error('Date Field is required');
                result=false;
                return false;
            }
            if(formvalue.people=="")
            {
            toast.error('people Field is required');
                result=false;
                return false;
            }
            if(formvalue.request=="")
            {
            toast.error('request Field is required');
                result=false;
                return false;
            } 
            
            return result;
        
        }
        const submithandel = async (e) => {
            e.preventDefault(); // stop page reload
            if(validation())
            {
            const res = await axios.post(`http://localhost:3000/booking`,formvalue);
            console.log(res);
            if(res.status==201)
            {
                setFormvalue({...formvalue,name:"",email:"",date:"",request:""});
                toast.success('contact suceessful');
                return false;
            }
            }
        }
    return (
        <div>
            <Header2 Title={"Book Table"} />

            <div>
                {/* Reservation Start */}
                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="video">
                                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                    <span />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                                <h1 className="text-white mb-4">Book A Table Online</h1>
                                <form onSubmit={submithandel}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" name="name" placeholder="Your Name"  value={formvalue.name} onChange={getform} />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" name="email" placeholder="Your Email" value={formvalue.email} onChange={getform}/>
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" value={formvalue.date} onChange={getform} className="form-control datetimep  icker-input" name="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime">Date &amp; Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" value={formvalue.people} onChange={getform} name="select1">
                                                    <option value={1}>People 1</option>
                                                    <option value={2}>People 2</option>
                                                    <option value={3}>People 3</option>
                                                </select>
                                                <label htmlFor="select1">No Of People</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" value={formvalue.request} onChange={getform} placeholder="Special Request" name="message" style={{ height: 100 }} defaultValue={""} />
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/* 16:9 aspect ratio */}
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Reservation Start */}
            </div>



            <Footer />
        </div>
    )
}

export default Booking