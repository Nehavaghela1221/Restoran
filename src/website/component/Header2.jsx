import React from 'react'
import Navbar from './Navbar'
import { Helmet } from 'react-helmet'

import { Link } from 'react-router-dom'

function Header2({ Title }) {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <Helmet>
      
      <link href="website/img/favicon.ico" rel="icon" />


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet"/>


  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"/>


      <link href="website/lib/animate/animate.min.css" rel="stylesheet" />
      <link href="website/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="website/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />


      <link href="website/css/bootstrap.min.css" rel="stylesheet" />


      <link href="website/css/style.css" rel="stylesheet" />
      </Helmet>
      <Navbar />
      <div className="container text-center my-5 pt-5 pb-4">
        <h1 className="display-3 text-white mb-3 animated slideInDown">{Title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center text-uppercase">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/Menu">Menu</Link></li>
            <li className="breadcrumb-item text-white active" aria-current="page"><Link to="/About">About</Link></li>
          </ol>
        </nav>
      </div>
      <Helmet>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="website/lib/wow/wow.min.js"></script>
    <script src="website/lib/easing/easing.min.js"></script>
    <script src="website/lib/waypoints/waypoints.min.js"></script>
    <script src="website/lib/counterup/counterup.min.js"></script>
    <script src="website/lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="website/lib/tempusdominus/js/moment.min.js"></script>
    <script src="website/lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="website/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>


   
    <script src="website/js/main.js"></script>
      </Helmet>
    </div>

  )
}

export default Header2