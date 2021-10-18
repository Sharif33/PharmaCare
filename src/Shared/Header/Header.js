import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    const activeStyle = {
        color: "black",
        backgroundColor: "white",
        transition: ".5s ease-in",

        borderBottom: "2px solid red"

    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-2" to="/home">PharmaCare</NavLink>
                    <div className="text-center">
                        <img className="img-fluid w-25 rounded-circle px-2" src={user?.photoURL} alt="" />
                        <span className="text-light">{user?.displayName}</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-3 fs-5 " aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-3 fs-5 " to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-3 fs-5 " to="/doctors">Doctors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-3 fs-5 " to="/students">Students</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link active mx-3 fs-5 " to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                {user?.email ? <button onClick={logOut} className="btn btn-danger">Logout</button> : <NavLink activeStyle={activeStyle} className="nav-link active mx-3 fs-5 " to="/login">Sign In</NavLink>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;