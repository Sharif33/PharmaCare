import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Medicine from '../Medicine/Medicine';

const Medicines = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch('./pharmacare.json')
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])
    return (
        <div className="container">
            <div className="text-center  border-bottom border-primary p-4">
                <h1 className="fw-bold">What do you need today?</h1>
                <p className="text-secondary fs-4">Check our featured products and deals</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 m-2 g-4">
                {
                    medicines.slice(0, 4).map(medicine => <Medicine
                        key={medicine.id}
                        medicine={medicine}
                    ></Medicine>)
                }
            </div>
            <div className="border-bottom border-danger p-2 text-center">
                <Link to="/medicine"><button className="btn btn-outline-dark rounded-pill">View All</button></Link>
            </div>
        </div>
    );
};

export default Medicines;