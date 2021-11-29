import React from 'react';
import google from '../../images/google.png';
import useAuth from '../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const { user, handleEmailChange, signInUsingGoogle, handleNameChange, handlePassChange, isLogin, handleRegistration, handleResetPassword, toggleLogin, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div style={{ overflowX: "hidden" }}>
            {
                user?.displayName ? <div className="row row-cols-1 row-cols-md-2 p-5">
                    <div className="p-5 border border-success text-center">
                        <img className="img-fluid rounded-circle" src={user?.photoURL} alt="" />
                        <h1 className='text-success'>{user?.displayName}</h1>
                        <h2>Welcome to Pharma Care family</h2>
                        <Link to="/home"><button className="btn btn-primary" >Home</button></Link>
                    </div>
                    <div className=" border border-info p-4 rounded">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Your full name" aria-label="Your full name" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">Receiving Address</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <select id="inputState" className="form-select">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 pt-3">
                                <Link to="/home"><button type="submit" className="btn btn-primary">Procced</button></Link>
                            </div>
                        </form>
                    </div>

                </div>
                    : <div className="col-md-4 my-5 mx-auto shadow p-4">
                        <h3 className="text-center text-primary p-3">Please {isLogin ? 'Login' : 'Register'}</h3>
                        <form onSubmit={handleRegistration}>
                            {!isLogin && <div className="mb-3">
                                <input onBlur={handleNameChange} type="text" className="form-control" placeholder="Your name" aria-label="First name" />
                            </div>}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handlePassChange} type="password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <div className="mb-3 form-check">
                                <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Already Sign In?</label>
                            </div>
                            <div className="text-center text-danger mb-3">{error}</div>
                            <button onClick={handleResetPassword} className="btn btn-sm btn-outline-warning mb-3">Reset Password</button>
                            <button type="submit" className="btn w-100 btn-primary "> {isLogin ? 'Login' : 'Register'} </button>
                        </form>

                        <div className="text-center">
                            <p>or SignIn with</p>
                            <button onClick={handleGoogleLogin} title="SignIn with Google" className="btn border p-2 mx-2"><img style={{ width: "50px", height: "50px" }} src={google} alt="" /></button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;