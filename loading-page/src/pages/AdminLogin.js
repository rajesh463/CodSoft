import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AdminInfo from "../api/AdminInfo";
import { useHistory } from "react-router-dom";
import "./AdminLogin.css";
// import {connect} from 'react-redux';
import { adminloginInitiate } from "../redux/actions";

import { adminInitiate, setAdmin, setAdminData } from "../redux/actions";
// import FullPageLoader from '../components/FullPageLoader/FullPageLoader';
// import { Spinner } from "react-bootstrap";
const AdminLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  const { adminData, adminError, loadingSpinner } = useSelector(
    (state) => state.user
  );
  const history = useHistory();
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (adminData) {
      console.log(adminData);
      history.push("/admin/dashboard");
    }
  }, [adminData, history]);

  useEffect(() => {
    if (loadingSpinner) {
       
    }
  }, [loadingSpinner]);

  useEffect(() => {
    dispatch(setAdmin(null));
  }, [dispatch]);

  const { email, password } = state;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    // const res = await AdminInfo.post("/hsam-admin",{email:email,password:password});
    console.log({ email: email, password: password });
    console.log("Error in admin login");

    // console.log(res.data.state);
    // alert("Login Success full Click Ok to continune");
    // if(res.data.state){
    //     alert("Login Success full Click Ok to continune");
    // }
    setState({ loading: true });
    dispatch(adminloginInitiate(email, password));
    setState({ loading: false });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

 

  return (
    <div>
      
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            id="SignIn-Heading-Label"
            style={{ textAlign: "center" }}
          >
            Admin Login
          </h1>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <button
            className="btn btn-secondary btn-block"
            id="sign-button-login"
            type="submit"
          >
            <i className="fas fa-sign-in-alt"></i> Login
          </button>
        </form>
      </div>
    
    </div>
  );
};




export default AdminLogin;
