import * as React from 'react';
import axios from 'axios';

import Footer from '../component/Footer';
import { Link } from 'react-router-dom';


export default function Loginpage() {

  const [formvalue, setFormvalue] = React.useState({
    id: "",
    user_name: "",
    user_emai: "",
    user_password: "",
    user_mobile: "",
    user_img: "",


  });

  const getform = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload 
    const res = await axios.post(`http://localhost:3000/user`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({ ...formvalue, user_name: "", user_img: "" });
     alert( 'Categories submited success ' );
     return false;
      // window.location("/user")

     
    }
  }
  return (
<div>
    <div class="navbar navbar-inverse set-radius-zero" >
      <div class="container">
        <div class="navbar-header">
    
          <a class="navbar-brand" href="index.html">

            <img src="admin/assets/img/logo.png" />
          </a>

        </div>


      </div>
    </div>
    <div className="content-wrapper">
      <div className="container">
        <div className="row pad-botm">
          <div className="col-md-12">
            <h4 className="header-line">Add Categories</h4>
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
                    <label>Categories Name</label>
                    <input className="form-control" name='user_name' value={formvalue.cate_name} onChange={getform} type="text" />
                  </div>
                  <div className="form-group">
                    <label>Categories Name</label>
                    <input className="form-control" name='user_name' value={formvalue.cate_name} onChange={getform} type="email" />
                  </div>
                  <div className="form-group">
                    <label>Categories Name</label>
                    <input className="form-control" name='user_name' value={formvalue.cate_name} onChange={getform} type="password" />
                  </div>
                  <div className="form-group">
                    <label>Categories Name</label>
                    <input className="form-control" name='user_name' value={formvalue.cate_name} onChange={getform} type="phone" />
                  </div>
                  
                  <div className="form-group">
                    <label>Image Upload</label>
                    <input className="form-control" name="user_img" value={formvalue.cate_img}  onChange={getform} type="url" />
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
  );
}
