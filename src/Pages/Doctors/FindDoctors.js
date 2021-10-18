import React, { useEffect, useState } from 'react';
import AllDoctors from '../Doctor/AllDoctors';

const FindDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container">
            <div className="text-center  border-bottom border-primary p-4">
                <h1 className="fw-bold">Are you Feeling well today?</h1>
                <p className="text-secondary fs-4">Here is our some top Doctors.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 m-2 g-4">
                {
                    doctors.map(doctor => <AllDoctors
                        key={doctor.id}
                        doctor={doctor}
                    ></AllDoctors>)
                }
            </div>
        </div>
    );
};

export default FindDoctors;