import React from 'react';
import { Link } from 'react-router-dom';

const AllMedicines = ({ medicine }) => {
    const { id, title, image, price } = medicine;
    return (
        <div>
            <div className="col shadow rounded cart-hover text-center">
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
                        <h5 className="text-dark overflow">{title}</h5>
                        <div className="d-flex justify-content-between">
                            <h4 className="text-danger fw-bold">${price}</h4>
                            <button className="btn btn-outline-danger" title="Add to cart"><i className="fas fa-cart-plus"></i></button>
                        </div>
                    </div>

                    <div className="border-top p-2 text-center">
                        <Link to={`medicines/${id}`}><button className="btn btn-outline-success">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMedicines;