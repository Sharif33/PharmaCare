import React from 'react';
import contact1 from '../../images/c1.svg';
import contact2 from '../../images/c2.svg';
import contact3 from '../../images/c3.svg';
import contact4 from '../../images/c4.svg';
import contact5 from '../../images/c5.svg';
import contact6 from '../../images/c6.svg';
import contact7 from '../../images/c7.svg';
import contact8 from '../../images/c8.svg';
import contact9 from '../../images/c9.svg';

const ContactUs = () => {
    return (
        <div>
            <div className="pb-4">
                <div className="text-center border-bottom border-success p-4 container">
                    <h1>Contact Us</h1>
                </div>

                <div>
                    <div className="container mb-5 pt-4">
                        <h2 style={{ color: "#005562" }} className="text-center p-5">Additional Resources</h2>
                        <div className="row row-cols-2 row-cols-md-5 gy-3 text-center bg-light">
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact1} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>Hospital Phone Directory</h5>
                                <p>Find phone numbers for centers, departments, services and programs at Mass General.</p>
                            </div>
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact2} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>Campus Building & Direction</h5>
                                <p>Get directions or locate a building on Mass General’s main campus.</p>
                            </div>
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact3} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>Accessibility at Mass Generel</h5>
                                <p>Accessibility information and contact details for our access and accommodations team.</p>
                            </div>
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact4} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>Visitor Information</h5>
                                <p>Coordinate your visit with information about visiting hours, patient drop-off and pick-up, shuttles and parking.</p>
                            </div>
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact5} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>Find a Doctor</h5>
                                <p>Search our database of nearly 3,000 Mass General physicians located at the hospital’s main campus or one of our health centers or satellite locations.</p>
                            </div>
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact6} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>Appointment & Referrals</h5>
                                <p>Learn more about Mass General’s appointment and referral process for new and existing patients or for referring physicians.</p>
                            </div>
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact7} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>Billing & Financial Assistance</h5>
                                <p>Find information about Mass General's billing and insurance policies and financial assistance options..</p>
                            </div>
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact8} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>Make a Gift</h5>
                                <p>Support patient care, medical research and education at Mass General..</p>
                            </div>
                            <div className="p-3">
                                <img className="img-fluid w-50 rounded-circle p-3 bg-white" src={contact9} alt="" />
                                <h5 className="text-decoration-underline mt-2" style={{ color: "#005562" }}>News & Media</h5>
                                <p>Contact Public Affairs for assistance with all media and communication requests.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 my-3 px-4">
                        <div className="p-4 border rounded border-warning" style={{ color: "#005562", fontFamily: "sans-serif", fontWeight: "300" }}>
                            <h2 className="py-2">Mailing Addresses</h2>
                            <h4 className="py-2">To Write to a Patient or Employee</h4>
                            <h5>Name</h5>
                            <h5>Building and room number</h5>
                            <h5>Massachusetts General Hospital</h5>
                            <h5>55 Fruit Street</h5>
                            <h5>Boston, MA 02114-2696</h5>
                        </div>
                        <div>
                            <div className="container p-4 mx-auto border border-info rounded-3 bg-white shadow">
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
                </div>
            </div>
        </div>
    );
};

export default ContactUs;