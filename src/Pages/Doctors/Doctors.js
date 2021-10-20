import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Sharif33/simple-e-commerce/main/public/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className="container">
            <div className="text-center  border-bottom border-primary p-4">
                <h1 className="fw-bold">Are you Feeling well today?</h1>
                <p className="text-secondary fs-4">Here is our some top Doctors.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 m-2 g-4">
                {
                    doctors.slice(0, 6).map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
            <div className="border-bottom border-danger p-2 text-center">
                <Link to="/doctors"><button className="btn btn-outline-dark rounded-pill">See All the Doctors</button></Link>
            </div>
        </div>
    );
};

export default Doctors;