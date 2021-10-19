import React from 'react';
import about1 from '../../images/career1.png';
import about2 from '../../images/career2.png';
import about3 from '../../images/career3.png';

const AboutUs = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="bg-light">
                <div className="text-center border-bottom border-warning mb-4 p-4">
                    <h3 className="fw-bold">About Us</h3>
                </div>
            </div>
            <div className="container pt-4 bg-light">
                <h2 style={{ color: "#005562", fontFamily: "serif", fontWeight: "300" }} className="text-center p-4">In the delivery of our care, through our research and within our communities, <br /> Mass General is committed to the well-being of our patients locally and globally.</h2>
                <div className="row row-cols-1 row-cols-md-3 g-5 text-center">
                    <div className="p-5">
                        <img className="img-fluid" src={about1} alt="" />
                        <h5>We bridge innovation science with state-of-the-art clinical medicine.</h5>
                        <div className="pt-3">
                            <button className="btn btn-outline-primary px-5">Learn More</button>
                        </div>
                    </div>
                    <div className="p-5">
                        <img className="img-fluid" src={about2} alt="" />
                        <h5>Discover the ways we're training the next generation of doctors.</h5>
                        <div className="pt-3">
                            <button className="btn btn-outline-primary px-5">Learn More</button>
                        </div>
                    </div>
                    <div className="p-5">
                        <img className="img-fluid" src={about3} alt="" />
                        <h5>Learn about Mass General's service within greater Boston.</h5>
                        <div className="pt-3">
                            <button className="btn btn-outline-primary px-5">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-4 mx-auto row">
                <h1 className="text-center text-primary p-5">Learn More About Us</h1>
                <div className="mx-auto col-md-6 ">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed text-primary fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Advocacy
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Sinai Chicago believes in patient advocacy, which is any activity that ultimately benefits a patient. Using that definition, our caregivers ensure that every individual patient and all groups have the information and resources necessary to be aware of their rights. What’s more, our caregivers work with government groups as well as legislators to improve the health system for our patients.Protective Services and Advocacy Groups in Chicago</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed text-primary fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Diversity & Inclusion
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Our Commitment to Diversity and Inclusion
                                    As one of our brand actions, we embrace diversity and benefit from the diversity of possibilities it fosters. We are committed to creating and maintaining an inclusive environment in all our decisions to ensure the best outcome for all stakeholders involved. We hold our leaders accountable for cultivating a workplace that respects, supports, and appreciates the uniqueness of all caregivers.

                                    Sinai Health System demonstrates its commitment to diversity within the organization. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-primary fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Mission, Vision & Values
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">MISSION STATEMENT <br />
                                    Our mission is to improve the health of the individuals and communities we serve. <br />

                                    VISION STATEMENT <br />
                                    Sinai Health System will become the national model for the delivery of urban health care. <br />

                                    VALUE STATEMENT <br />

                                    Respect <br />
                                    We will create an atmosphere of mutual respect and fairness, treating each person with dignity that recognizes each individual’s unique talents and contributions. <br />

                                    Integrity <br />
                                    We will hold ourselves accountable for our actions and be honest and ethical in all our dealings. <br />

                                    Quality <br />
                                    We will continuously improve our services as measured by the best practices in the industry. <br />

                                    Teamwork <br />
                                    We celebrate the opportunity to come together as caregivers in an inclusive workplace where diversity and open communication are valued. <br />

                                    Safety <br />
                                    We will foster an environment that focuses on protecting our patients, visitors, and caregivers from harm or injury.

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;