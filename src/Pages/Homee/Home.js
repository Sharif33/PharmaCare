import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Medicines from '../Medicines/Medicines';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Doctors></Doctors>
            <Medicines></Medicines>
        </div>
    );
};

export default Home;