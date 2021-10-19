import React from 'react';
import { Link } from 'react-router-dom';

const AllDoctors = ({ doctor }) => {
    const { id, name, image, speciality, contact, title, work } = doctor;
    return (
        <div>
            <div className="col rounded cart-hover text-center">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="" />
                    <div className="p-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <small className="fw-bold text-secondary"><span className="text-warning"><i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i></span>
                            </small>

                        </div>
                        <h5 className="text-dark">{name}</h5>
                        <p className="text-warning">{speciality}</p>
                        <p className="text-secondary">{title} {work}</p>
                        <div className="d-flex justify-content-between">
                            <h6 className="text-secondary fw-bold"><i className="fas fa-phone-alt"></i> {contact}</h6>
                            <button className="btn btn-success" title="Appointment">Appointment</button>
                        </div>
                    </div>

                    <div className="border-top p-2 text-center">
                        <Link to={`doctor/${id}`}><button className="btn btn-outline-success">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDoctors;