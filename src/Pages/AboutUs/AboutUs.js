import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="bg-light mx-auto container">
                <div className="text-center border-bottom border-warning container m-4 p-4">
                    <h3 className="fw-bold">About Us</h3>

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

            <div className="container my-4 mx-auto row">
                <h1 className="text-center text-primary p-5">Learn More About Us</h1>
                <div className="mx-auto col-md-6 ">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed text-primary fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Advocacy
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Sinai Chicago believes in patient advocacy, which is any activity that ultimately benefits a patient. Using that definition, our caregivers ensure that every individual patient and all groups have the information and resources necessary to be aware of their rights. What’s more, our caregivers work with government groups as well as legislators to improve the health system for our patients.Protective Services and Advocacy Groups in Chicago</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed text-primary fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Diversity & Inclusion
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Our Commitment to Diversity and Inclusion
                                    As one of our brand actions, we embrace diversity and benefit from the diversity of possibilities it fosters. We are committed to creating and maintaining an inclusive environment in all our decisions to ensure the best outcome for all stakeholders involved. We hold our leaders accountable for cultivating a workplace that respects, supports, and appreciates the uniqueness of all caregivers.

                                    Sinai Health System demonstrates its commitment to diversity within the organization. </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed text-primary fw-bold fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Mission, Vision & Values
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">MISSION STATEMENT <br />
                                    Our mission is to improve the health of the individuals and communities we serve. <br />

                                    VISION STATEMENT <br />
                                    PharmaCare Health System will become the national model for the delivery of urban health care. <br />

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