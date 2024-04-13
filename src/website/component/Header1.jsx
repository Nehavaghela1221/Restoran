import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


function Header1() {
  return (
   <div>

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
            <div className="container-xxl py-5 bg-dark hero-header mb-5">

              <Navbar />
              <div className="container my-5 py-5">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                    <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <Link to="/Booking" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Link>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img className="img-fluid" src="website/img/hero.png" alt />
                  </div>
                </div>
              </div>




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

          export default Header1