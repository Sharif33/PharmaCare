import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/hospital1.jpg';
import banner2 from '../../images/hospital2.jpg';
import banner3 from '../../images/hospital3.jpg';

const Banner = () => {
    const style = {
        fontSize: "3.5rem", color: "#052049", backgroundColor: "white", opacity: "65%", borderTopRightRadius: "50px", borderBottomLeftRadius: "50px", padding: "20px", fontWeight: "300"
    }
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block p-5 m-5">
                            <h1 style={style} className="m-5 ">Ranked #1 in the Nurology and Nurosergery</h1>
                            <Link to="/about"><button className="btn btn-primary rounded-pill p-4 fs-4">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block p-5 m-5">
                            <h1 style={style} className="m-5">One of the Nations Top 10 hospitals</h1>
                            <Link to="/about"><button className="btn btn-primary rounded-pill p-4 fs-4">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block p-5 m-5">
                            <h1 style={style} className="m-5">We are transforming lives through lung transplants</h1>
                            <Link to="/about"><button className="btn btn-primary rounded-pill p-4 fs-4">Learn More</button></Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div style={{ backgroundColor: "#5769B0" }} className=" text-center">
                <div className="row container mx-auto">
                    <div className="col-md-4 shadow p-5">
                        <h3 className="text-light">Our Doctors</h3>
                        <p className="text-light">Choose by name,speciality,city and more</p>
                        <Link to="/doctors"><button style={{ color: "#5769B0" }} className="btn btn-light">FIND A DOCTOR</button></Link>
                    </div>
                    <div className="col-md-4  p-5">
                        <h3 className="text-light">Locations & Directions</h3>
                        <p className="text-light">Find maps or more for locations</p>
                        <Link to="/about"><button style={{ color: "#5769B0" }} className="btn btn-light">GET DIRECTIONS</button></Link>
                    </div>
                    <div className=" col-md-4 shadow p-5">
                        <h3 className="text-light">Appoinments</h3>
                        <p className="text-light">More ways then ever to get the care you need</p>
                        <Link to="/login"><button style={{ color: "#5769B0" }} className="btn btn-light">APPOINMENTS & ACCESS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;