import React from 'react';
import google from '../../images/google.png';
import fb from '../../images/fb.png';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { user, handleEmailChange, signInUsingGoogle, handleNameChange, handlePassChange, isLogin, handleRegistration, handleResetPassword, toggleLogin, error, signInUsingFb } = useAuth();

    return (
        <div className="w-50 mx-auto shadow p-4">

            {
                user.email ? <div className="text-center p-5">
                    <img className="img-fluid" src={user.photoURL} alt="" />
                    <h1 className='text-success'>{user.displayName}</h1>
                    <h2>Welcome to Pharma Care family</h2>
                    <Link to="/home"><button className="btn btn-primary" >Home</button></Link>

                </div>

                    : <div>
                        <h3 className="text-center text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
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
                            <button onClick={signInUsingGoogle} title="SignIn with Google" className="btn border p-2 mx-2"><img style={{ width: "50px", height: "50px" }} src={google} alt="" /></button>
                            <button onClick={signInUsingFb} title="SignIn with Facebook" className="btn border p-2 mx-2"><img style={{ width: "50px", height: "50px" }} src={fb} alt="" /></button> <br />
                        </div>
                    </div>

            }



        </div>
    );
};

export default Login;