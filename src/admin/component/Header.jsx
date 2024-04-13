import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { redirect } from "react-router-dom";

function Header() {
  // Delete session
  const logout = () => {
    localStorage.removeItem('idadmin');
    localStorage.removeItem('nameadmin');
    toast.success('Logout Success');
    redirect('/dashboard')
  }
  return (
    <>


      <Helmet>
        <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />

        <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />

        <link href="admin/assets/css/style.css" rel="stylesheet" />

        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
      </Helmet>

      <div class="navbar navbar-inverse set-radius-zero" >
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link class="navbar-brand" to="/dashboard">

              <img src="admin/assets/img/logo.png" />
            </Link>

          

          {(
            () => {
              //  Use  session
              if (localStorage.getItem('idadmin')) {
                return (
                  <NavLink to="/profilea" className="nav-item nav-link">Hi .. {localStorage.getItem('nameadmin')}</NavLink>
                )
              }
            }
          )()}
        </div>
     
        {(
          () => {
            if (localStorage.getItem('idadmin')) {
              return (
                <>
                  <a href="javascript:void(0)" onClick={logout} className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Logout</a>
                </>
              )
            }
            else {
              return (
                <>
                  <Link to="/loginpage" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Login</Link>
                </>
              )
            }
          }
        )()}
      </div>
    </div >
       
     
      <section className="menu-section">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="navbar-collapse collapse ">
                <ul id="menu-top" className="nav navbar-nav navbar-right">
                  <li><NavLink to="/dashboard" className="menu-top-active">DASHBOARD</NavLink></li>

                  <li>
                    <NavLink to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Catagries<i className="fa fa-angle-down" /></NavLink>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                      <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/categories_add">Catagries-Add</NavLink></li>
                      <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/categories_manage">Catagries-Manage</NavLink></li>
                    </ul>
                  </li><li>
                    <NavLink to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Employee<i className="fa fa-angle-down" /></NavLink>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                      <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/employee_add">Employee-Add</NavLink></li>
                      <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/employee_manage">Employee-Manage</NavLink></li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Services<i className="fa fa-angle-down" /></NavLink>
                    <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                      <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/services_add">Services-Add</NavLink></li>
                      <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="/services_manage">Services-Manage</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink to="/user" className="menu-top-active">User</NavLink></li>
                  <li><NavLink to="/acontact" className="menu-top-active">Contact</NavLink></li>
                  <li><NavLink to="/bookinga" className="menu-top-active">Booking</NavLink></li>
            

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Helmet>

        <script src="admin/assets/js/bootstrap.js"></script>
        <script src="admin/assets/js/custom.js"></script>
        <script src="admin/assets/js/jquery-1.10.2.js"></script>
      </Helmet>
    </ >
  )
}

export default Header