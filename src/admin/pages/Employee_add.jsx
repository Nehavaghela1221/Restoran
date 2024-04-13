import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState } from 'react'
import axios from 'axios';

function Categories_add() {
    const [formvalue,setFormvalue]=useState({
        id:"",
        emp_name:"",
        emp_email:"",
        emp_password:"",
        emp_mobile:"",
        emp_img:"",
        emp_status:"",
      

      });
    
      const getform=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
      }
    
      const submithandel = async (e) => {
        e.preventDefault(); // stop page reload 
        const res = await axios.post(`http://localhost:3000/employee`,formvalue);
        //console.log(res);
        if(res.status==201)
        {
          setFormvalue({...formvalue,emp_name:"",emp_img:""});
          alert('Categories submited success');
          return false;
        }
      }
    
    return (
        <div>
            <Header/>
            <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">Add Employee</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">
              Add Categories
              </div>
              <div className="panel-body">
                <form role="form" action="" method='post' onSubmit={submithandel}>
                  <div className="form-group">
                    <label>Employee Name</label>
                    <input className="form-control" name='emp__name' value={formvalue.emp_name} onChange={getform} type="text" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" name='emp_email' value={formvalue.emp_email} onChange={getform} type="email" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" name='emp_password' value={formvalue.emp_password} onChange={getform} type="password" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <div className="form-group">
                    <label>Mobile</label>
                    <input className="form-control" name='emp_mobile' value={formvalue.emp_mobile} onChange={getform} type="number" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <div className="form-group">
                    <label>Image Upload</label>
                    <input className="form-control" name="emp_img" value={formvalue.cate_img}  onChange={getform} type="url" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <input className="form-control" name='emp_status' value={formvalue.emp_status} onChange={getform} type="boolean" />
                    <p className="help-block">Help text here.</p>
                  </div>
                  <button type="submit" className="btn btn-info">Submit </button>
                </form></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
<Footer/>
        </div>
    )
}

export default Categories_add