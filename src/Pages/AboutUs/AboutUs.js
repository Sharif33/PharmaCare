import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="bg-light">
                <div className="text-center border-bottom border-warning container mb-4 p-4">
                    <h3 className="fw-bold">About Us</h3>
                </div>
                <div className="p-5 bg-white border shadow text-center">
                    <h1 className="">Let's Update Your Skills with Our Training Proffesionals..</h1>
                    <p>We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
                    <button className="btn-lg border-0 btn-danger">Register Now!</button>
                </div>
                <div>

                    <div className="container pt-4">
                        <h2 className="text-center fw-bold border-bottom p-4">Why Choose Us?</h2>
                        <div className="row row-cols-2 row-cols-lg-3 m-2 text-center g-2 g-lg-5 pb-4">
                            <div className="col">
                                <div className="p-4 shadow border bg-white">
                                    <h2><i className="fas fa-clock bg-success rounded-circle p-2 text-white"></i></h2>
                                    <h4>Flexible Timing</h4>
                                    <small>Our being able to do what we like best, every pleasure is to be welcomed and every pain.</small></div>
                            </div>
                            <div className="col">
                                <div className="p-4 shadow border bg-white"><h2><i className="fas fa-heart bg-danger rounded-circle p-2 text-white"></i></h2>
                                    <h4>Online Intractive Classes</h4>
                                    <small>Our being able to do what we like best, every pleasure is to be welcomed and every pain.</small></div>
                            </div>
                            <div className="col">
                                <div className="p-4 shadow border bg-white"><h2><i className="fas fa-bookmark bg-primary rounded-circle p-2 text-white"></i></h2>
                                    <h4>Realtime Project Work</h4>
                                    <small>Our being able to do what we like best, every pleasure is to be welcomed and every pain.</small></div>
                            </div>
                            <div className="col">
                                <div className="p-4 shadow border bg-white"><h2><i className="fas fa-chart-line bg-warning rounded-circle p-2 text-white"></i></h2>
                                    <h4>100% Job Assistance</h4>
                                    <small>Our being able to do what we like best, every pleasure is to be welcomed and every pain.</small></div>
                            </div>
                            <div className="col">
                                <div className="p-4 shadow border bg-white"><h2><i className="fas fa-handshake bg-danger rounded-circle p-2 text-white"></i></h2>
                                    <h4>User Friendly</h4>
                                    <small>Our being able to do what we like best, every pleasure is to be welcomed and every pain.</small></div>
                            </div>
                            <div className="col">
                                <div className="p-4 shadow border bg-white"><h2><i className="fas fa-phone-alt bg-info rounded-circle p-2 text-white"></i></h2>
                                    <h4>24/7 support</h4>
                                    <small>Our being able to do what we like best, every pleasure is to be welcomed and every pain.</small></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;