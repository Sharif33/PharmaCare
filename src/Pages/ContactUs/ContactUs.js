import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="bg-light pb-4">
                <div className="text-center border-bottom border-success p-4 container">
                    <h1>Contact Us</h1>
                </div>

                <div>
                    <div className="container mb-5 pt-4">
                        <div className="row row-cols-1 row-cols-md-2 gy-3 text-white fs-5">
                            <div>
                                <div className="p-4 rounded-3 bg-danger d-flex align-items-center">
                                    <div> <i className="fas fa-phone-alt mx-2 p-4 rounded-circle bg-light text-primary"></i></div>
                                    <div className="p-2">
                                        <h4>+880 123-456-789</h4>
                                        <p className="text-light">Free Suporte!</p></div>
                                </div>
                            </div>
                            <div>
                                <div className="p-4 rounded-3 bg-primary d-flex align-items-center"><div> <h3><i className="fas fa-clock mx-2 p-4 rounded-circle bg-light text-primary"></i></h3></div>
                                    <div className="p-2">
                                        <h4>Mon-Sat(10:00-19:00)</h4>
                                        <p className="text-light">Working Hours!</p></div></div>
                            </div>
                            <div>
                                <div className="p-4 rounded-3 bg-success d-flex align-items-center"><div> <h4><i className="fas fa-map-marker-alt mx-2 p-4 rounded-circle bg-light text-primary"></i></h4></div>
                                    <div className="p-2">
                                        <h4>3532 J.Street, Mirpur</h4>
                                        <p className="text-light">Dhaka, Bangladesh</p></div></div>
                            </div>
                            <div>
                                <div className="p-4 rounded-3 bg-warning d-flex align-items-center"><div> <h3><i className="fas fa-envelope mx-2 p-4 rounded-circle bg-light text-warning"></i></h3></div>
                                    <div className="p-2">
                                        <h4>webdev@webdev.com</h4>
                                        <p className="text-light">Suporte us!</p></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container p-4 w-50 mx-auto border rounded-3 bg-white shadow">
                    <div className="pb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div className="pb-3 ">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address" />
                    </div>
                    <div className="pb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button className="btn btn-danger">Send Messege</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;