import React, { useEffect, useState } from 'react';
import AllMedicines from '../AllMedicines/AllMedicines';

const FindMedicine = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch('./pharmacare.json')
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])
    return (
        <div className="container">
            <div className="text-center  border-bottom border-primary p-4">
                <h1 className="fw-bold">Pharma Care Medicines</h1>
                <p className="text-secondary fs-4">Order us what you want</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 m-2 g-4">
                {
                    medicines.map(medicine => <AllMedicines
                        key={medicine.id}
                        medicine={medicine}
                    >
                    </AllMedicines>)
                }
            </div>
        </div>
    );
};

export default FindMedicine;