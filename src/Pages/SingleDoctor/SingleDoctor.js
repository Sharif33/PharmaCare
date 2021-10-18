import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleDoctor = () => {
    const { id } = useParams();

    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Sharif33/simple-e-commerce/main/public/doctors.json')
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])

    const foundMedicine = medicines.find(medicine => medicine.id == id)
    return (
        <div>
            <div className='container py-5 my-5'>
                <div className="row">
                    <div className="col-md-6 border border-warning shadow-lg d-flex justify-content-between">
                        <img className='img-fluid rounded-circle' src={foundMedicine?.image} alt="" />
                        <div className="p-4">
                            <h2 style={{ color: "#62599F" }} className='mt-5'>{foundMedicine?.name}</h2>
                            <p>{foundMedicine?.work}</p>
                            <h4 className="text-decoration-underline" style={{ color: "#005562" }}>{foundMedicine?.speciality}</h4>
                        </div>
                    </div>
                    <div className="col-md-6 border p-4">
                        <div className="">
                            <h5 className='text-secondary'><small className="fw-bold text-secondary"><span className="text-warning"><i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i></span>
                            </small>  <span> ({foundMedicine?.rating} peoples reviewed)</span></h5>


                        </div>
                        <h2 className="text-info fw-bold py-3">{foundMedicine?.price}</h2>
                        <p>{foundMedicine?.name} {foundMedicine?.reviews}</p>
                        <div className="d-flex justify-content-between">
                            <p className="text-info">Accept New Patients</p>
                            <Link to="/doctors"><button style={{ backgroundColor: "#5769B0" }} className="btn text-light">Appointment</button></Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleDoctor;