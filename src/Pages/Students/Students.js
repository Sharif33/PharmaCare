import React from 'react';
import './Student.css';
import career0 from '../../images/career0.jpg';


const Students = () => {
    return (
        <div>
            <div className="background pt-5">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 p-5">
                        <p className="text-secondary">Students and Careers</p>
                        <h1 className="heading py-5">Wealcoming Tommorow's Healthcare Leaders</h1>
                        <div>
                            <p>
                                Your future starts with Sinai. Our programs include residence in a number of specialties, educational and employment opportunities for medical and nursing students and clinical training program all in service of diverse and deserving communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row container-fluid p-4 mx-auto">
                <div className="col-md-4">
                    <img className="img-fluid" src={career0} alt="" />
                </div>
                <div className="col-md-8 text-center">
                    <div className="row">
                        <div className="col-md-6 bg-font p-5">
                            <p>We offer high-quality, coordinated care for patients and families via phone, video, email and mobile applications.</p>
                            <small className="fs-6 text-success">TeleHealth at Mass General</small>
                        </div>
                        <div className="col-md-6 bg-font2 p-5">
                            <p>As the original and largest teaching hospital of Harvard Medical School, Mass General trains the next generation of leaders in science and medicine.</p>
                        </div>
                    </div>
                    <div className="p-5">
                        <h2 style={{ color: "#005562", fontFamily: "sans-serif", fontWeight: "300" }}>We are committed to delivering the highest quality and safest care possible for every patient.</h2>
                        <p className="pt-4 text-info">Quality & Safety at Mass General</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Students;