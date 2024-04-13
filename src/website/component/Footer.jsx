import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
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
      {/* Footer Start */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>

      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
              <Link to="/About" className="btn btn-link" >About Us</Link>
              <Link to="/Contact" className="btn btn-link" >Contact Us</Link>
              <Link to="/Booking" className="btn btn-link" >Reservation</Link>
              <Link to="/" className="btn btn-link">Privacy Policy</Link>
              <Link to="/" className="btn btn-link" >Terms &amp; Condition</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
              <div className="d-flex pt-2">
                <NavLink to="/" className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></NavLink>
                <Link to="/" className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></Link>
                <Link to="/" className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></Link>
                <Link to="/" className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></ Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <Link to="/signup">  <button  type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href>Home</a>
                  <a href>Cookies</a>
                  <a href>Help</a>
                  <a href>FQAs</a>
                </div>
              </div>
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
      {/* Footer End */}
    </div>


  )
}

export default Footer