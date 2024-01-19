import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory,Link} from 'react-router-dom';
import { registerInitiate,googleSignInInitiate } from '../redux/actions';
import Button from 'react-bootstrap/Button'
import GoogleButton from 'react-google-button'

import "./Register.css"

const Register = () => {
    const [state,setState] = useState({
        displayName:"",      
        email:"",
        password:"",
        passwordConfrim:""
    });

    const {currentUser} = useSelector((state)=>state.user);
    const history = useHistory();

    useEffect(()=>{
        if(currentUser){
            console.log(currentUser)
            history.push("/");
        }
    },[currentUser,history]);

    const dispatch = useDispatch();
    const handleGoogleSignIn =() =>{
        dispatch(googleSignInInitiate());
    }
    const {email ,password,displayName,passwordConfrim} = state;
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password !== passwordConfrim){
            return;
        }
        dispatch(registerInitiate(email,password,displayName));
        setState({email:"",displayName:"",password:"",passwordConfrim:""});

    }
    const handleChange =(e)=>{
        let {name ,value} = e.target;
        setState({...state,[name]:value});
    }
  return (
    <div>
        <div id='signupbox'>
            <form className="form-signup" onSubmit ={handleSubmit}>
            <div>
          <h3  id="signtitle" >SIGN UP</h3>
        </div>
                <input 
                    type = "text"
                    id ="signupname"
                    className = "form-control"
                    placeholder="Full Name"
                    name ="displayName"
                    onChange ={handleChange}
                    value ={displayName}
                    required
                />
                <input 
                    type = "email"
                    id ="signupemail"
                    className = "form-control"
                    placeholder="Email Address"
                    name ="email"
                    onChange ={handleChange}
                    value ={email}
                    required
                />
                <input 
                    type = "password"
                    id ="pass"
                    className = "form-control"
                    placeholder="Password"
                    name ="password"
                    onChange ={handleChange}
                    value ={password}
                    required
                />
                 <input 
                    type = "password"
                    id ="pass"
                    className = "form-control"
                    placeholder="Confirm Password"
                    name ="passwordConfrim"
                    onChange ={handleChange}
                    value ={passwordConfrim}
                    required
                />
                <Button variant="outline-primary" id='signbutton' type="submit">SIGN UP</Button>
                <p style={{textAlign:"center"}}>OR</p>
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

             
            </form>
            <br/>
        </div>
    </div>
  )
}

export default Register