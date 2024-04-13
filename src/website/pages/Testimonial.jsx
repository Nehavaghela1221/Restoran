import React from 'react'
import Header2 from '../component/Header2'
import Footer from '../component/Footer'

function Testimonial() {
    return (
        <div>
            <Header2 Title={"Testimonial"} />

            {/* Testimonial Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                        <h1 className="mb-5">Our Clients Say!!!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="website/img/testimonial-1.jpg" style={{ width: 50, height: 50 }} />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="website/img/testimonial-2.jpg" style={{ width: 50, height: 50 }} />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="website/img/testimonial-3.jpg" style={{ width: 50, height: 50 }} />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item bg-transparent border rounded p-4">
                            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="website/img/testimonial-4.jpg" style={{ width: 50, height: 50 }} />
                                <div className="ps-3">
                                    <h5 className="mb-1">Client Name</h5>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}



            <Footer />
        </div>
    )
}

export default Testimonial