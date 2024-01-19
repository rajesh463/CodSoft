import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { googleSignInInitiate, loginInitiate } from '../redux/actions';
import GoogleButton from 'react-google-button'
import "./Login.css"
import Button from 'react-bootstrap/Button'

const Login = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const { currentUser } = useSelector((state) => state.user);
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser)
            history.push("/");
        }
    }, [currentUser, history]);

    const dispatch = useDispatch();

    const { email, password } = state;
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        console.log(email);
        console.log(password)
        dispatch(loginInitiate(email, password));
        setState({ email: "", password: "" });
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    return (
        <div id='signinbox'>
            <div >
                <div>
                    <form onSubmit={handleSubmit}>
                        <div id="signtitle">
                            <div>
                                <h3 >SIGN IN</h3>
                            </div>
                            <div>
                                <label>Or <Link to="/signup" id="createaccount">Create an account</Link></label>
                            </div>
                        </div>

                        <input
                            type="email"
                            id="signinemail"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            onChange={handleChange}
                            value={email}
                            required
                        />
                        <input
                            type="password"
                            id="signinpass"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={password}
                            required
                        />
      
                        <button onsubmitvariant="outline-primary" id='signbutton'>SIGN IN</button>
                        </form>
                        <br />
                        <hr />
                        <div className="orcont">
                            <label>Or continue with</label>
                        </div>
               
                        <div  >
                            {/* <button className="btn google-btn social-btn"  type="button" onClick={handleGoogleSignIn} >
                            <span>
                                <i className="fab fa-google-plus-g" id='google-btn-login' ></i>  Google
                            </span>
                        </button> */}
                            <GoogleButton className='signin-button'
                                onClick={handleGoogleSignIn}
                            />
                        </div>


                      
                        {/* <p id='DontHaveAccount-Login'>Don't have an account </p>
                        <Link to="/signup" >
                            <div id='Signupnewaccount-Login'>
                                <button className="btn btn-primary btn-block" type="button">
                                    <i className="fas fa-user-plus" ></i> Sign up New Account
                                </button>
                            </div>
                        </Link> */}
                   
                </div>
            </div>
        </div>
    )
}

export default Login