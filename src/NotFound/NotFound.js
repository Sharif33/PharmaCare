import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push("/home");
    }
    return (
        <div>
            <div className="text-center p-5">
                <h1 className="text-danger" style={{ fontSize: "300px" }}>4<span className="text-dark">0</span>4</h1>
                <h2 className="text-warning">Page Not Found</h2>
                <h5 className="text-secondary">The page you want to go is not currently available</h5>
                <button className="border-0 p-2 rounded bg-primary px-4 text-white fw-bold" type="button" onClick={handleClick}>
                    Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;